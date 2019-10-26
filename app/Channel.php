<?php

namespace LaraTube;

class Channel extends Model
{
    public function user(){
        return $this->belongsTo(User::class);
    }
}
