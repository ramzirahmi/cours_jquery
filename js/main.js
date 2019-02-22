$(function () {
	'use strict';

	//calculate body padding Top depend on navbar height

	$('body').css('paddingTop', $('.navbar').innerHeight());

	//scroll to Element

$('.navbar li a').click(function (e){
	e.preventDefault();

    $("html, body").animate({
	 scrollTop: $('#' + $(this).data('scroll')).offset().top + 1 }, 1000);

});
   //add active class on navbar link And remove from siblings

 $('.navbar li ').click(function () {
 	//$('.navbar a').removeClass('active');
 	//$(this).addClass('active');

 	$(this).addClass('active').siblings().removeClass('active');
 	//$(this).addClass('active').parent().siblings().find('a').removeClass('active');

 });
      $(window).scroll(function (){
       $('.block').each(function(){
	        if ($(window).scrollTop() > $(this).offset().top ) {

		    var blockID = $(this).attr('id');
		    $('.navbar li a[data-scroll ="' + blockID + '"]').addClass('active');
	     }

           });
         //scroll to top button
         var scrollToTop=$('.scroll-to-top');

         if ($(window).scrollTop() >= 2000) {

         if(scrollToTop.is(':hidden')){
         	scrollToTop.fadeIn(400);
          
           }
         }
          else 
          {
            scrollToTop.fadeOut(400);
          }

            });

     $('.scroll-to-top').click(function (event){
     	event.preventDefault();

    $("html, body").animate({
	 scrollTop:0
	}, 1000);
     });
});
