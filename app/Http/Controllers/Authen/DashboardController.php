<?php

namespace App\Http\Controllers\Authen;

use Carbon\Carbon;
use App\Models\Income;
use App\Models\Report;
use App\Models\Spending;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Transaction;

// $users = Model::whereMonth('created_at', '12')->get(); untuk mengambil bulan ges

class DashboardController extends Controller
{
    public function index()
    {
        $incomes = Income::whereMonth('tanggal_pemasukan', Carbon::now())->pluck('jumlah_pemasukan')->sum();
        $spendings = Spending::whereMonth('tanggal_pengeluaran', Carbon::now())->pluck('jumlah_pengeluaran')->sum();
        $total = Income::pluck('jumlah_pemasukan')->sum() - Spending::pluck('jumlah_pengeluaran')->sum();
        $transactions = Transaction::latest()->take(6)->get();
        return inertia('Authen/Dashboard/Index', [
            'incomes' => $incomes,
            'spendings' => $spendings,
            'total' => $total,
            'transactions' => $transactions,
        ]);
    }
}
