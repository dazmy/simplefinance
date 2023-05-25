<?php

namespace App\Http\Controllers\Authen\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Authen\Admin\Pemasukan\StorePemasukanRequest;
use App\Http\Requests\Authen\Admin\Pemasukan\UpdatePemasukanRequest;
use App\Models\Income;
use App\Models\Spending;
use App\Models\Transaction;

class PemasukanController extends Controller
{
    public function index()
    {
        return inertia('Authen/Admin/Pemasukan/Index');
    }

    public function store(StorePemasukanRequest $request)
    {
        $validatedData = $request->validated();
        
        // Do something with the validated data
        $validatedData['slug'] = \Illuminate\Support\Str::slug($validatedData['keterangan_pemasukan']);
        Income::create($validatedData);

        Transaction::create([
            'tanggal' => $request->tanggal_pemasukan,
            'keterangan' => $request->keterangan_pemasukan,
            'pemasukan' => $request->jumlah_pemasukan,
            'pengeluaran' => 0,
            'saldo' => Income::pluck('jumlah_pemasukan')->sum() - Spending::pluck('jumlah_pengeluaran')->sum(),
        ]);

        return redirect()->back()->with([
            'message' => 'Pemasukan berhasil ditambahkan',
            'type' => 'success',
        ]);
    }

    public function edit(Income $income)
    {
        return inertia('Authen/Admin/Pemasukan/Edit', [
            'income' => $income,
        ]);
        
    }

    public function update(UpdatePemasukanRequest $request, Income $income)
    {
        $validatedData = $request->validated();
        $lastIncome = $income->jumlah_pemasukan;
        
        // Do something with the validated data
        $validatedData['slug'] = \Illuminate\Support\Str::slug($validatedData['keterangan_pemasukan']);
        $income->update($validatedData);

        Transaction::where('created_at', $income->created_at)->update([
            'tanggal' => $request->tanggal_pemasukan,
            'keterangan' => $request->keterangan_pemasukan,
            'pemasukan' => $request->jumlah_pemasukan,
            'pengeluaran' => 0,
        ]);

        $transactionAfter = Transaction::where('created_at', '>=', $income->created_at)->get();
        foreach($transactionAfter as $item) {
            if($lastIncome > $income->jumlah_pemasukan) {
                $item->update([
                    'saldo' => $item->saldo - ($lastIncome - $income->jumlah_pemasukan),
                ]);
            }
            if($lastIncome < $income->jumlah_pemasukan) {
                $item->update([
                    'saldo' => $item->saldo + ($income->jumlah_pemasukan - $lastIncome),
                ]);
            }
        }

        return redirect()->route('dashboard.index')->with([
            'message' => 'Pemasukan berhasil diubah',
            'type' => 'success',
        ]);
    }

    public function destroy($id)
    {
        $incomeId = Income::find($id);
        $transactionId = Transaction::where('tanggal', $incomeId->tanggal_pemasukan)->where('keterangan', $incomeId->keterangan_pemasukan)->first();

        $transactionAfter = Transaction::where('created_at', '>', $incomeId->created_at)->get();
        foreach($transactionAfter as $item) {
            $item->update([
                'saldo' => $item->saldo - $incomeId->jumlah_pemasukan,
            ]);
        }

        $incomeId->delete();
        $transactionId->delete();

        return redirect()->route('dashboard.index')->with([
            'message' => 'Pemasukan berhasil dihapus',
            'type' => 'success',
        ]);
    }
}
