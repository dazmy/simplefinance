<?php

namespace App\Http\Controllers\Authen\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\PasswordReset;

class ResetPasswordForAdminOnlyController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $id)
    {
        $user = \App\Models\User::find($id);
        $user->update([
            'password' => bcrypt('password'),
        ]);
        event(new PasswordReset($user));
        return redirect()->route('admin.dashboard.pengaturan.index')->with([
            'message' => 'Password ' . $user->name . ' berhasil direset',
            'type' => 'success'
        ]);
    }
}
