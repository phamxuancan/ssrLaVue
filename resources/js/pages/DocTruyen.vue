<template>
    <div class="page-content-wrapper" v-if="truyen">
                <!-- BEGIN CONTENT BODY -->
                <div class="page-content">
                    <!-- BEGIN PAGE BREADCRUMB -->
                    <ul class="page-breadcrumb breadcrumb">
                        <li>
                            <a title="Đọc truyện online" href="/">Home</a>
                            <i class="fa fa-circle"></i>
                        </li>
                        <li>
                             <router-link :title="'Thể loại' + theloai.ten" :to="{name:'home'}">{{ theloai.ten}}</router-link>
                            <i class="fa fa-circle"></i>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><span class="active">Đọc truyện {{truyen.tentruyen}}</span></a>
                        </li>
                    </ul>
                    <!-- END PAGE BREADCRUMB -->
                    <!-- BEGIN PAGE BASE CONTENT -->

                    <div class="row">
                        <div class="col-md-12">
                            <!-- BEGIN Portlet PORTLET-->
                            <div class="portlet box blue-soft">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <h1 class="read"><i class="fa icon-notebook"></i> Đọc truyện {{truyen.tentruyen}}</h1></div>
                               
                                </div>
                                <div id="bodynoidung" class="portlet-body">
                                	
                                	
                                	<h2 class="chuongsub uppercase">{{textchuong}}</h2>
                                	
                                	<div class="control toolboxkhung">
	                                	<div class="btn-group btn-group btn-group-justified toolbox">
	                                        <a href="<?php echo $urlchuongtruoc;?>" class="btn  blue <?php echo $distruoc;?>"><span class="glyphicon glyphicon-chevron-left"></span> Trước </a>
	                                        <a data-toggle="modal" href="<?php echo $_SERVER['REQUEST_URI'];?>#showlistchuong" class="btn red"> List chương </a>
	                                        <a href="<?php echo $urlchuongsau;?>" class="btn green <?php echo $dissau;?>"> Sau <span class="glyphicon glyphicon-chevron-right"></span></a>
	                                    </div>
	                                    
                                   </div>
                                   <div class="control toolboxkhung">
	                                    
	                                    <div class="btn-group btn-group btn-group-justified toolbox">
	                                        <a href="" class="btn green fullscreen"></span> Toàn màn hình </a>
	                                        <a class="btn dark nenden btn-nenden" > Nền đen </span></a>
	                                        <a class="btn btn-default nentrang btn-nentrang" > Nền trắng </span></a>
	                                    </div>
                                   </div>
                                   
                                   
                                   <div id="kichthuoc" class="noUi-success"></div>
                                  
                                   
                             		<div id="noidungchap" v-html="noidung">
                             		</div>
                             		
                             		
                             		<div class="control toolboxkhung">
	                                	<div class="btn-group btn-group btn-group-justified toolbox">
	                                        <a href="<?php echo $urlchuongtruoc;?>" class="btn  blue <?php echo $distruoc;?>"><span class="glyphicon glyphicon-chevron-left"></span> Trước </a>
	                                        <a data-toggle="modal" href="<?php echo $_SERVER['REQUEST_URI'];?>#showlistchuong" class="btn red"> List chương </a>
	                                        <a href="<?php echo $urlchuongsau;?>" class="btn green <?php echo $dissau;?>"> Sau <span class="glyphicon glyphicon-chevron-right"></span></a>
	                                    </div>
	                                    
                                   </div>
                                   <div class="control toolboxkhung">
	                                    
	                                    <div class="btn-group btn-group btn-group-justified toolbox">
	                                        <a href="" class="btn green fullscreen"></span> Toàn màn hình </a>
	                                        <a class="btn dark nenden btn-nenden" > Nền đen </span></a>
	                                        <a class="btn btn-default nentrang btn-nentrang" > Nền trắng </span></a>
	                                    </div>
                                   </div>
                                    
                                </div>
                            </div>
                            <div id="showlistchuong" class="modal fade modal-scroll" tabindex="-1" data-replace="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                                                    <h4 class="modal-title">Danh sách chương</h4>
                                                </div>
                                                <div class="modal-body">
                                                		<div class="phantrang">     
													            	<ul class="pagination-view pagination-sm"></ul>        
											                	</div>
                                                    <div id="listchuong">
                                                    	
				                                            	<ul class="list-unstyled">
									                			
				                                            	<?php
				                                            	
				                                            	if($loai == "truyenfull")
																{
				                                            		$page2 = gettruyenfull($urltruyen);
																	$html = str_get_html($page2);
																	foreach($html->find('ul[class=list-chapter] li a') as $element)
																	{
																		$textchuong = trimkhoangtrang(trim($element->plaintext));
																		$linkchuong = trim($element->href);
																		$templ = explode("/", $linkchuong);
																		$dem = count($templ);
																		$linkchuong = $templ[$dem-2];
				                                            			echo '<li><span class="fa fa-book"></span> <a title="'.$textchuong.'" href="'.$_GET['page'].'/'.$linkchuong.'/">'.$textchuong.'</a> </li>';
				                                            	
				                                                	}
																	foreach($html->find('input#total-page') as $element2)
																	{
																		$sotrang = $element2->value;
																	}
																}
																
																if($loai == "truyenyy")
																{
				                                            		$page2 = gettruyenyy($urltruyen);
																	$html = str_get_html($page2);
																	foreach($html->find('a[class=jblack]') as $element)
																	{
																		$textchuong = trimkhoangtrang(trim($element->plaintext));
																		$linkchuong = trim($element->href);
																		$templ = explode("/", $linkchuong);
																		$dem = count($templ);
																		$linkchuong = $templ[$dem-2];
				                                            			echo '<li><span class="fa fa-book"></span> <a title="'.$textchuong.'" href="'.$_GET['page'].'/'.$linkchuong.'/">'.$textchuong.'</a> </li>';
				                                            	
				                                                	}
																	foreach($html->find('div.pagination ul li') as $element2)
																	{
																		$text = trim($element2->plaintext);
																		if($text != "&rarr;")
																		{
																			$sotrang = $text;
																		}
																	}
																}
																
																
				                                                ?>
				                                                </ul>
				                                               </div>
				                                           
				                                             	</div>
				                                           		<div class="phantrang">     
													            	<ul class="pagination-view pagination-sm"></ul>        
											                	</div>
											                	<div class="phantrang">
											                	<span id="tranghientai"></span> / <span><?php echo $sotrang;?></span>
											                	</div>
											                	
                                                <div class="modal-footer">
                                                    <button type="button" data-dismiss="modal" class="btn dark btn-outline">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            <!-- END Portlet PORTLET-->
                        </div>
                    </div>
                    
                    
                    <!-- END PAGE BASE CONTENT -->
                </div>
                <!-- END CONTENT BODY -->
            </div>
            <!-- END CONTENT -->
</template>
<script>
export default {
  data() {
    return {
      truyen: null,
      theloai: null,
      gioithieu: null,
      id: null,
      slug: null,
      noidung: null,
      titlechuong: null,
      textchuong: null
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.slug = this.$route.params.slug;
    axios
      .get("api/doc-truyen/" + this.id + "/" + this.$route.params.chuong)
      .then(res => {
        this.theloai = res.data.theloai;
        this.truyen = res.data.truyen;
        this.gioithieu = res.data.gioithieu;
        this.noidung = res.data.noidung;
        this.textchuong = res.data.textchuong;
        this.titlechuong = res.data.titlechuong;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

