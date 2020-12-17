<?php
namespace App\Service;
use App\Truyen;
use App\DSTheLoai;
use App\TheLoai;
use KubAT\PhpSimple\HtmlDomParser;
use Cache;  
class TruyenService
{
    public function __construct()
    {
        
    }
    public function commonInfo(){
        $seconds = 60*60*24;
        // return Cache::remember('homePage', $seconds, function () {
            $total_truyen = Truyen::count();
        $total_theloai = DSTheLoai::count();
        $url = "https://truyenfull.vn/danh-sach/truyen-hot/";
        // $headers = array();
		// $headers[] = 'Host: truyenfull.vn';
		// $headers[] = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0';
		// $headers[] = 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';
		// $headers[] = 'Accept-Language: en-US,en;q=0.5';
		// $headers[] = 'Referer: http://truyenfull.vn/the-loai/sac/';
		//$headers[] = 'Cookie: _ga=GA1.2.811952154.1451875061; history-cookie=KzvPvbVsOibiBLaHV5bmggVGhpw6puIEtodXnhur90OnZhbi1raHV5bmgtdGhpZW4ta2h1eWV0OjI6NDN8VGjhuqduIEto4buRbmcgVGhpw6puIEjhuqE6dHJ1eWVuLXRoYW4ta2hvbmctdGhpZW4taGE6OjI2NzM%3D; _gat=1';
		$headers[] = 'Connection: keep-alive';
		$headers[] = 'Cache-Control: max-age=0';
		
		$c = curl_init($url);
		curl_setopt($c, CURLOPT_SSL_VERIFYPEER,false);
		curl_setopt($c, CURLOPT_SSL_VERIFYHOST,false);
		curl_setopt($c, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($c, CURLOPT_HTTPHEADER, $headers);
		
		$page = curl_exec($c);
		curl_close($c);
        //$html = $this->str_get_html($page);
        $list_truyen_hot = [];
        $document = HtmlDomParser::str_get_html($page);
      
            foreach($document->find('h3 a') as $element)
            {
                $tieude = trim($element->title);
                $linkgoc = trim($element->href);
                $item = ["tieude"=> $tieude, "linkgoc"=> $linkgoc];
                $truyen_hot = Truyen::where("url", $linkgoc)->first();
                if(!empty($truyen_hot)){
                    array_push($list_truyen_hot,$truyen_hot);
                }
                //array_push($truyen_hot,$item);
                	
            }
        $truyen_moi = Truyen::orderBy("updated_at","desc")->limit(12)->get();
        $id_ngontinh = TheLoai::where("idtheloai",41)->limit(6)->pluck("idtruyen");  
        $ngon_tinh = $this->getTruyenTheLoai(41);
        $tien_hiep = $this->getTruyenTheLoai(44);
        $kiem_hiep = $this->getTruyenTheLoai(43);
        $do_thi = $this->getTruyenTheLoai(47);
        $trinh_tham = $this->getTruyenTheLoai(40);
        $tham_hiem = $this->getTruyenTheLoai(27);
        return response()->json(array(
            "total_truyen"=> $total_truyen,
            "total_chap"=> $total_truyen*3000,
            "total_theloai"=> $total_theloai,
            "user_online"=> Rand(10,100),
            "truyen_hot" => $list_truyen_hot,
            "truyen_moi" => $truyen_moi,
            "ngon_tinh" => $ngon_tinh,
            "tien_hiep" => $tien_hiep,
            "kiem_hiep" => $kiem_hiep,
            "do_thi" => $do_thi,
            "trinh_tham" => $trinh_tham,
            "tham_hiem" => $tham_hiem,
        ));
        // });
    }
    public function getTruyenTheLoai($idtheloai, $limit=6) {
        $ids = TheLoai::where("idtheloai",$idtheloai)->limit($limit)->pluck("idtruyen");  
        $ntruyen = Truyen::whereIn("id",$ids)->get();
        return $ntruyen;
    }
    public function truyenInfo($id){
        $truyen = Truyen::find($id);
        $theloaiid = TheLoai::where("idtruyen",$id)->first();
        $tentruyen = $truyen->tentruyen;
        $urltruyen = $truyen->url;
        $idTheLoai = $theloaiid->idtheloai;
        $theloai = DSTheLoai::find($idTheLoai);
        $loai = "truyenfull";
        $page2 = $this->getListChap($urltruyen);
                $html = HtmlDomParser::str_get_html($page2);
                $array_chap = [];
                foreach($html->find('ul[class=list-chapter] li a') as $element)
                {
                    $textchuong = trim($element->plaintext);
                    $linkchuong = trim($element->href);
                    $templ = explode("/", $linkchuong);
                    $dem = count($templ);
                    $linkchuong = $templ[$dem-2];
                     $chap = [
                        "linkchuong"=> $linkchuong,
                        "textchuong"=> $textchuong,
                    ];
                    array_push($array_chap, $chap);
                }
        return response()->json(array(
            "theloai" => $theloai,
            "truyen" => $truyen,
            "gioithieu" => htmlspecialchars_decode($truyen->gioithieu),
            "listChap"=> $array_chap
        ));
    }
    public function getListChap($url){
        try{
            $headers[] = 'Connection: keep-alive';
            $headers[] = 'Cache-Control: max-age=0';
            
            $c = curl_init($url);
            curl_setopt($c, CURLOPT_SSL_VERIFYPEER,false);
            curl_setopt($c, CURLOPT_SSL_VERIFYHOST,false);
            curl_setopt($c, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($c, CURLOPT_HTTPHEADER, $headers);
            
            $page = curl_exec($c);
            curl_close($c);
            return $page;
        }catch(Exception $e){
            dd($e);
        }
        
    }
    public function docTruyen($id, $chuong)
    {
        $truyen = Truyen::find($id);
        $gioithieu = $truyen->gioithieu;
        $tacgia = $truyen->tacgia;
        $thumb = $truyen->thumb;
        $theloaiid = TheLoai::where("idtruyen",$id)->first();
        $tentruyen = $truyen->tentruyen;
        $urltruyen = $truyen->url;
        $idTheLoai = $theloaiid->idtheloai;
        $theloai = DSTheLoai::find($idTheLoai);
        $urlChuongTruyen = $urltruyen.$chuong;
        $loai = "truyenfull";
        $page = $this->getListChap($urlChuongTruyen);
        $html = HtmlDomParser::str_get_html($page);
        foreach($html->find('a[class=chapter-title]') as $element)
        {
            $textchuong = str_replace(" ", "",trim($element->plaintext));
            $titlechuong = trim($element->title);
            
        }
        foreach($html->find('div.chapter-c') as $element)
        {
            $noidungchuong = $element->innertext;
            
        }
										
        return response()->json(array(
            "theloai" => $theloai,
            "truyen" => $truyen,
            "gioithieu" => htmlspecialchars_decode($truyen->gioithieu),
            "noidung"=> $noidungchuong,
            "textchuong"=> $textchuong,
            "titlechuong"=> $titlechuong,
        ));
    }
}
