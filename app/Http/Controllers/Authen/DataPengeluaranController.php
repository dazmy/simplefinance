<?php

namespace App\Http\Controllers\Authen;

use App\Http\Controllers\Controller;
use App\Models\Spending;
use Illuminate\Http\Request;

class DataPengeluaranController extends Controller
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
            $spendings = Spending::all();
        } else {
            $spendings = Spending::latest()->paginate(6)->items();
        }
        $user = \App\Models\User::find(auth()->user()->id);
        $user = $user->roles[0]->name;
        return inertia('Authen/Dashboard/Pengeluaran', [
            'spendings' => $spendings,
            'user' => $user,
        ]);
    }
}
