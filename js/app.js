// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['about', 'portfolio', 'contact'],
	});
	$('.tlt').textillate({
		in: {
			effect: 'flipInY',
			delay: 10,
		},
	});
	$("#navigation").addClass("pageLoaded");
	about = false;
	portfolio = false;
	contact = false;
});

$(function() {
  $(".aboutIcon")
  .mouseenter(function() {
  	if(!about) {
	  	animateText('about')
			about = true;
  	}
    $('#aboutMessage').textillate('in');
  })
  .mouseleave(function() {
  	$('#aboutMessage').textillate('out');
  });
});

$(function() {
  $(".portfolioIcon")
  .mouseenter(function() {
  	if(!portfolio) {
	  	animateText('portfolio')
			portfolio = true;
  	}
    $('#portfolioMessage').textillate('in');
  })
  .mouseleave(function() {
  	$('#portfolioMessage').textillate('out');
  });
});

$(function() {
  $(".contactIcon")
  .mouseenter(function() {
  	if(!contact) {
	  	animateText('contact')
			contact= true;
  	}
    $('#contactMessage').textillate('in');
  })
  .mouseleave(function() {
  	$('#contactMessage').textillate('out');
  });
});

function animateText(id, isSet){
	if (!isSet) {
		$('#' + id + 'Message').textillate({
			in: {
				effect: 'fadeInLeft',
				delay: 20,
			},
			out: {
				effect: "bounceOutRight",
				delay: 20,
			},
		});
	}
}