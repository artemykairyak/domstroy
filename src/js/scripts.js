/* плавный якорь */
$(function(){
	// $('a[href^="#"]').click(function(){
	// 	var el = $(this).attr('href');
	// 	$('html').animate({
	// 		scrollTop: $(el).offset().top}, 1000);
	// 	// return false; 
	// });

	String.prototype.trunc = function(n){
	   return this.substr(0,n-1)+(this.length>n?'...':'');
	};

	$('.object__photo a').on('click', function(e) {
		showOverlay();
		
		$self = $(this);

		setTimeout(function() {
			$('.modal__object-photo img').attr('src', $self.attr('href'));
			showModal($('.modal__object-photo'));
			$('.modal__object-photo img').hide().fadeIn();

			setTimeout(function() {
				if (($('.modal__object-photo img').width()) >= $(window).width()) {
				
				console.log(1);
				$('.modal__object-photo').width($(window).width());
				$('.modal__object-photo img').css({'width': '100%'});
			

					if((($('.modal__object-photo img').height()) >= $(window).height())) {
						$('.modal__object-photo img').css({'height': $(window).height()});
					}
				}
			},100)
		},100);
		e.preventDefault();
	});

	$('.modal__object-photo').on('click', function() {
		hideOverlay();
		setTimeout(function() {
			$('.modal__object-photo img').attr('src', '');
			$('.modal__object-photo img').css({'width': 'auto'});
			$('.modal__object-photo').css({'width': 'auto'});
			$('.modal__object-photo img').css({'height': 'auto'});
		},100);
		
	})

	if($('.articles-list').length > 0) {
		truncText('.article .article__annotation', 200);
		truncText('.article .article__title', 50);

		if($(window).width() < 1400) {
			truncText('.article .article__annotation', 100);
			truncText('.article .article__title', 60);
		}
	}

	if($('.feedback__slide').length > 0) {
		truncText('.slide__text', 225);

		if($(window).width() < 1200) {
			truncText('.slide__text', 120);
		}
	}

	$(window).on('resize', function() {
		if($(window).width() < 1200) {
			truncText('.slide__text', 120);
		}
		
		if($(window).width() < 840) {
			truncText('.article .article__annotation', 100);
		}
	});


	$(window).on('scroll', function(e) {
		if($('#about').length > 0) {
			if ($('aside a:last').offset().top > $('#header').height() &&
				$('aside a:last').offset().top < $('#about').offset().top) {
				$('aside nav').removeClass('white-color');
		} else if ($('aside a:last').offset().top > $('#feedback').offset().top) {
			$('aside nav').removeClass('white-color');
		} else{
			$('aside nav').addClass('white-color');
		}
	}

	if($('.object__gallery').length > 0) {
		if ($('aside a:last').offset().top > $('.object__gallery').offset().top) {
			$('aside nav').removeClass('white-color'); 
		}
		else {
			$('aside nav').addClass('white-color');
		}
	}

	if($('.articles-list').length > 0) {
		if ($('aside a:last').offset().top > $('.articles-list').offset().top) {
			$('aside nav').removeClass('white-color'); 
		}
		else {
			$('aside nav').addClass('white-color');
		}
		
	}

	if ($('.article-text').length > 0) {
		if ($('aside a:last').offset().top > $('.article-text').offset().top) {
			$('aside nav').removeClass('white-color'); 
		}
		else {
			$('aside nav').addClass('white-color');
		}
	}

	if ($('.objects-list__object').length > 0) {
		if ($('aside a:last').offset().top > $('.objects-section').offset().top) {
			$('aside nav').removeClass('white-color'); 
		}
		else {
			$('aside nav').addClass('white-color');
		}
	}

	if ($('.prices__tabs').length > 0) {
		if ($('aside a:last').offset().top > $('.prices-section').offset().top) {
			$('aside nav').removeClass('white-color'); 
		}
		else {
			$('aside nav').addClass('white-color');
		}
	}

	if ($('.contacts #contacts-section').length > 0) {
		if ($('aside a:last').offset().top > $('#contacts-section').offset().top) {
			$('aside nav').removeClass('white-color'); 
		}
		else {
			$('aside nav').addClass('white-color');
		}
	}

	if ($('.annotation').length > 0) {
		if ($('aside a:last').offset().top > $('.annotation').offset().top) {
			$('aside nav').removeClass('white-color'); 
		}
		else {
			$('aside nav').addClass('white-color');
		}
	}
});

	if($('.feedback__slider').length > 0) {
		$('.feedback__slider').owlCarousel({
			navText: [$('.feedback__left-arrow'), $('.feedback__right-arrow')],
			nav: true,
			center: true,
			loop:true,

			responsive: {
				0: {
					items: 1,
					margin: 20
				},
				454: {
					margin: 20,
					items: 1
				},
				840 : {
					items: 2,
					margin: 20
				},
				1400: {
					items: 2,
					margin:32
				}
			},
			onDrag: function() {
				$('#feedback .owl-item:not(.center)').addClass('dr');
			},
			onDragged: function() {
				$('#feedback .owl-item:not(.center)').removeClass('dr');
			}
		});
	}
	
	$('.order-btn').on('click', function(e){
       e.preventDefault();
       $('html, body').stop().animate({
          scrollTop: $('.calculate-cost').offset().top
       }, 700);
    });

	if($('.photos__slider').length > 0) {
		$('.photos__slider').owlCarousel({
			navText: [$('.photos__left-arrow'), $('.photos__right-arrow')],
			nav: true,
			center: true,
			loop:true,

			responsive: {
				0: {
					items: 1,
					margin: 20
				},
				454: {
					margin: 20,
					items: 1
				},
				840 : {
					items: 2,
					margin: 20
				},
				1400: {
					items: 2,
					margin:20
				}
			}
		});
	}	

	function truncText(selector, substr){
	   if($(selector).length > 0){
	      $(selector).each(function(i, item){
	         $(this).text($(this).text().trunc(substr))
	      });
	   }
	}

		$('.arrow').on('mouseenter', function() {
			$(this).addClass('arrow--hover');
		});

		$('.arrow').on('mouseleave', function() {
			$(this).removeClass('arrow--hover');
		});

		$('aside li').on('click', function() {
			if(!$(this).hasClass('services')) {
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			}
		});

		$(".tab-name").each(function (i) {
			$(this).attr('data-num', i+1);
		});

		$('.tab-content').each(function(i) {
			$(this).attr('data-num', i+1)
		});

		$('.tab-content:first').addClass('active');
		$('.tab-name:first').addClass('active');


	//Some fixes for tabs on resize
	$(window).on('resize', function() {
		if($('.tab-content').length > 0) {
			$num = 0
			$num = $('.tab-content.active').data('num');

			if ($(window).width() > 840) {
				$('.tab-content').css({'left': String(($('.tab-name').outerWidth())+ 'px')});
				setTimeout(function() {
					showTab($('.tab-content.active'), $('.tab-content.active').data('num'), false);
				}, 100);

				$('.tab-name').each(function() {
					$(this).css({'margin-top': '0'});
				});
			} else {
				$('.tab-content').css({'left': '0'});
				setTimeout(function() {
					showTab($('.tab-content.active'), $('.tab-content.active').data('num'), true);
				}, 100);
			}
		}
	});

	//Show and hide tab
	function showTab(tab, num, mobile) {
		//$pos - top coords of the active tab (tab-name)
		//tab - active tab (tab-content)
		$pos = tab.parent().find('.tab-name').eq(num-1).position().top;

		if (mobile) {
			//If mobile-mode is enabled
			tab.css({'max-height': '366px'});
			tab.parent().css({'padding-bottom': '0'});
			tab.parent().find('.tab-name').siblings().css({'margin-top': '0'});
			tab.siblings().css({'top': '0'});
			
			tab.parent().find('.tab-name').eq(num).css({'margin-top': tab.outerHeight()});
			$pos = tab.parent().find('.tab-name').eq(num-1).position().top;
			tab.css({'top': tab.parent().find('.tab-name').eq(num-1).outerHeight() + $pos});
			
			//Fix wrong calculation of the query top coordinates
			$wrongPos = +tab.css('top').slice(0, -2);
			$heightSum = 0;
			$heightSum += $('.tab-name.active').outerHeight();
			
			$('.tab-name.active').prevAll('.tab-name').each(function() {
				$heightSum += $(this).outerHeight();
			});

			//Fix wrong calculation of the query top coordinates
			if ($wrongPos > $heightSum) {
				tab.css({'top': +tab.css('top').slice(0, -2) - tab.outerHeight()});
			}

			//If active tab is last
			if(tab.next().length === 0) {
				
				tab.parent().css({'padding-bottom': tab.outerHeight()});
				if ($wrongPos > $heightSum) {
					$lastpos = +$('.prices__tabs').innerHeight() - tab.outerHeight() - ($wrongPos - $heightSum);
					tab.css({'top': $lastpos});
				} else {
					$lastpos = +$('.prices__tabs').innerHeight() - tab.outerHeight();
				}
			}
			
		} else {
			//If desktop mode is enabled
			//If active tab is last 
			if($pos + tab.outerHeight() > $('.prices__tabs').outerHeight()) {
				tab.css({'bottom': '0', 'max-height': $('.prices__tabs').outerHeight()});
			} else {
				//If active tab is not last
				tab.css({'top': $pos});
			}
		}		
	}

	//Fixes with a screen width of 840 pixels 
	if ($(window).width() < 840) {
		if($('.tab-content').length > 0) {
			$('.tab-content:first').css({'top': $('.tab-name:first').outerHeight()});
			$('.tab-name').eq(1).css({'margin-top': $('.tab-content:first').outerHeight()});
		}
	}

	//Fixes with a screen width of 454 pixels 
	if ($(window).width() < 454) {
		if($('.tab-content').length > 0) {
			$('.tab-content:last').parent().css({'padding-bottom': $('.tab-content:last').outerHeight()});
			$('.tab-content:last').css({'top': +$('.tab-content:last').css('top').slice(0, -2) - $('.tab-name:last').outerHeight()});
		}
	}

	//onClick tab handler
	$('.tab-name').on('click', function(e) {
		//$currentTab - current active tab (tab-name)
		$currentTab = $(this);

		//If clicked tab is active
		if($(this).hasClass('active') && 
			$('.tab-name.active').position().top + $('.tab-content.active').outerHeight() < $('.prices__tabs').outerHeight()) {
			$(this).next().css({'margin-top': '0'});
		$(this).removeClass('active');
		$('.tab-content.active').css({'top': '0'});
		$('.tab-content.active').removeClass('active');

		//If clicked tab is active and last
		if($(this).next().length === 0) {
			$('.prices__tabs').css({'padding-bottom': '0'});
		}
		
		//If clicked tab is active and last in mobile mode
	} else if($(this).hasClass('active') && 
		$('.tab-name.active').position().top + $('.tab-content.active').outerHeight() > $('.prices__tabs').outerHeight()) {
		$(this).next().css({'margin-top': '0'});
		$(this).removeClass('active');
		$('.tab-content.active').css({'bottom': '0'});
		$('.tab-content.active').removeClass('active');
	}

	//If clicked tab is not active
	else {
		if ($(window).width() < 840) {
			$('.tab-content').each(function(item) {
				if($currentTab.data('num') == $(this).data('num')) {
					$(this).addClass('active');
					$(this).siblings('.tab-content').removeClass('active');
					$currentTab.addClass('active');
					$currentTab.siblings().removeClass('active');
					showTab($(this), $currentTab.data('num'), true);
				}
			});
		} else {
			$('.tab-content').each(function(item) {
				if($currentTab.data('num') == $(this).data('num')) {
					$(this).addClass('active');
					$(this).siblings('.tab-content').removeClass('active');
					$currentTab.addClass('active');
					$currentTab.siblings().removeClass('active');
					showTab($(this), $currentTab.data('num'), false);
				}
			});
		}
	}
});

	function showOverlay() {
		$('.overlay').removeClass('overlay--disabled');
		$('.overlay').animate({'opacity': '0.4'}, 200);
		$('body').addClass('blur-enadled');
		$('body').removeClass('blur-disabled');
	}

	function hideOverlay() {
		if(!$('.modal__callback').hasClass('modal--disabled')) {
			$('.modal__callback').animate({'opacity': '0', 'top': '-50vh'}, 200, function() {
				$(this).addClass('modal--disabled');
			});
		}

		else if(!$('.modal__services').hasClass('modal--disabled')) {
			$('.modal__services').animate({'right': '-100vw', 'opacity': '0'}, 200, function() {
				$('.modal__services').addClass('modal--disabled');
			});
		} else {
			hideModal();
		}

		$('.overlay').animate({'opacity': '0'}, 200, function() {
			$(this).addClass('overlay--disabled');
		});	
		$('body').addClass('blur-disabled');
		$('body').removeClass('blur-enabled');

		if($('.modal__object-photo').length > 0) {
			setTimeout(function() {
				$('.modal__object-photo img').attr('src', '');
				$('.modal__object-photo img').css({'width': 'auto'});
				$('.modal__object-photo').css({'width': 'auto'});
			},100);
		}
	}

	function hideModal() {
		$('.modal').animate({'opacity': '0'}, 200, function() {
			$('.modal').addClass('modal--disabled');
		});
	}

	function showModal(modal) {
		modal.removeClass('modal--disabled');
		modal.css('opacity', '0');		
		modal.animate({'opacity': '1'}, 200);
	};

	$('aside .services, .all-services, .mobile-menu .services').on('click', function(e) {
		$modServ = $('.modal__services');
		showOverlay();
		$modServ.removeClass('modal--disabled');
		$modServ.css('opacity', '0');
		$modServ.animate({'right': '0', 'opacity': '1'});
		e.preventDefault();
	});

	$('.modal-services__back').on('click', function() {
		$modServ = $('.modal__services');
		hideOverlay();
		$modServ.animate({'right': '-100vw', 'opacity': '0'}, 200, function() {
			$modServ.addClass('modal--disabled');
		});
	});

	$('.overlay').on('click', hideOverlay);

	$('.callback__close').on('click', function() {
		$('.modal__callback').animate({'top': '-50vh', 'opacity': '0'}, 200, function() {
			$(this).addClass('modal--disabled');
		});
		hideOverlay();
	});

	$('.slide__show-all').on('click', function(e) {
		showOverlay();
		showModal($('.modal__original'));
		e.preventDefault();
	});

	$('.original__close').on('click', function() {
		hideOverlay();
		hideModal();
	});

	$('.callback-btn, .mobile-header .phone').on('click', function(e) {
		$modCallb = $('.modal__callback');
		showOverlay();
		$modCallb.css({'opacity': '0'}).removeClass('modal--disabled').animate({'opacity': '1'}, 200);
		$modCallb.animate({'top': '50%'}, 200);
		e.preventDefault();
	});

	$('.agreement').on('click', function(e) {
		showOverlay();
		showModal($('.modal__agreement'));
		e.preventDefault();
	});

	$('.agreement__close').on('click', function() {
		$agrCallb = $('.modal__agreement');
		hideOverlay();
		hideModal();
	});

	$('.mobile-menu').on('click', function(e) {
		if ($(this).hasClass('active')) {
			$('.mobile-menu__menu').fadeOut(200, function() {
				$(this).parent().removeClass('active');
			})
		} else {
			$(this).addClass('active');	
			$('.mobile-menu__menu').fadeIn(200);
		}
		
	});	

	$('.burger').on('click', function(e) {
		e.preventDefault();
	});

	if ($('.contacts__map').length > 0) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [55.76063180708024,37.74575785974119],
				zoom: 16,
				controls: []

			}, {
				searchControlProvider: 'yandex#search'
			}),        

			myPlacemark = new ymaps.Placemark([55.760851099950635, 37.75161043981168], {}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/img/icons/location.png',
            // Размеры метки.
            iconImageSize: [68, 68],
            iconImageOffset: [-12, 0]
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
        })

			myMap.geoObjects.add(myPlacemark);
			myMap.behaviors.disable('scrollZoom');
		});
	}
});
