<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TruyenController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('common/info',[TruyenController::class,"commonInfo"]);
Route::get('truyenInfo/{id}',[TruyenController::class,"truyenInfo"]);
Route::get('doc-truyen/{id}/{chuong}',[TruyenController::class,"docTruyen"]);
