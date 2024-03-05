(function () {
    'use strict';
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        }
        , BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        }
        , iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        , Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        }
        , Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        }
        , any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // Preloader
    $(window).load(function() {
    $('.preloader').fadeOut("slow");
    });

    // Animations
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
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    
    
    // Burger Menu 
    var burgerMenu = function () {
        $('.js-trigphil-nav-toggle').on('click', function (event) {
            event.preventDefault();
            var $this = $(this);
            if ($('body').hasClass('offcanvason')) {
                $this.removeClass('active');
                $('body').removeClass('offcanvason');
            }
            else {
                $this.addClass('active');
                $('body').addClass('offcanvason');
            }
        });
    };
    // Click outside of offcanvason
    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#trigphil-aside, .js-trigphil-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvason')) {
                    $('body').removeClass('offcanvason');
                    $('.js-trigphil-nav-toggle').removeClass('active');
                }
            }
        });
        $(window).scroll(function () {
            if ($('body').hasClass('offcanvason')) {
                $('body').removeClass('offcanvason');
                $('.js-trigphil-nav-toggle').removeClass('active');
            }
        });
    };
    
    
    // Document on load.
    $(function () {
        contentWayPoint();
        burgerMenu();
        mobileMenuOutsideClick();
    });
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    // Friends owlCarousel
    $('.friends .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 2
            }
        }
    });
    // Time & Location owlCarousel
    $('.timelocation .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 3
            }
        }
    });

    // Gift Registry owlCarousel
    $('.gift .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: true
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 2
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 4
            }
        }
    });
    // Smooth Scrolling
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Sets focus again
          };
        });
      }
    }
  });
    // Gallery 
    $(window).on("load", function () {
    var e = $(".gallery-filter")
        , a = $("#gallery-filter");
    e.isotope({
        filter: "*"
        , layoutMode: "masonry"
        , animationOptions: {
            duration: 750
            , easing: "linear"
        }
    }), a.find("a").on("click", function () {
        var o = $(this).attr("data-filter");
        return a.find("a").removeClass("active"), $(this).addClass("active"), e.isotope({
            filter: o
            , animationOptions: {
                animationDuration: 750
                , easing: "linear"
                , queue: !1
            }
        }), !1
    })
});
    // Magnific Popup
    $(".img-zoom").magnificPopup({
    type: "image"
    , closeOnContentClick: !0
    , mainClass: "mfp-fade"
    , gallery: {
        enabled: !0
        , navigateByImgClick: !0
        , preload: [0, 1]
    }
});
    

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let weddingDate = new Date("Mar 05, 2024 14:39:40").getTime();

    let x = setInterval(function() {    
        let now = new Date().getTime();
        let distance = weddingDate - now;

        if (distance > 0) {
            document.getElementById("days").innerText = Math.floor(distance / day);
            document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
            document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);
        } else {
            clearInterval(x);
            document.getElementById("countdown").style.display = "none";
            document.getElementById("story").style.display = "none";
            document.getElementById("inviteguestbook").style.display = "none";
            document.getElementById("nav_story").style.display = "none";
            document.getElementById("nav_countdown").style.display = "none";
            
            document.getElementById("event").style.display = "block";
            document.getElementById("welcome").style.display = "block";
            document.getElementById("eventguestbook").style.display = "block";
            document.getElementById("nav_welcome").style.display = "block";
            document.getElementById("nav_event").style.display = "block";

        }
    }, 1000);
})();


}());

//Add to calendar function
function addToCalendar() {
    // Event details
    var eventTitle = "Eric Weds Phidelia";
    var eventLocation = "Church of Jesus Christ of Latter-Day Saints, Teshie 1st Junction";
    var eventDescription = "Wedding ceremony of Eric and Phidelia";
    var startDate = new Date("2024-03-09T14:00:00");
    var endDate = new Date("2024-03-09T18:00:00");

    // Formats the dates as required by the calendar
    var startDateStr = startDate.toISOString().replace(/-|:|\.\d+/g, "").slice(0, -1);
    var endDateStr = endDate.toISOString().replace(/-|:|\.\d+/g, "").slice(0, -1);

    // Generates the calendar URL
    var calContent =
        "BEGIN:VCALENDAR\n" +
        "VERSION:2.0\n" +
        "BEGIN:VEVENT\n" +
        "SUMMARY:" + eventTitle + "\n" +
        "LOCATION:" + eventLocation + "\n" +
        "DESCRIPTION:" + eventDescription + "\n" +
        "DTSTART:" + startDateStr + "\n" +
        "DTEND:" + endDateStr + "\n" +
        "END:VEVENT\n" +
        "END:VCALENDAR";

    // Base64 encode the calendar content
    var calData = btoa(calContent);

    var calURL = "data:text/calendar;base64," + calData;

    //Notifies user
    alert("To add the wedding to your calendar, please download the .ics file and open it using your calendar application.");

    // Creates an anchor element
    var link = document.createElement('a');
    link.href = calURL;
    link.target = '_blank'; // Open in a new tab
    link.download = 'Phidelia_and_Eric_Wedding.ics';
    link.click();
}




