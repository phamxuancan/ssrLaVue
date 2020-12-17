<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Truyen;
use App\DSTheLoai;
use App\TheLoai;
use KubAT\PhpSimple\HtmlDomParser;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
class TruyenDetail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'truyen:leech_detail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        
             define('MAX_FILE_SIZE', 120000000);
        $truyens = Truyen::whereNull("thumb")->get();
        $headers[] = 'Connection: keep-alive';
        $headers[] = 'Cache-Control: max-age=0';
        $headers[] = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0';
        $headers[] = 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';
        $headers[] = 'Accept-Language: en-US,en;q=0.5';
        foreach($truyens as $truyen){
            try{
            $url = $truyen->url;
            $idtruyen = $truyen->id;
            $ten = $truyen->tentruyen;
            $c = curl_init($url);
            curl_setopt($c, CURLOPT_SSL_VERIFYPEER,false);
            curl_setopt($c, CURLOPT_SSL_VERIFYHOST,false);
            curl_setopt($c, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($c, CURLOPT_HTTPHEADER, $headers);
            $page = curl_exec($c);
            curl_close($c);
            $html = HtmlDomParser::str_get_html($page);
           
            foreach($html->find('div[class=book] img') as $element)
            {
                $thumb = $element->src;
            }
            foreach($html->find('div[class=desc-text-full],div[class=desc-text]') as $element)
                {
                    $gioithieu = $element->innertext;
                }   
            foreach($html->find('div[class=info] div a[itemprop=genre]') as $element)
            {
                $theloai = $element->plaintext;
	
                $theloai = trim($theloai);
                $theloaitim = Str::slug($theloai, '-');
                $danhsachtheloai = DSTheLoai::where("tenurl", $theloaitim)->first();
                if(empty($danhsachtheloai)){
                    DSTheLoai::insert([
                         "ten"=> $theloai,   
                         "tenurl"=> $theloaitim,   
                    ]);
                    $idtheloai = DB::getPdo()->lastInsertId();
                }else{
                    $idtheloai = $danhsachtheloai->id;
                }
                $theloai = TheLoai::where("idtruyen", $idtruyen)->where("idtheloai", $idtheloai)->first();
                if(empty($theloai)){
                    TheLoai::insert([
                        "idtruyen"=> $idtruyen,
                        "idtheloai"=> $idtheloai,
                    ]);
                }
            }
             $gioithieu = str_replace("'", "\"", $gioithieu);
                
                $gioithieu = htmlentities($gioithieu);
				
                if (strpos($gioithieu, 'xF0\x9F\x8D\x80\xF0\x9F') == false) {
                    Truyen::where("id", $idtruyen)->update([
                    "thumb"=> $thumb,
                    "gioithieu"=> $gioithieu,
                    "trangthai"=> 1,
                ]);
                }
               
                echo "done - " . $idtruyen . "- ten :" . $ten ."\n";
        }catch(Exception $e){
            echo ($e->getMessage());
            continue;
        }
        }
        
       
    }
}
