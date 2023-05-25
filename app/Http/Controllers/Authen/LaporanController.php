<?php

namespace App\Http\Controllers\Authen;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LaporanController extends Controller
{
    public function index()
    {
        return inertia('Authen/Dashboard/Laporan');
    }

    public function show(Request $request)
    {
        $from = $request->from;
        $to = $request->to;

        $transactions = \App\Models\Transaction::whereBetween('tanggal', [$from, $to])->get();
        // dd($transactions);
        $data = [
            'title' => 'Laporan pada tanggal',
            'from' => $from,
            'to' => $to,
            'date' => date('m/d/Y'),
            'content' => $transactions,
        ];

        return inertia('Authen/Dashboard/LaporanPDF', [
            'data' => $data,
        ]);
    }
}
