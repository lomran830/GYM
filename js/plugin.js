$(function(){
  $(".first .menu svg").on("click",function(){
    $(".first .list").slideToggle();
  })

  $(".classes ul li").on("click",function(){
    $(this).addClass("active").siblings("li").removeClass("active");
  })

  $(".classes ul li.second").on("click",function(){
    $(".classes .item.active").removeClass("active").next().addClass("active")
  })
  $(".classes ul li.first").on("click",function(){
    $(".classes .item.active").removeClass("active").prev().addClass("active")
  })

  $(".classes .small ul li.second").on("click",function(){
    $(".classes .small .row.sec").addClass("active").siblings(".classes .small .row").removeClass("active");
  })
  $(".classes .small ul li.third").on("click",function(){
    $(".classes .small .row.thi").addClass("active").siblings(".classes .small .row").removeClass("active");
  })
  $(".classes .small ul li.first").on("click",function(){
    $(".classes .small .row.fi").addClass("active").siblings(".classes .small .row").removeClass("active");
  })
  $(".expert .trainer .title1").hover(

    function(){
          $(".expert .trainer .title1 p,.expert .trainer .title1 ul").slideDown();
    },function(){
              $(".expert .trainer .title1 p,.expert .trainer .title1 ul").slideUp();
    }
  );
  $(".expert .trainer .title2").hover(

    function(){
          $(".expert .trainer .title2 p,.expert .trainer .title2 ul").slideDown();
    },function(){
              $(".expert .trainer .title2 p,.expert .trainer .title2 ul").slideUp();
    }
  );
  $(".expert .trainer .title3").hover(

    function(){
          $(".expert .trainer .title3 p,.expert .trainer .title3 ul").slideDown();
    },function(){
              $(".expert .trainer .title3 p,.expert .trainer .title3 ul").slideUp();
    }
  );
$(".TIMETABLE ul li").on("click",function(){
  $(this).addClass("active").siblings("li").removeClass("active");
})
/*Classes*/
$(".TIMETABLE ul li.all").on("click",function(){
  $(".TIMETABLE table tbody tr td div").fadeIn().parent().removeClass("activat").addClass("hover");
})
$(".TIMETABLE ul li.GYM").on("click",function(){
  $(".TIMETABLE table tbody tr td div").fadeOut().parent().removeClass("hover");
  $(".TIMETABLE table tbody tr td div.gym").fadeIn().parent().addClass("activat");
})
$(".TIMETABLE ul li.CROSSFIT").on("click",function(){
  $(".TIMETABLE table tbody tr td div").fadeOut().parent().removeClass("hover").removeClass("activat");
  $(".TIMETABLE table tbody tr td div.crossfit").fadeIn().parent().addClass("activat");
})
$(".TIMETABLE ul li.CARDIO").on("click",function(){
  $(".TIMETABLE table tbody tr td div").fadeOut().parent().removeClass("hover").removeClass("activat");
  $(".TIMETABLE table tbody tr td div.cardio").fadeIn().parent().addClass("activat");
})
$(".TIMETABLE ul li.BODY").on("click",function(){
  $(".TIMETABLE table tbody tr td div").fadeOut().parent().removeClass("hover").removeClass("activat");
  $(".TIMETABLE table tbody tr td div.body").fadeIn().parent().addClass("activat");
})
$(".TIMETABLE ul li.YOGA").on("click",function(){
  $(".TIMETABLE table tbody tr td div").fadeOut().parent().removeClass("hover").removeClass("activat");
  $(".TIMETABLE table tbody tr td div.yogo").fadeIn().parent().addClass("activat");


})
/*gallery */

$(".gallery_new ul li").on("click",function(){
  $(this).addClass("active").siblings("li").removeClass("active");
});
$(".gallery_new ul li.all").on("click",function(){
    $(".gallery_new .row .img").fadeIn();
})
$(".gallery_new ul li.FITNESS").on("click",function(){
    $(".gallery_new .row .img.other,.gallery_new .row .img.event,.gallery_new .row .img.coa").fadeOut();
  $(".gallery_new .row .img.fitness").fadeIn();
})
$(".gallery_new ul li.COACHING").on("click",function(){
    $(".gallery_new .row .img.other,.gallery_new .row .img.event,.gallery_new .row .img.fit").fadeOut();
  $(".gallery_new .row .img.coaching").fadeIn();
})
$(".gallery_new ul li.EVENT").on("click",function(){
    $(".gallery_new .row .img.other,.gallery_new .row .img.coaching,.gallery_new .row .img.fitness").fadeOut();
  $(".gallery_new .row .img.event").fadeIn();
})
$(".gallery_new ul li.OTHER").on("click",function(){
  $(".gallery_new .row .img.event,.gallery_new .row .img.coaching,.gallery_new .row .img.fitness").fadeOut();
  $(".gallery_new .row .img.other").fadeIn();
})
})
