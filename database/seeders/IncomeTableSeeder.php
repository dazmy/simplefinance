<?php

namespace Database\Seeders;

use App\Models\Income;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IncomeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $incomes = [
            [
                'jumlah_pemasukan' => 100000,
                'tanggal_pemasukan' => Carbon::now(),
                'keterangan_pemasukan' => 'Pemasukan dari Adam'
            ],
            [
                'jumlah_pemasukan' => 200000,
                'tanggal_pemasukan' => Carbon::now(),
                'keterangan_pemasukan' => 'Pemasukan dari Budi'
            ],
            [
                'jumlah_pemasukan' => 300000,
                'tanggal_pemasukan' => Carbon::now(),
                'keterangan_pemasukan' => 'Pemasukan dari Caca'
            ],
            [
                'jumlah_pemasukan' => 400000,
                'tanggal_pemasukan' => Carbon::now(),
                'keterangan_pemasukan' => 'Pemasukan dari Dedi'
            ],
            [
                'jumlah_pemasukan' => 500000,
                'tanggal_pemasukan' => Carbon::now(),
                'keterangan_pemasukan' => 'Pemasukan dari Euis'
            ],
            [
                'jumlah_pemasukan' => 600000,
                'tanggal_pemasukan' => Carbon::now(),
                'keterangan_pemasukan' => 'Pemasukan dari Fafa'
            ],
            [
                'jumlah_pemasukan' => 700000,
                'tanggal_pemasukan' => Carbon::now(),
                'keterangan_pemasukan' => 'Pemasukan dari Gigi'
            ],
            [
                'jumlah_pemasukan' => 800000,
                'tanggal_pemasukan' => Carbon::now(),
                'keterangan_pemasukan' => 'Pemasukan dari Haha'
            ],
            [
                'jumlah_pemasukan' => 900000,
                'tanggal_pemasukan' => Carbon::now(),
                'keterangan_pemasukan' => 'Pemasukan dari Icha'
            ],
            [
                'jumlah_pemasukan' => 1000000,
                'tanggal_pemasukan' => Carbon::now(),
                'keterangan_pemasukan' => 'Pemasukan dari Jaja'
            ],
        ];

        Income::insert($incomes);
    }
}
