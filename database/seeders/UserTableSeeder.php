<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = \App\Models\User::create([
            'name' => 'Adam Zamzam',
            'email' => 'adamzamzam@email.com',
            'password' => bcrypt('password'),
        ]);

        $admin->assignRole('admin');
    }
}
