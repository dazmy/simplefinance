<?php

namespace App\Http\Requests\Authen\Admin\Pemasukan;

use Illuminate\Foundation\Http\FormRequest;

class StorePemasukanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return \Illuminate\Support\Facades\Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'jumlah_pemasukan' => 'required|numeric',
            'tanggal_pemasukan' => 'required|date',
            'keterangan_pemasukan' => 'required|string',
        ];
    }
}
