               $('.portfolio-image').hover(function() {  // overlay, and button appear on hover
                  $(this).find('img').css("opacity","0.2")
                  $(this).find('button.open-popup').toggle();
                }, function() { 
                  $(this).find('img').css("opacity","1") 
                  $(this).find('button.open-popup').toggle();
                });
                
            
        
            $('#shannon').click(function() {  // opens popup modal on click
             // $('#shannon-modal').css("display","flex"); 
             $('#shannon-modal').css("display","flex").hide().fadeIn(800);
              $('#portfolio-entries').css("opacity",".1");
            }); 

            $('#cloud-solutions').click(function() { 
              $('#cloud-solutions-modal').css("display","flex").hide().fadeIn(800); 
              $('#portfolio-entries').css("opacity",".1");
            });

            $('#corridor').click(function() { 
              $('#corridor-modal').css("display","flex").hide().fadeIn(800); 
              $('#portfolio-entries').css("opacity",".1");
            });

            $('#chromebook-guide').click(function() { 
              $('#chromebook-guide-modal').css("display","flex").hide().fadeIn(800); 
              $('#portfolio-entries').css("opacity",".1");
            });

            $('#chromebook-reviews').click(function() { 
              $('#chromebook-reviews-modal').css("display","flex").hide().fadeIn(800); 
              $('#portfolio-entries').css("opacity",".1");
            });
            



            $('.close').click(function() {  // closes popup modal on click
           //   $('.portfolio-modal').css("display","none");
              $('.portfolio-modal').fadeOut(300);
              $('#portfolio-entries').css("opacity","1");
            }); 

              $(".portfolio-entry p").mousedown(function() { 
                $(this).css("box-shadow", "0 0 0"); })
                .mouseup(function() { 
                $(this).css("box-shadow", "1px 1px 2px #00000075"); })
                 .mouseleave(function() { $(this).css("box-shadow", "1px 1px 2px #00000075"); });
            
