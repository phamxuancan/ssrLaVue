<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use KubAT\PhpSimple\HtmlDomParser;
use Exception;
use Log;


class LeechTruyen extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'truyen:leech';

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
        try{
             define('MAX_FILE_SIZE', 120000000);
        $headers = array();
//$headers[] = 'Host: truyenyy.com';
    $headers[] = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0';
    $headers[] = 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';
    $headers[] = 'Accept-Language: en-US,en;q=0.5';
    //$headers[] = 'Referer: http://truyenyy.com/danhmuctruyen/?sap_xep=alphabet&loai_truyen=all&the_loai=17';
    //$headers[] = 'Cookie: __utma=67594580.1518516428.1451667072.1455177262.1455183138.10; __utmz=67594580.1451667072.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); csrftoken=q081IaqvT15e9X5Xow86TkYRG5AG7GgC; sessionid=d81548bb229170230bc2364f25724808; __utmc=67594580; __utmb=67594580.4.10.1455183138';
    $headers[] = 'Connection: keep-alive';
    $headers[] = 'Cache-Control: max-age=0';
    $page = 1;
    while($page < 300){
        $loginUrl = 'http://truyenfull.vn/danh-sach/truyen-moi/trang-'.$page.'/';
        echo $loginUrl;
    $c = curl_init($loginUrl);
    curl_setopt($c, CURLOPT_SSL_VERIFYPEER,false);
    curl_setopt($c, CURLOPT_SSL_VERIFYHOST,false);
    curl_setopt($c, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($c, CURLOPT_HTTPHEADER, $headers);
    $pages = curl_exec($c);
    curl_close($c);
    
$html = HtmlDomParser::str_get_html($pages);
if($html == false){
    continue;
}

foreach($html->find('div.list-truyen') as $element)
{
	$link = "";
	$tentruyen = "";
	$tacgia = "";
	
     $text = $element->innertext;
	 
	if($text == "")
	{
		Log::error("Khong thay noi dung");
		exit;
	}
     $html2 = HtmlDomParser::str_get_html($text);
     $i =0;
     $array_truyen = [];
	foreach($html2->find('h3[class=truyen-title] a') as $element2)
	{
		$link = $element2->href;
		$tentruyen = $element2->plaintext;
        $tentruyen = trim($tentruyen);
        $array_truyen[$i]["link"] = $link;
        $array_truyen[$i]["tentruyen"] = $tentruyen;
		$i++;
	}
    $i =0;
	foreach($html2->find('span.author') as $element2)
	{
		
			$tacgia = $element2->plaintext;
			$tacgia = trim($tacgia);
            $array_truyen[$i]["tacgia"] = $tacgia;
            $i++;
    }
	if(count($array_truyen)){
		
        foreach($array_truyen as $value){
            $flight = \App\Truyen::updateOrCreate(
                ['tentruyen' => $value["tentruyen"]],
                ['url' => $value["link"], 
				'tentruyen' => $value["tentruyen"],
				"tacgia"=> $value["tacgia"]]);
        }

    }else{
        echo "khong co noi dung " . date("Y-m-d");
    }
	
}
$page++;

    }
        }catch(Exception $e){
            Log::error("error leech truyen :" . $e->getMessage());
        }
       
       
    }
    
}
