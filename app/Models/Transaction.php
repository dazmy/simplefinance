<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'tanggal',
        'keterangan',
        'pemasukan',
        'pengeluaran',
        'saldo',
    ];

    public function next()
    {
        // get next
        return Transaction::where('id', '>', $this->id)->orderBy('id','asc')->first();
    
    }

    public  function previous()
    {
        // get previous
        return Transaction::where('id', '<', $this->id)->orderBy('id','desc')->first();
    
    }
}
