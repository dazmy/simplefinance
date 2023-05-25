<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory;

    protected $fillable = [
        'jumlah_pemasukan',
        'tanggal_pemasukan',
        'keterangan_pemasukan',
        'slug',
    ];

    // /**
    //  * Get the report that owns the Income
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\HasOne
    //  */
    // public function report(): HasOne
    // {
    //     return $this->HasOne(Report::class);
    // }

    public function next()
    {
        // get next
        return Income::where('id', '>', $this->id)->orderBy('id','asc')->first();
    
    }

    public  function previous()
    {
        // get previous
        return Income::where('id', '<', $this->id)->orderBy('id','desc')->first();
    
    }
}
