<?php

namespace App\Http\Controllers;

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

        return response()->json(true);
    }
}
