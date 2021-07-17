<?php

use App\Events\BroadcastFeedback;
use App\Http\Broadcast\ServerExample;
use App\Models\Feedback;
use Illuminate\Support\Facades\Route;
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

Route::get('/', function () {
    return view('form');
});

Route::get('/charts', function () {
    return view('chart');
});
Route::get('/teste', function () {
    $teste = [
        [
            'name' => 'teste',
            'like' => count( Feedback::where('like', 1)->get() ),
            'other' => count( Feedback::where('other', 1)->get() )
        ]
    ];

    event(new BroadcastFeedback($teste));
});


