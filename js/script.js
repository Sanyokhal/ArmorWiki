$(document).ready(function(){
    $('.slick').slick({
         autoplay: true,
         autoplaySpeed: 2500,
         prevArrow: null,
         nextArrow: null,
     });
});
$("#naval").click(function(){
     window.location.replace("technique.html#naval");
});
$("#air").click(function(){
     window.location.replace("technique.html#air");
});
$("#ground").click(function(){
     window.location.replace("technique.html#ground");
});
$("#sof").click(function(){
     window.location.replace("technique.html#sof");
});