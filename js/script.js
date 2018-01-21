
                $('.portfolio-image').hover(function() {  // overlay, and button appear on hover
                  $(this).find('img').css("opacity","0.5")
                  $(this).find('button').toggle();
                }, function() { 
                  $(this).find('img').css("opacity","1") 
                  $(this).find('button').toggle();
                });
                
            
        
            $('#shannon').click(function() { $('#shannon-modal').css("display","flex") }); // opens popup modal on click
            $('#cloud-solutions').click(function() { $('#cloud-solutions-modal').css("display","flex") });
            $('#corridor').click(function() { $('#corridor-modal').css("display","flex") });
            $('#chromebook-guide').click(function() { $('#chromebook-guide-modal').css("display","flex") });
            
            $('.close').click(function() { $('.portfolio-modal').css("display","none") }); // closes popup modal on click
            
