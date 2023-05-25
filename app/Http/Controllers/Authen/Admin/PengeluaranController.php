<?php

namespace App\Http\Controllers\Authen\Admin;

use App\Models\Income;
use App\Models\Report;
use App\Models\Spending;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Authen\Admin\Pengeluaran\StorePengeluaranRequest;
use App\Http\Requests\Authen\Admin\Pengeluaran\UpdatePengeluaranRequest;
use App\Models\Transaction;
use Psy\Readline\Transient;

class PengeluaranController extends Controller
{
    public function index()
    {
        return inertia('Authen/Admin/Pengeluaran/Index');
    }
    
    public function store(StorePengeluaranRequest $request) {
        $validatedData = $request->validated();

        $validatedData['slug'] = \Illuminate\Support\Str::slug($validatedData['keterangan_pengeluaran']);
        Spending::create($validatedData);

        Transaction::create([
            'tanggal' => $request->tanggal_pengeluaran,
            'keterangan' => $request->keterangan_pengeluaran,
            'pemasukan' => 0,
            'pengeluaran' => $request->jumlah_pengeluaran,
            'saldo' => Income::pluck('jumlah_pemasukan')->sum() - Spending::pluck('jumlah_pengeluaran')->sum(),
        ]);

        return redirect()->back()->with([
            'message' => 'Pengeluaran berhasil ditambahkan',
            'type' => 'success',
        ]);
    }

    public function edit(Spending $spending)
    {
        return inertia('Authen/Admin/Pengeluaran/Edit', [
            'spending' => $spending,
        ]);
    }

    public function update(UpdatePengeluaranRequest $request, Spending $spending)
    {
        $validatedData = $request->validated();
        $lastSpending = $spending->jumlah_pengeluaran;

        // do something with the validated data
        $validatedData['slug'] = \Illuminate\Support\Str::slug($validatedData['keterangan_pengeluaran']);
        $spending->update($validatedData);

        Transaction::where('created_at', $spending->created_at)->update([
            'tanggal' => $request->tanggal_pengeluaran,
            'keterangan' => $request->keterangan_pengeluaran,
            'pemasukan' => 0,
            'pengeluaran' => $request->jumlah_pengeluaran,
        ]);

        $transactionAfter = Transaction::where('created_at', '>=', $spending->created_at)->get();
        foreach($transactionAfter as $item) {
            if($lastSpending > $spending->jumlah_pengeluaran) {
                $item->update([
                    'saldo' => $item->saldo + ($lastSpending - $spending->jumlah_pengeluaran),
                ]);
            }
            if($lastSpending < $spending->jumlah_pengeluaran) {
                $item->update([
                    'saldo' => $item->saldo - ($spending->jumlah_pengeluaran - $lastSpending),
                ]);
            }
        }

        return redirect()->route('dashboard.index')->with([
            'message' => 'Pengeluaran berhasil diubah',
            'type' => 'success',
        ]);
    }

    public function destroy($id)
    {
        $spendingId = Spending::find($id);
        $transactionId = Transaction::where('tanggal', $spendingId->tanggal_pengeluaran)->where('keterangan', $spendingId->keterangan_pengeluaran)->first();

        $transactionAfter = Transaction::where('created_at', '>', $transactionId->created_at)->get();
        foreach($transactionAfter as $item) {
            $item->update([
                'saldo' => $item->saldo + $spendingId->jumlah_pengeluaran,
            ]);
        }

        $spendingId->delete();
        $transactionId->delete();

        return redirect()->route('dashboard.index')->with([
            'message' => 'Pengeluaran berhasil dihapus',
            'type' => 'success',
        ]);
    }
}
