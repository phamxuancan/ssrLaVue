<template>
  <div id="app">
		<div>
		  <div class="page-header navbar">
            <!-- BEGIN HEADER INNER -->
            <div class="page-header-inner ">
                <!-- BEGIN LOGO -->
                <div class="page-logo">
                    <a title="Đọc truyện Mỗi ngày" href="https://truyenhaymoingay.com">
                        <img title="Truyện hay mỗi ngày" alt="Truyện hay mỗi ngày" src="images/logo.png" height="70px" style="margin: 1px 10px 0 10px;" /> </a>
                    
                </div>
                <!-- END LOGO -->
                <!-- BEGIN RESPONSIVE MENU TOGGLER -->
                <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
                <!-- END RESPONSIVE MENU TOGGLER -->
                
                <!-- BEGIN PAGE TOP -->
                <div class="page-top">
                    <!-- BEGIN HEADER SEARCH BOX -->
                    <form class="search-form" action="/" method="GET">
                        <div class="input-group">
                            <input type="text" class="form-control input-sm"  placeholder="Nhập tên truyện hoặc tác giả muốn tìm kiếm..." name="s">
                            <span class="input-group-btn">
                                <a href="javascript:;" class="btn submit">
                                    <i class="icon-magnifier"></i>
                                </a>
                            </span>
                        </div>
                    </form>
                    <!-- END HEADER SEARCH BOX -->
                </div>
                <!-- END PAGE TOP -->
            </div>
            <!-- END HEADER INNER -->
        </div>
        <div class="clearfix"> </div>
		<div class="page-container">
			<div class="page-sidebar-wrapper" >
				<div class="page-sidebar navbar-collapse collapse" >
					<ul class="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="false" data-slide-speed="200">
						<li class="nav-item start ">
                            <a title="Đọc truyện online" href="trang-chu/" class="nav-link nav-toggle">
                                <i class="icon-home"></i>
                                <span class="title">Trang chủ</span>
                            </a>
                            
                        </li>
						<li class="heading">
                            <h3 class="uppercase">Thống Kê</h3>
                        </li>
						<li class="nav-item  ">
                            <a title="Đọc truyện online mới nhất" href="moi-nhat/" class="nav-link nav-toggle">
                                <i class="icon-star"></i>
                                <span class="title">Mới nhất</span>
                            </a>
                        </li>
						<li class="nav-item  ">
                            <a title="Đọc truyện online được xem nhiều nhất" href="xem-nhieu/" class="nav-link nav-toggle">
                                <i class="icon-badge"></i>
                                <span class="title">Xem nhiều</span>
                            </a>
                        </li>
						<li class="heading">
                            <h3 class="uppercase">Thể loại</h3>
                        </li>
						<li class="nav-item  ">
                            <a href="" title="" class="nav-link nav-toggle">
                                <i class="icon-tag"></i>
                                <span class="title">Ten the loai</span>
                            </a>
                        </li>
					</ul>
				</div>
			</div>
			<router-view></router-view>
		</div>
		</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: 'Hello World'
      }
    }
  }
</script>