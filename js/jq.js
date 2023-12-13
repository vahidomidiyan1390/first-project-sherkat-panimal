// footer =======================================

$(window).scroll(function(){
    if($(this).scrollTop() >= 50){
      $('#top').fadeIn();
    }else{
      $('#top').fadeOut();
    }
  });
  
  $('#top').click(function(e){
     e.preventDefault();
  $('body,html').animate({
      scrollTop:0
  });   
  });


  // nav mobile ========================================

$(document).ready(function(){
  $('.accordion > li > .nav-mobile-dropdown').click(function(){
   if($(this).next().is(':hidden')){
       $('.accordion ul').slideUp();
   }
   $(this).next().slideToggle();
  });
});


// nav mobile head  ==========================================


$(document).ready(function(){
  $('#menu').click(function(){
    $('.overlay').toggleClass('anim');
  });
    
});


$(document).ready(function(){
  $(".wrapper").hide();
  $(".menu").click(function(){
      $(".wrapper").show();
  });
  $(".close-menu").click(function(){
    $(".wrapper").hide();
});
});

// rang =========================

$(document).ready(function(){
  $(".filter-menu").hide();
  $(".filter-open").click(function(){
      $(".filter-menu").show();
  });
  $(".close-filter").click(function(){
    $(".filter-menu").hide();
});
});

// filter mobile =====================

$(document).ready(function(){
  $(".price-filter-mobil").hide();
  $(".filter-menu-6").click(function(){
      $(".price-filter-mobil").show();
  });
  $(".price-arrow").click(function(){
    $(".price-filter-mobil").hide();
});
});

$(document).ready(function(){
  $(".brand-filter-mobil").hide();
  $(".filter-menu-5").click(function(){
      $(".brand-filter-mobil").show();
  });
  $(".brand-arrow").click(function(){
    $(".brand-filter-mobil").hide();
});
});

$(document).ready(function(){
  $(".kala-filter-mobil").hide();
  $(".filter-menu-4").click(function(){
      $(".kala-filter-mobil").show();
  });
  $(".kala-arrow").click(function(){
    $(".kala-filter-mobil").hide();
});
});


$(document).ready(function(){
  $(".kala-filter-mobil-2").hide();
  $(".kala-1").click(function(){
      $(".kala-filter-mobil-2").show();
  });
  $(".kala-arrow-2").click(function(){
    $(".kala-filter-mobil-2").hide();
});
});