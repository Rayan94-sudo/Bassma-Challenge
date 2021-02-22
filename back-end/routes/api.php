<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JwtAuthController;
use App\Http\Controllers\CustomerController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', [CustomerController::class, 'register']);

Route::group([

    'prefix' => 'auth'
], function ($router) {
    Route::get('/index', [CustomerController::class, 'index']);
    Route::post('/average', [CustomerController::class, 'average']);
    Route::post('/signout', [JwtAuthController::class, 'signout']);
});

Route::group([

    'prefix' => 'auth'
], function ($router) {
    Route::post('/signup', [JwtAuthController::class, 'register']);
    Route::post('/signin', [JwtAuthController::class, 'login']);

});
