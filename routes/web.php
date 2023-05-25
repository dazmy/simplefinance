<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Authen\LaporanController;
use App\Http\Controllers\Authen\DashboardController;
use App\Http\Controllers\Authen\DataPemasukanController;
use App\Http\Controllers\Authen\Admin\PemasukanController;
use App\Http\Controllers\Authen\DataPengeluaranController;
use App\Http\Controllers\Authen\Admin\PengaturanController;
use App\Http\Controllers\Authen\Admin\PengeluaranController;
use App\Http\Controllers\Authen\Admin\ResetPasswordForAdminOnlyController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', 'login');

Route::middleware(['auth', 'role:admin|user'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/data/pemasukan/{page}', DataPemasukanController::class)->name('pemasukan');
    Route::get('/data/pengeluaran/{page}', DataPengeluaranController::class)->name('pengeluaran');
    Route::get('/data/laporan', [LaporanController::class, 'index'])->name('laporan');
    Route::get('/data/laporan/pdf', [LaporanController::class, 'show'])->name('laporan.pdf');
});

Route::middleware(['auth'])->prefix('admin/dasboard')->name('admin.dashboard.')->group(function () {
    Route::get('/pemasukan', [PemasukanController::class, 'index'])->name('pemasukan')->middleware('admin.only');
    Route::post('/pemasukan', [PemasukanController::class, 'store'])->name('pemasukan.store');
    Route::delete('/pemasukan/{id}', [PemasukanController::class, 'destroy'])->name('pemasukan.destroy');
    Route::get('/pemasukan/{income:slug}/edit', [PemasukanController::class, 'edit'])->name('pemasukan.edit');
    Route::put('/pemasukan/{income:slug}', [PemasukanController::class, 'update'])->name('pemasukan.update');

    Route::resource('pengaturan', PengaturanController::class)->middleware('admin.only');
    Route::put('/pengaturan/reset/{id}', ResetPasswordForAdminOnlyController::class)->name('pengaturan.reset')->middleware('admin.only');

    Route::get('/pengeluaran', [PengeluaranController::class, 'index'])->name('pengeluaran')->middleware('admin.only');
    Route::post('/pengeluaran', [PengeluaranController::class, 'store'])->name('pengeluaran.store');
    Route::delete('/pengeluaran/{id}', [PengeluaranController::class, 'destroy'])->name('pengeluaran.destroy');
    Route::get('/pengeluaran/{spending:slug}/edit', [PengeluaranController::class, 'edit'])->name('pengeluaran.edit');
    Route::put('/pengeluaran/{spending:slug}', [PengeluaranController::class, 'update'])->name('pengeluaran.update');
});


Route::prefix('proto')->name('proto.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Proto/Dashboard');
    })->name('dashboard');

    Route::get('/pemasukan', function () {
        return Inertia::render('Proto/Pemasukan');
    })->name('pemasukan');

    Route::get('/pengeluaran', function () {
        return Inertia::render('Proto/Pengeluaran');
    })->name('pengeluaran');

    Route::get('/data/pemasukan', function () {
        return Inertia::render('Proto/DataPemasukan');
    })->name('data.pemasukan');

    Route::get('/data/pengeluaran', function () {
        return Inertia::render('Proto/DataPengeluaran');
    })->name('data.pengeluaran');

    Route::get('/data/laporan', function () {
        return Inertia::render('Proto/DataLaporan');
    })->name('data.laporan');

    Route::get('/data/akun', function () {
        return Inertia::render('Proto/DataAkun');
    })->name('data.akun');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
