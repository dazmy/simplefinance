<?php

namespace App\Http\Controllers\Authen\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Authen\Admin\Pengaturan\StorePengaturanRequest;
use App\Http\Requests\Authen\Admin\Pengaturan\UpdatePengaturanRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;

class PengaturanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $users = User::all();
        $roles = \Spatie\Permission\Models\Role::all();
        $users = User::with('roles')->get();
        // dd($users[1]->roles[1]->name);
        return inertia('Authen/Admin/Pengaturan/Index', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Authen/Admin/Pengaturan/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePengaturanRequest $request)
    {
        $validatedData = $request->validated();
        $validatedData['password'] = bcrypt('password');
        $user = User::create($validatedData);
        $user->assignRole('user');
        event(new Registered($user));
        return redirect()->route('admin.dashboard.pengaturan.index')->with([
            'message' => 'User berhasil ditambahkan',
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user, $id)
    {
        return inertia('Authen/Admin/Pengaturan/Edit', [
            'user' => User::find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePengaturanRequest $request, $id)
    {
        $validatedData = $request->validated();
        $user = User::find($id);
        $user->update([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
        ]);
        return redirect()->route('admin.dashboard.pengaturan.index')->with([
            'message' => 'User berhasil diubah',
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return redirect()->back()->with([
            'message' => 'User berhasil dihapus',
            'type' => 'success'
        ]);
    }
}
