<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Service\TruyenService;

class TruyenController extends Controller
{
    // public $truyenService;
    // public function ___construct(TruyenService $truyenService){
    //     $this->truyenService = $truyenService;
    // }
    public function commonInfo(TruyenService $truyenService){
        return $truyenService->commonInfo();
    }
    public function truyenInfo(TruyenService $truyenService, $id){
        return $truyenService->truyenInfo($id);
    }
    public function docTruyen(TruyenService $truyenService, $id, $chuong){
        return $truyenService->docTruyen($id, $chuong);
    }
	public function getTruyenmoi(TruyenService $truyenService){
        return $truyenService->getTruyenmoi();
    }
	public function getTruyenCate(TruyenService $truyenService, $cate){
        return $truyenService->getTruyenCate($cate);
    }
}
