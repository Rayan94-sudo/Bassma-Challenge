<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon;
class SendMail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'email Command Executed Successfully!';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->sendEmail();
    $this->info('email:send Command is working fine!');
        return 0;
    }

    public function sendEmail(){
        try{
             // retrieve user count as at today
             $today = Carbon::today()->format('Y-m-d');
             $usersToday = User::whereDate('created_at', $today)->count();
             $data = array('number'=>$usersToday);


        Mail::send('welcome', $data,function($message){
            $message->to('rayanalijawhari@gmail.com','Rayan')->subject('Registrations');
        });
        return response()->json([
            'msg' => "succes",
        ]);
        return back();
        }
        catch(Exception $e){}
    }

}
