// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
	$('.tlt').textillate({
		in: {
			effect: 'flipInY',
			delay: 10,
		},
	});
	$("#navigation").addClass("pageLoaded");

  $(".anchor")
  .mouseenter(function() {
    console.log('mousent')
    var $message = $(this).parent().find('.message');
    this.animation_set = this.animation_set || false;
    if(!this.animation_set) {
      animateText($message)
      this.animation_set = true;
    }

    clearTimeout(this.mouseLeaveTimeout);
    if(!this.mouseLeaveTimeout) {
      $message
        .textillate('in');
    }
  })
  .mouseleave(function() {
    var that = this;
    this.mouseLeaveTimeout = setTimeout(function () {
      $(that).parent().find('.message')
        .textillate('out');
        that.mouseLeaveTimeout = false;
    }, 200);
  });
});

function animateText($el){
	$el.textillate({
    in: {
      effect: 'fadeInLeft',
      delay: 20,
    },
    out: {
      effect: "fadeOutLeft",
      delay: 20,
    },
  });
}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
    var windowY = $(window).height();
    var scrolledY = $(window).scrollTop();
    var image_url = '/img/forest.jpg';

    if (scrolledY > windowY && $("body").css("background-image") != "url('/img/contact.jpg'") {
    image_url = '/img/contact.jpg';
    backgroundChange(image_url);
    }
    else if (scrolledY < windowY && $("body").css("background-image") != "url('/img/forest.jpg'") {
    image_url = '/img/forest.jpg';
    backgroundChange(image_url);
    }
});


function backgroundChange(img_url){
  $("body").css("background-image", "url(" + img_url + ")");
}