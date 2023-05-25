<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpendingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $spendings = [
            [
                'jumlah_pengeluaran' => 100000,
                'tanggal_pengeluaran' => Carbon::now(),
                'keterangan_pengeluaran' => 'Pengeluaran untuk Adam',
            ],
            [
                'jumlah_pengeluaran' => 200000,
                'tanggal_pengeluaran' => Carbon::now(),
                'keterangan_pengeluaran' => 'Pengeluaran untuk Budi',
            ],
        ];
        \App\Models\Spending::insert($spendings);
    }
}
