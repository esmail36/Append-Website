$(document).ready(function () {
    $(".navbar-default .navbar-nav .dropdown").hover(function () {
        $(this).toggleClass("open")
    })

    var pricing = function() {
		$('.js-period-toggle').on('click', function(e) {
			var $this = $(this),
				pricingItem = $('.plane-box');
			if ( $('.period-toggle').hasClass('active') ) {
				$this.removeClass('active');
				pricingItem.removeClass('yearly');
			} else {
				$this.addClass('active');
				pricingItem.addClass('yearly');
			}
			e.preventDefault();
		})
	}
	pricing();

    $('.about-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 50,
        nav: true,
        dots: true,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ],
        autoplay: false,
        autoplayHoverPause: false,
        responsive: {
          0: {
            items: 1,
            margin: 200
          },
          600: {
            items: 1,
            margin: 200
          },
          1000: {
            items: 1
          }
        }
      })

      $(window).scroll(function () {
        if ($(window).scrollTop() >= 1000) {
          $("#scroll").addClass("show");
        }
        else{
          $("#scroll").removeClass("show");
        }
      })
    
})
