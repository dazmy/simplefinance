<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'income_id',
        'spending_id',
        'tanggal_laporan',
        'total',
    ];

    // /**
    //  * Get all of the incomes for the Report
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    //  */
    // public function incomes(): BelongsToMany
    // {
    //     return $this->belongsToMany(Income::class);
    // }

    // /**
    //  * Get all of the spendings for the Report
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    //  */
    // public function spendings(): BelongsToMany
    // {
    //     return $this->belongsToMany(Spending::class);
    // }
}
