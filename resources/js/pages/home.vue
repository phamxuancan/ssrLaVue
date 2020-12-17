<template>
    <div class="page-content-wrapper">
                <!-- BEGIN CONTENT BODY -->
                <div class="page-content">
                    <!-- BEGIN PAGE BREADCRUMB -->
                    <ul class="page-breadcrumb breadcrumb">
                        <li>
                            <a title="Đọc truyện online" href="trang-chu/">Home</a>
                            
                        </li>
                    </ul>
                    <!-- END PAGE BREADCRUMB -->
                    <!-- BEGIN PAGE BASE CONTENT -->
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div class="dashboard-stat blue">
                                <div class="visual">
                                    <i class="fa fa-book"></i>
                                </div>
                                <div class="details">
                                    <div class="number">
                                        <span data-counter="counterup" :data-value="total_truyen">{{total_truyen}}</span>
                                    </div>
                                    <div class="desc"> Đầu truyện </div>
                                </div>
                                <a class="more" href="javascript:;"> Xem ngay
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div class="dashboard-stat red">
                                <div class="visual">
                                    <i class="fa fa-file-pdf-o"></i>
                                </div>
                                <div class="details">
                                    <div class="number">
                                        <span data-counter="counterup" :data-value="total_chap">{{total_chap}}</span></div>
                                    <div class="desc"> Chap </div>
                                </div>
                                <a class="more" href="javascript:;"> Xem ngay
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div class="dashboard-stat green">
                                <div class="visual">
                                    <i class="fa fa-list"></i>
                                </div>
                                <div class="details">
                                    <div class="number">
                                        <span data-counter="counterup" :data-value="total_theloai">{{total_theloai}}</span>
                                    </div>
                                    <div class="desc"> Thể loại </div>
                                </div>
                                <a class="more" href="the-loai/"> Xem ngay
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div class="dashboard-stat purple">
                                <div class="visual">
                                    <i class="fa fa-users"></i>
                                </div>
                                <div class="details">
                                    <div class="number">
                                        <span data-counter="counterup" :data-value="user_online">{{user_online}}</span> người </div>
                                    <div class="desc"> Online </div>
                                </div>
                                <a class="more" href="javascript:;"> Xem ngay
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    
                    <div class="row">
                    	<div class="col-md-12">
                            <!-- BEGIN Portlet PORTLET-->
                            <div class="portlet light boxhome">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-book-open font-yellow-casablanca"></i>
                                        <span class="caption-subject bold font-yellow-casablanca uppercase"> Đang HOT </span>
                                    </div>
                                    
                                </div>
                                <!-- truyen hot  -->
                                <div class="portlet-body">
									<div class="row">
                                        <div class="col-xs-6 col-sm-4 col-md-2" v-for="(truyen,index) in truyen_hot" :key="index" >
                                            <router-link :to="{name:'ListChap',params:{slug:truyen.slug,id:truyen.id}}">
                                                <div class="img-wrap">
                                                    <img class="lazy" :src="truyen.thumb" :alt="truyen.tentruyen">
                                                    <div class="caption">
                                                        <h6 style="text-align: center; ">{{truyen.tentruyen}}</h6>
                                                    </div>
                                                </div>
                                            </router-link>
                                        </div>
												  	
                                    </div>
                                </div>
                               
                            </div>
                            <!-- END Portlet PORTLET-->
                        </div>
                        
						<div class="col-md-12">
                            <!-- BEGIN Portlet PORTLET-->
                            <div class="portlet light boxhome">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-book-open font-yellow-casablanca"></i>
                                        <span class="caption-subject bold font-yellow-casablanca uppercase"> Mới nhất </span>
                                    </div>
                                    
                                </div>
                                <div class="portlet-body">
									<div class="row">
                                        <div class="col-xs-6 col-sm-4 col-md-2" v-for="(truyen,index) in truyen_moi" :key="index" >
                                            <router-link :to="{name:'ListChap',params:{slug:truyen.slug,id:truyen.id}}">
                                            <div class="img-wrap">
                                                <img class="lazy" :src="truyen.thumb" :alt="truyen.tentruyen">
                                                <div class="caption">
                                                    <h6 style="text-align: center; ">{{truyen.tentruyen}}</h6>
                                                </div>
                                            </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <a href="moi-nhat/"><div class="fa-item" style="float:right;"><i class="icon-arrow-right"></i> Xem thêm</div></a>
                            </div>
                            <!-- END Portlet PORTLET-->
                        </div>
						
                        
                        <div class="col-md-12">
                            <!-- BEGIN Portlet PORTLET-->
                            <div class="portlet light boxhome">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-book-open font-yellow-casablanca"></i>
                                        <span class="caption-subject bold font-yellow-casablanca uppercase"> Ngôn tình </span>
                                    </div>
                                    
                                </div>
                                <div class="portlet-body">
									<div class="row">
									    <div class="col-xs-6 col-sm-4 col-md-2" v-for="(truyen,index) in ngon_tinh" :key="index" >
                                            <router-link :to="{name:'ListChap',params:{slug:truyen.slug,id:truyen.id}}">
                                            <div class="img-wrap">
                                                <img class="lazy" :src="truyen.thumb" :alt="truyen.tentruyen">
                                                <div class="caption">
                                                    <h6 style="text-align: center; ">{{truyen.tentruyen}}</h6>
                                                </div>
                                            </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <a href="the-loai/Ngon-Tinh.html"><div class="fa-item" style="float:right;"><i class="icon-arrow-right"></i> Xem thêm</div></a>
                            </div>
                            <!-- END Portlet PORTLET-->
                        </div>
                        
                        <div class="col-md-12">
                            <!-- BEGIN Portlet PORTLET-->
                            <div class="portlet light boxhome">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-book-open font-yellow-casablanca"></i>
                                        <span class="caption-subject bold font-yellow-casablanca uppercase"> Tiên Hiệp </span>
                                    </div>
                                    
                                </div>
                                <div class="portlet-body">
									<div class="row">
										 <div class="col-xs-6 col-sm-4 col-md-2" v-for="(truyen,index) in tien_hiep" :key="index" >
                                            <router-link :to="{name:'ListChap',params:{slug:truyen.slug,id:truyen.id}}">
                                            <div class="img-wrap">
                                                <img class="lazy" :src="truyen.thumb" :alt="truyen.tentruyen">
                                                <div class="caption">
                                                    <h6 style="text-align: center; ">{{truyen.tentruyen}}</h6>
                                                </div>
                                            </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <a href="the-loai/Tien-Hiep.html"><div class="fa-item" style="float:right;"><i class="icon-arrow-right"></i> Xem thêm</div></a>
                            </div>
                            <!-- END Portlet PORTLET-->
                        </div>
                        
                        <div class="col-md-12">
                            <!-- BEGIN Portlet PORTLET-->
                            <div class="portlet light boxhome">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-book-open font-yellow-casablanca"></i>
                                        <span class="caption-subject bold font-yellow-casablanca uppercase"> Kiếm Hiệp </span>
                                    </div>
                                    
                                </div>
                                <div class="portlet-body">
									<div class="row">
										<div class="col-xs-6 col-sm-4 col-md-2" v-for="(truyen,index) in kiem_hiep" :key="index" >
                                            <router-link :to="{name:'ListChap',params:{slug:truyen.slug,id:truyen.id}}">
                                            <div class="img-wrap">
                                                <img class="lazy" :src="truyen.thumb" :alt="truyen.tentruyen">
                                                <div class="caption">
                                                    <h6 style="text-align: center; ">{{truyen.tentruyen}}</h6>
                                                </div>
                                            </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <a href="the-loai/Kiem-Hiep.html"><div class="fa-item" style="float:right;"><i class="icon-arrow-right"></i> Xem thêm</div></a>
                            </div>
                            <!-- END Portlet PORTLET-->
                        </div>
                        

                        <div class="col-md-12">
                            <!-- BEGIN Portlet PORTLET-->
                            <div class="portlet light boxhome">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-book-open font-yellow-casablanca"></i>
                                        <span class="caption-subject bold font-yellow-casablanca uppercase"> Đô thị </span>
                                    </div>
                                    
                                </div>
                                <div class="portlet-body">
									<div class="row">
										<div class="col-xs-6 col-sm-4 col-md-2" v-for="(truyen,index) in do_thi" :key="index" >
                                            <router-link :to="{name:'ListChap',params:{slug:truyen.slug,id:truyen.id}}">
                                            <div class="img-wrap">
                                                <img class="lazy" :src="truyen.thumb" :alt="truyen.tentruyen">
                                                <div class="caption">
                                                    <h6 style="text-align: center; ">{{truyen.tentruyen}}</h6>
                                                </div>
                                            </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <a href="the-loai/Do-Thi.html"><div class="fa-item" style="float:right;"><i class="icon-arrow-right"></i> Xem thêm</div></a>
                            </div>
                            <!-- END Portlet PORTLET-->
                        </div>
                        
                        
                        <div class="col-md-12">
                            <!-- BEGIN Portlet PORTLET-->
                            <div class="portlet light boxhome">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-book-open font-yellow-casablanca"></i>
                                        <span class="caption-subject bold font-yellow-casablanca uppercase"> Trinh thám </span>
                                    </div>
                                    
                                </div>
                                <div class="portlet-body">
									<div class="row">
										<div class="col-xs-6 col-sm-4 col-md-2" v-for="(truyen,index) in trinh_tham" :key="index" >
                                            <router-link :to="{name:'ListChap',params:{slug:truyen.slug,id:truyen.id}}">
                                            <div class="img-wrap">
                                                <img class="lazy" :src="truyen.thumb" :alt="truyen.tentruyen">
                                                <div class="caption">
                                                    <h6 style="text-align: center; ">{{truyen.tentruyen}}</h6>
                                                </div>
                                            </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <a href="the-loai/Trinh-Tham.html"><div class="fa-item" style="float:right;"><i class="icon-arrow-right"></i> Xem thêm</div></a>
                            </div>
                            <!-- END Portlet PORTLET-->
                        </div>
                        
                        <div class="col-md-12">
                            <!-- BEGIN Portlet PORTLET-->
                            <div class="portlet light boxhome">
                                <div class="portlet-title">
                                    <div class="caption">
                                        <i class="icon-book-open font-yellow-casablanca"></i>
                                        <span class="caption-subject bold font-yellow-casablanca uppercase"> Thám Hiểm </span>
                                    </div>
                                    
                                </div>
                                <div class="portlet-body">
									<div class="row">
										<div class="col-xs-6 col-sm-4 col-md-2" v-for="(truyen,index) in tham_hiem" :key="index" >
                                            <router-link :to="{name:'ListChap',params:{slug:truyen.slug,id:truyen.id}}">
                                            <div class="img-wrap">
                                                <img class="lazy" :src="truyen.thumb" :alt="truyen.tentruyen">
                                                <div class="caption">
                                                    <h6 style="text-align: center; ">{{truyen.tentruyen}}</h6>
                                                </div>
                                            </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <a href="the-loai/Sac-Hiep.html"><div class="fa-item" style="float:right;"><i class="icon-arrow-right"></i> Xem thêm</div></a>
                            </div>
                            <!-- END Portlet PORTLET-->
                        </div>
                        
                    </div>
                    
                    
                    <!-- END PAGE BASE CONTENT -->
                </div>
                <!-- END CONTENT BODY -->
            </div>
</template>
<script>
export default {
  data() {
    return {
      total_truyen: 0,
      total_chap: 0,
      total_theloai: 0,
      user_online: 0,
      truyen_hot: null,
      truyen_moi: null,
      ngon_tinh: null,
      tien_hiep: null,
      do_thi: null,
      trinh_tham: null,
      tham_hiem: null,
      kiem_hiep: null
    };
  },
  mounted() {
    this.$axios
      .get("api/common/info")
      .then(res => {
        if (res.data) {
          this.total_truyen = res.data.total_truyen;
          this.total_chap = res.data.total_chap;
          this.total_theloai = res.data.total_theloai;
          this.user_online = res.data.user_online;
          this.truyen_hot = res.data.truyen_hot;
          this.truyen_moi = res.data.truyen_moi;
          this.ngon_tinh = res.data.ngon_tinh;
          this.tien_hiep = res.data.tien_hiep;
          this.kiem_hiep = res.data.kiem_hiep;
          this.do_thi = res.data.do_thi;
          this.trinh_tham = res.data.trinh_tham;
          this.tham_hiem = res.data.tham_hiem;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
