<?php

namespace App\Http\Controllers\Authen;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DataPemasukanController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $page)
    {
        if($page == 'all') {
            $incomes = \App\Models\Income::all();
        } else {
            $incomes = \App\Models\Income::latest()->paginate(6)->items();
        }
        // $incomes = \App\Models\Income::paginate(5)->all();
        // dd($incomes);
        $user = \App\Models\User::find(auth()->user()->id);
        $user = $user->roles[0]->name;

        return inertia('Authen/Dashboard/Pemasukan', [
            'incomes' => $incomes,
            'user' => $user,
        ]);
    }
}
