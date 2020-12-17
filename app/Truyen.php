<?php

namespace App;
use Illuminate\Support\Str;

use Illuminate\Database\Eloquent\Model;

class Truyen extends Model
{
    public $timestamp = false;
    protected $table = "temp";
    protected $guarded = [];
    protected $appends = ['slug'];
    public function theloai(){
        return $this->belongsToMany(DSTheLoai::class, 'theloai',"idtruyen","idtheloai");
    }
    public function getSlugAttribute()
    {
        $tentruyen = $this->tentruyen;
        return Str::slug($tentruyen, '-');

    }
}
