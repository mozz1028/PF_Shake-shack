$(document).ready(function(){
    var sliderOpt = {
  
          dots: true,
          prevArrow : ".prev",
          nextArrow : ".next",
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          centermode : true,
          autoplay : true,
          autoplaySpeed : 1000,
          responsive: [
              
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
            breakpoint: 850,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              width : "unslick"
            }
          },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                width : "unslick",
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                width : "unslick"
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
          
          
          // slidesToShow: 4,
          // slidesToScroll: 1,
          // autoplay: false,
          // autoplaySpeed: 30000,
          // dots : true,
          // variableWidth: true,
          // prevArrow : false,
          // nextArrow : false,
          // focusOnSelect: false,
          
        }
      $(".menu").eq(0).slick(sliderOpt);
      // $(".slick-slide").css({width : '900px'})
      
      $(".shack_menu li").on("click" , function(){
          var i = $(this).index();
          
          $(".track").eq(i).show().siblings().hide();
          $(".slick-initialized").slick("unslick");
          $(".menu").eq(i).slick(sliderOpt);
          
          
          $(this).css({
              "color" : "#6fb53c", 
              "borderBottom" : "3px solid #6fb53c"
          }).siblings().css({
              "color" : "rgb(107,107,107)",
              "borderBottom" : "unset",
          })
          
          var len = $(".menu .slick-active").length;
          console.log(len)
          if(len >= 5){
              $(".con3 .button").css("opacity","1");
          } else {
              $(".con3 .button").css("opacity","0.3");
              console.log("aaa");
          }
          
      });
      
  
      $(".search").click(function(){
        $('.cl_search').stop().animate({top: '0%'},600,"swing")
      });
  
      $(".searchwh").click(function(){
        $('.cl_search').stop().animate({top: '-150px'},600,"swing")
      });
  
      $(".navmenu").click(function(){
        $("nav").stop().fadeIn(500)
      });
  
      $("nav .out").click(function(){
        $("nav").stop().fadeOut(500);
      });
  
  
  
      // $(".navmenu").on ("click",function(){
      //     $("nav").css("right" , "0%")
      // });
      // $(".out").on ("click",function(){
      //     $("nav").css("right" , "-45%")
      // })
  
  
      $(".standtit p").on("click",function(e){e.preventDefault
          var stand = $(this).index();
          $(this).css({
              "fontWeight" : "bold" ,
              "color" : "#669933" ,
              "borderBottom" : "3px solid #669933" 
      })
          .siblings().css({
              "color" : "#888" ,
              "borderBottom" : "unset"
          })
  
          $(".something > div").eq(stand).show().siblings().hide();
      })
      
      $("a").on("click", function(e){e.preventDefault();});
      
  });