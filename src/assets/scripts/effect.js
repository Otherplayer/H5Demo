$(function () {

	/*banner*/
	; (function () {
		var mySwiper = new Swiper('#swiper-banner', {
			autoplay: 3000,
			loop: true,
			autoplayDisableOnInteraction: false,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			onInit: function (swiper) {
				$(swiper.slides[swiper.activeIndex]).find('.slide-text-box').addClass('animated fadeInUp');
			},
			onSlideChangeStart: function (swiper) {
				for (var i = 0; i < swiper.slides.length; i++) {
					$(swiper.slides[i]).find('.slide-text-box').removeClass('animated fadeInUp');
					$(swiper.slides[i]).find('.slide-text-box').css({ opacity: 0 })
				}
			},
			onSlideChangeEnd: function (swiper) {
				$(swiper.slides[swiper.activeIndex]).find('.slide-text-box').addClass('animated fadeInUp');
			}
		})
	})();

	/*nav*/
	var windowScroll = function () {
		var lastScrollTop = 0;
		$(window).scroll(function (event) {
			var header = $('#nav-container'),
				scrlTop = $(this).scrollTop();
			if (scrlTop > 200 && scrlTop <= 2000) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if (scrlTop <= 500) {
				if (header.hasClass('navbar-fixed-top')) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function () {
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100);
				}
			}
		});
	};
	windowScroll();

	/*nav menu*/
	var clickMenu = function () {
		$('#nav-container a').click(function (event) {
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');
			
			if(!section){
			   return true;
			}	
			
			$(this).parent().siblings().removeClass('active');
			$(this).parent().addClass('active');
			if ($('[data-section="' + section + '"]').length) {
				$('html, body').animate({
					scrollTop: $('[data-section="' + section + '"]').offset().top
				}, 500);
			}

			event.preventDefault();
			return false;
		});
	};
	clickMenu();

	/*nav menu*/
	var navActive = function (section) {
		var $el = $('#nav-list-btn-list > .nav-list-btn');
		$el.removeClass('active');
		$el.each(function () {
			$(this).find('a[data-nav-section="' + section + '"]').closest('.nav-list-btn').addClass('active');
		});
	};
	var navigationSection = function () {
		var $section = $('div[data-section]');
		$section.waypoint(function (direction) {
			if (direction === 'down') {
				navActive($(this.element).data('section'));
			}
		}, {
				offset: '150px'
			});

		$section.waypoint(function (direction) {
			if (direction === 'up') {
				navActive($(this.element).data('section'));
			}
		}, {
				offset: function () { return -$(this.element).height() + 155; }
			});
	};
	navigationSection();

	/*scroll*/
	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('animated')) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
								el.css({ visibility: 'visible' })
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};
	contentWayPoint();

	/*product*/
	var exploreAnimate = function () {

		var explore = $('#fh5co-explore');
		if (explore.length > 0) {
			explore.waypoint(function (direction) {
				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(function () {
						explore.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInUp animated');
								el.css({ visibility: 'visible' })
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);

					setTimeout(function () {
						explore.find('.to-animate-2').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInLeft animated');
								el.css({ visibility: 'visible' })
							}, k * 200, 'easeInOutExpo');

						});
					}, 700);

					setTimeout(function () {
						explore.find('.to-animate-3').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInRight animated');
								el.css({ visibility: 'visible' })
							}, k * 200, 'easeInOutExpo');

						});
					}, 1000);

					$(this.element).addClass('animated');
				}
			}, { offset: '85%' });

		}
	};
	exploreAnimate();

	/*about*/
	var aboutAnimate = function () {
		var about = $('#fh5co-about');
		if (about.length > 0) {
			about.waypoint(function (direction) {
				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(function () {
						about.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInUp animated');
								el.css({ visibility: 'visible' })
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);

					$(this.element).addClass('animated');
				}
			}, { offset: '85%' });

		}
	};
	aboutAnimate();

	/*stats*/
	var countersAnimate = function () {
		var counters = $('#fh5co-counters');
		if (counters.length > 0) {
			counters.waypoint(function (direction) {
				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					var sec = counters.find('.to-animate').length,
						sec = parseInt((sec * 200) + 400);

					setTimeout(function () {
						counters.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeInUp animated');
								el.css({ visibility: 'visible' })
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);

					setTimeout(function () {
						counters.find('.js-counter').countTo({
							formatter: function (value, options) {
								return value.toFixed(options.decimals);
							},
						});
					}, 400);

					setTimeout(function () {
						counters.find('.to-animate-2').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('bounceIn animated');
								el.css({ visibility: 'visible' })
							}, k * 200, 'easeInOutExpo');

						});
					}, sec);

					$(this.element).addClass('animated');
				}
			}, { offset: '85%' });

		}
	};
	countersAnimate();

	/*contact*/
	var footerAnimate = function () {
		var footer = $('#fh5co-footer');
		if (footer.length > 0) {
			footer.waypoint(function (direction) {
				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(function () {
						footer.find('.to-animate').each(function (k) {
							var el = $(this);

							setTimeout(function () {
								el.addClass('fadeIn animated');
							}, k * 200, 'easeInOutExpo');

						});
					}, 200);

					$(this.element).addClass('animated');
				}
			}, { offset: '85%' });
		}
	};
	footerAnimate();
	/*menuBtn click*/
	var smartNavMenuToggle = function() {
		var $smartNav = $('.smartNav');
		var $smartNavMenu = $('#smartNavMenu');
		var $smartNavBtn = $('#smartNavBtn');
		$smartNavBtn.click(function() {
			$('body').toggleClass('translateXLeft200');
			$smartNavMenu.css('display','block');
		});
	}
	smartNavMenuToggle();
	/*scroll*/
	var changeTopByScroll = function() {
		var $smartNavMenu = $('#smartNavMenu');
		$(window).scroll(function() {
			$smartNavMenu.css('top',document.body.scrollTop + 'px');
		});
	}
	changeTopByScroll();
    /*smartNav click toggle*/
    var clickSmartNavCloseItself = function() {
    	$('#smartNavMenu > li > a').click(function() {
            $('body').toggleClass('translateXLeft200');
        });
    }
    clickSmartNavCloseItself();
	/*isSmartDevice*/
//	function isSmartDevice() {
//		var ua = $(window)[0].navigator.userAgent || $(window)[0].navigator.vendor || $(window)[0].navigator.opera;
//		// Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
//		return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
//	}
//	function changeByDevice() {
//		if(isSmartDevice()) {
//			console.log('smart');
//			$('#nav-list-btn-list-smart').addClass('show').removeClass('hide');
//			$('#nav-list-btn-list').addClass('hide').removeClass('show');
//		} else {
//			$('#nav-list-btn-list').addClass('show').removeClass('hide');
//			$('#nav-list-btn-list-smart').addClass('hide').removeClass('show');
//		}
//	}
//	changeByDevice();
//	window.onresize = function() {
//		changeByDevice();
//	}
})
