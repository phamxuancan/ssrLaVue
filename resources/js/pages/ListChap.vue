<template>
    <div class="page-content-wrapper" v-if="theloai">
                <!-- BEGIN CONTENT BODY -->
                <div class="page-content">
                    <!-- BEGIN PAGE BREADCRUMB -->
                    <ul class="page-breadcrumb breadcrumb">
                        <li>
                            <a title="Đọc truyện online" href="/">Home</a>
                            <i class="fa fa-circle"></i>
                        </li>
                        <li>
                            <router-link :title="'Thể loại' + theloai.ten" :to="{name:'Home'}">{{ theloai.ten}}</router-link>
                            <i class="fa fa-circle"></i>
                        </li>
                        <li>
                            <a href="javascript:void(0)"><span class="active">Đọc truyện {{truyen.tentruyen}}</span></a>
                        </li>
                    </ul>
                    <!-- END PAGE BREADCRUMB -->
                    <!-- BEGIN PAGE BASE CONTENT -->

                    <div class="profile">
                        <div class="tabbable-line tabbable-full-width">
                           
                            <div class="">
                                <div class="tab-pane active" id="tab_1_1">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <ul class="list-unstyled">
                                                <li>
                                                    
											            <div class="img-thumb">
											                <img :alt="truyen.tentruyen" :src="truyen.thumb" >
											                <div class="caption">
											                    
											                </div>
											            </div>
											           
											       
                                                </li>
                                                <li>
                                                    
                                                    <div class="thongtintruyen note note-success">
				                                    	<strong>Tác giả</strong>: {{truyen.tacgia}}
				                                    </div>
                                                </li>
                                                <li>
                                                    <div class="thongtintruyen note note-info">
				                                    	<strong>Trạng thái</strong>: Loading...
				                                    </div>
                                                </li>
                                                <li>
                                                	<div class="thongtintruyen note note-danger">
				                                    	<strong>Thể loại</strong>: {{theloai.ten}}
				                                    </div>
                                                </li>
                                               
                                            </ul>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="row">
                                                <div class="gioithieutruyen col-md-8 profile-info">
                                                    <h1 class="font-green sbold uppercase">{{truyen.tentruyen}}</h1>
                                                    <div class="gioithieutruyen">
                                                    	<div class="noidung show-more-height" v-html="gioithieu">
                                                    	</div>
                                                    	 <div class="show-more">(Xem thêm)</div>
                                                    </div>
                                                    
                                                    
                                                    <div class="tabbable-custom nav-justified">
				                                        <ul class="nav nav-tabs nav-justified">
				                                            <li class="active">
				                                                <a aria-expanded="true" href="#tab_1_1_1" data-toggle="tab"> Danh sách chương </a>
				                                            </li>
				                                            <li class="">
				                                                <a aria-expanded="false" href="#tab_1_1_2" data-toggle="tab"> Cùng tác giả </a>
				                                            </li>
				                                            
				                                        </ul>
				                                        <div class="tab-content">
				                                            <div class="tab-pane active" id="tab_1_1_1">
				                                            	<div id="listchuong">
				                                            	<ul class="list-unstyled">
																	<li v-for="(chap, index) in listChap" :key="index">
																		<span class="fa fa-book"></span> <router-link :title="chap.textchuong" :to="{name:'DocTruyen',params:{slug:slug,id:id,chuong:chap.linkchuong}}">{{chap.textchuong}}</router-link> 
																	</li>
				                                           		</ul>
				                                             	</div>
				                                           		<div class="phantrang">     
													            	<ul class="pagination-view pagination-sm"></ul>        
											                	</div>
											                	<div class="phantrang">
											                	<span id="tranghientai">1</span> / <span><?php echo $sotrang;?></span>
											                	</div>
				                                            </div>
				                                            <div class="tab-pane" id="tab_1_1_2" style="">
				                                            	<div class="row">
				                                            	<?php
				                                                	$sql2 = mysql_query("SELECT tentruyen,thumb,id,tacgia FROM temp where tacgia like '$tacgia' and id <>'$idtruyen'");
																	while($qsql2 = mysql_fetch_array($sql2))
																	{
																	$idtruyen = $qsql2['id'];
																	$tentruyen = $qsql2['tentruyen'];
																	$tentruyenurl = chuyenurl($tentruyen);
																	$thumb = $qsql2['thumb'];
															        
															        
															        echo '
															        <div class="col-sm-12 col-md-6">
															        	<a href="Doc-Truyen-'.$tentruyenurl.'-'.$idtruyen.'/">
															            <div class="img-wrap">
															                <img class="lazy" data-original="'.$thumb.'" alt="'.$tentruyen.'">
															                <div class="caption">
															                    <h6 style="text-align: center; ">'.$tentruyen.'</h6>
															                </div>
															            </div>
															            </a>
															        </div>
															  		';
															  	}
																?>
																</div>
												
				                                            </div>
				                                            
				                                        </div>
				                                    </div>
                                                    
                                                  
                                                </div>
                                                <!--end col-md-8-->
                                                <div class="col-md-4">
                                                    <div class="portlet sale-summary">
                                                        <div class="portlet-title">
                                                            <div class="caption font-red sbold"> Chuyện hay </div>
                                                            
                                                        </div>
                                                        <div class="portlet-body">
                                                            <ul class="list-unstyled">
                                                            	<?php
                                                            	$link = "http://truyenfull.vn/ajax.php";
																$postdata = "type=top_switch&data_type=month&data_limit=20";
                                                            	$ketqua = gettruyenfull($link,$postdata);
                                                            	$html = str_get_html($ketqua);
																foreach($html->find('h3 a') as $element)
																{
																	$tieude = trim($element->title);
																	$linkgoc = trim($element->href);
																	$sql2 = mysql_query("SELECT tentruyen,url,id,tacgia FROM temp where url='$linkgoc'");
																	$qsql2 = mysql_fetch_array($sql2);
																	
																	$idtruyenhot = $qsql2['id'];
																	if($idtruyenhot != "")
																	{
																	$tentruyenhot = $qsql2['tentruyen'];
																	$tentruyenurlhot = chuyenurl($tentruyenhot);
																		
                                                            	?>
                                                                <li>
                                                                    <h2 class="truyenhot"><a title="Đọc truyện <?php echo $tentruyenhot;?>" href="Doc-Truyen-<?php echo $tentruyenurlhot;?>-<?php echo $idtruyenhot;?>/"><?php echo $tentruyenhot;?></a></h2>
                                                                        
                                                                    
                                                                </li>
                                                                <?php
																	}
                                                                }
                                                                ?>
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--end col-md-4-->
                                            </div>
                                            <!--end row-->
                                            
                                        </div>
                                    </div>
                                </div>
                                <!--end tab-pane-->
                            </div>
                        </div>
                    </div>
                    
                    
                    <!-- END PAGE BASE CONTENT -->
                </div>
                <!-- END CONTENT BODY -->
            </div>
            <!-- END CONTENT -->
        </div>
</template>
<script>
export default {
  data() {
    return {
      truyen: null,
      id: null,
      slug: "",
      theloai: null,
      gioithieu: null,
      listChap: null
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.slug = this.$route.params.slug;
    this.$axios
      .get("api/truyenInfo/" + this.id)
      .then(res => {
        this.theloai = res.data.theloai;
        this.truyen = res.data.truyen;
        this.gioithieu = res.data.gioithieu;
        this.listChap = res.data.listChap;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

