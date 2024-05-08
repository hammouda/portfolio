<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/projects',[ProjectController::class,'index'])->name('projects');
Route::get('/projects/{project}',[ProjectController::class,'show'])->name('project');
