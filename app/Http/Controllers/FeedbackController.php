<?php

namespace App\Http\Controllers;

use App\Events\BroadcastFeedback;
use App\Models\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function store(Request $request) {

        Feedback::create([
            'name' => $request->name,
            'like' => $request->like,
            'other' => $request->other,
        ]);

        $teste = [
            [
                'name' => 'teste',
                'like' => count( Feedback::where('like', 1)->get() ),
                'other' => count( Feedback::where('other', 1)->get() )
            ]
        ];

        event(new BroadcastFeedback($teste));

        return response()->json(true);
    }

    public function show() {
        $teste = [
            [
                'name' => 'teste',
                'like' => count( Feedback::where('like', 1)->get() ),
                'other' => count( Feedback::where('other', 1)->get() )
            ]
        ];
        return response()->json($teste);
    }
}
