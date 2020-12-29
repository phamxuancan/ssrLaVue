<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
	    <meta name="description" content="Truyện hay mỗi ngày">
        <meta name="keywords" content="Truyện hay mỗi ngày, Đọc truyện online, đọc truyện chữ, truyện hay ,truyen hentai , truyện 18+, truyện người lớn, truyện tiên hiệp, kiếm hiệp, truyện ngôn tình, truyện sắc hiệp, truyện đô thị, truyện huyền nhiễm">
        <meta name="author" content="Truyenhaymoingay.com">
        <title>Truyện hay mỗi ngày</title>
        <link href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/global/plugins/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/global/plugins/simple-line-icons/simple-line-icons.min.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/global/plugins/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/global/css/components.min.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/layouts/layout4/css/layout.min.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/layouts/layout4/css/themes/light.min.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/layouts/layout4/css/custom.min.css') }}" rel="stylesheet" type="text/css">
		<link href="{{ asset('css/nouislider.css') }}" rel="stylesheet">
    </head>
    <body class="page-container-bg-solid page-sidebar-closed-hide-logo">
         {!! $ssr !!}
        <script src="{{ asset('js/entry-client.js') }}" type="text/javascript"></script>
		<script src=""></script>
    </body>
</html>