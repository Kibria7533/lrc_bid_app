<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class lrtc extends Controller
{
    public function show(){
        $data=DB::table('lrtt')->get();
        return $data;
    }
    public function insert(Request $request){
        DB::table('lrtt')->insert([
           'name'=>$request->name
        ]);
    }

    public function delete($id){
        DB::table('lrtt')->delete($id);
    }

    public function edit($id){
       $data=DB::table('lrtt')->where('id',$id)->get();
     
        return $data;
    }
    public function editsave(Request $request){
        DB::table('lrtt')->where('id',$request->id)->update([
            'name'=>$request->name
         ]);
    }
}
