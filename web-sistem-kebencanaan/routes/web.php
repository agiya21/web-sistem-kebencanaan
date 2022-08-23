<?php

use App\Http\Controllers\SikdeliserdangController;
use Composer\InstalledVersions;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [SikdeliserdangController::class, 'index']);
    // return Inertia::render('Homepage' , [
    //     'title' => 'Web Sistem Kebencanaan Deli Serdang',
    //     'description' => 'Selamat datang di Web Sistem Kebencanaan Deli Serdang',
    // ]);

Route::get('/insertdata', function () {
    return Inertia::render('InsertData', [
        'title' => 'Insert Data - Sistem Informasi Kebencanaan Deli Serdang',
    ]);
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
