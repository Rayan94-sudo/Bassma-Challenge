<?php

namespace App\Http\Controllers;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;

class CustomerController extends Controller
{

    /**
     * customer registration
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $req = Validator::make($request->all(), [
            'firstname' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required|string',
            'role' => 'required|string',
        ]);

        if($req->fails()){
            return response()->json($req->errors()->toJson(), 400);
        }

        $user = User::create(array_merge(
                    $req->validated(),
                    ['password' => bcrypt($request->password)]
                ));

        return response()->json([
            'message' => 'User signed up',
            'user' => $user
        ], 201);
    }


   /**
     *@return mixed
     */
    /**
     *To show costumers paginate and filtring
     */
    public function index(Request $request)
    {

        $req = Validator::make($request->all(), [
            'pagination' => 'required|integer',
        ]);
        $role='client';
        if($request->id==null && $request->firstname==null && $request->email==null)
        $user = User::where([['role', $role]])->paginate($request->pagination);
        else
        $user = User::where([['role', $role],['id',$request->id]])->orwhere([['role', $role],['firstname',$request->firstname]])->orwhere([['role', $role],['email',$request->email]])->paginate($request->pagination);


        return response()->json([
            'data' => $user,

        ]);
    }

      /**
     *@return mixed
     */

/*
*  average number of registrations within a specific period
*/

    public function average(Request $request)
    {
        $req = Validator::make($request->all(), [
            'period' => 'required|string',
        ]);

        $usersCount=User::all()->count();

            if ($request->period=='d'){
        $user=User::select('created_at')->get()->groupBy(function($date){
            return Carbon::parse($date->created_at)->format('d');
        });

        $average=$usersCount/$user->count();
        return response()->json([
            'average' => $average,
        ]);
        }

        if ($request->period=='m'){
        $user=User::select('created_at')->get()->groupBy(function($date){
            return Carbon::parse($date->created_at)->format('m');
        });

        $average=$usersCount/$user->count();
        return response()->json([
            'average' => $average,
        ]);
    }
        if ($request->period=='y'){
        $user=User::select('created_at')->get()->groupBy(function($date){
            return Carbon::parse($date->created_at)->format('y');
        });

        $average=$usersCount/$user->count();
        return response()->json([
            'average' => $average,
        ]);
    }
    return response()->json([
        'error' => 'error parametrs',
    ]);
    }


}
