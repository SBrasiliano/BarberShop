//Funcion que cambia color con scroll 

$(window).scroll(function(){

    if ($(this).scrollTop() < 100) {
        $("#menu").removeClass("nav");
       $('#menu').addClass("nav__bg-interno");
      } else {

        if (($(this).scrollTop() < 800 && $(this).scrollTop() > 100 )) {
            $("#menu").removeClass("nav__bg-interno");
            $('#menu').addClass("nav");
          } 
          else{

            $("#menu").removeClass("nav");
            $('#menu').addClass("nav__bg-interno");
          }
         
      }

   });

