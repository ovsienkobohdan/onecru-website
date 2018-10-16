// $(document).ready(function(){
  $('.slider').slick({
  slidesToShow: 12,
  slidesToScroll: 12,
  dots: true,
  infinite: false,
  responsive:[
  	{
  	breakpoint: 1280,
  	settings: {
  		slidesToShow: 5,
  		slidesToScroll: 5
  	}
  	},
  	{
  	breakpoint: 720,
  	settings: {
  		slidesToShow: 4,
  		slidesToScroll: 4
  	}
  	}
  ]
  });
// });

var z = $(".current").attr('src');

 $(document).ready(function(){
   var h = "img/background.png";
   $(".current").attr('src', h);
 })


$(".slider-slide__img").click(function(event) {
	event.preventDefault();
	var p = $(this).attr('imgprev');
	var  name = $(this).attr('name');
	var  ganre = $(this).attr('ganre');
	var link = $(this).attr('lin');
	$( ".project-description__title" ).text( name );
	$( ".project-description__ganre" ).text( ganre );
	$('.project-preview__img').attr('src',p);
	$('.project-description__link').attr('href',link);
})

$('.slider-slide__img').bind('click', function() {
	$(".current").attr('src', z);
    z = $(this).attr('src');
    $('.current').removeClass('current');
    $(this).toggleClass('current');
    h = "img/background.png";
    $(".current").attr('src', h);
});
