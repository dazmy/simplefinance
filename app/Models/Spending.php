<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Relations\HasOne;

class Spending extends Model
{
    use HasFactory;

    protected $fillable = [
        'jumlah_pengeluaran',
        'tanggal_pengeluaran',
        'keterangan_pengeluaran',
        'slug',
    ];

    // /**
    //  * Get the report that owns the Spending
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\HasOne
    //  */
    // public function report(): HasOne
    // {
    //     return $this->HasOne(Report::class);
    // }
}
