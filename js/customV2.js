
// top assessments promotional banner starts
    $(document).on('click','.promo-top .btn.close', function(e){
        e.preventDefault();
        $('.promo-top').slideUp();
        $('.promo-minimized').removeClass('hidden');
        setAssessmentCookie('assessmenttopbanner',0);
    });

    $(document).ready(function(){
        
        if (screen.width < 768) {
            setTimeout(function(){
                $('.promo-top').slideDown().removeClass('hidden');
            }, 500);
        
        }
        else {
            setTimeout(function(){
                $('.promo-top').slideDown().removeClass('hidden');
            }, 500);
        }
        
    });

    $(document).on('click','.promo-minimized a', function(e){
        e.preventDefault();
        $('.promo-top').slideDown().removeClass('inactive');
        
        
        $('.promo-minimized').addClass('hidden').removeClass('active');
        setAssessmentCookie('assessmenttopbanner',1);
    });

    
    function checkAssessmentCookie(cookieName,show) {


        if (show == 0) {
            
            setAssessmentCookie(cookieName,1);
        } else {
            
            delete_cookie(cookieName);
        }
    }
    
    
    function delete_cookie(name) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    
    function setAssessmentCookie(cname, cvalue) {
        console.log("y");
        var d = new Date();
        exdays=1;
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; "+ expires ;

        }
        


// spaceal skill Job wrapper start  

    $(document).on('click','.blueCollar .toggle-btn', function(){
        $(this).find('i').toggleClass('icon-minus icon-plus');
        $parent = $(this).parents(".slide");
        $parent.toggleClass("expanded");

        if($parent.hasClass("expanded")){
            $(this).find('span').text("কম");
        } 
        else {
            $(this).find('span').text("আরও");
        }
    });
    $(document).on('click','.blueCollar .toggle-btn', function(){
        $(this).parents('div.blueCollar').find('li.collapseBlue').slideToggle('active');
    });

// Control Panel Accessability Code
// on  tariq 12 sep2020 0116pm //IMPORTANT
    var $affectedElements = $("h1,h2,h3,h4,h5,h6,ul,ol,input,div,p,a,button,span,li,strong,b,i,hr");
    
    $(document).ready(function() {

    // on  tariq 21 sep2020 1212pm //IMPORTANT
    //var $affectedElements = $("h1,h2,h3,h4,h5,h6,ul,ol,input,div,p,a,button,span,li,strong,b,i,hr");


        $(".acad").on("click", function() {
            $(".acctoggle-btn").trigger("click");
            $(".control-panel").focus();
        });

        $(".acctoggle-btn").on("click", function() {
            if($(".control-panel").hasClass("open")){
                $(".control-panel").removeClass("open").removeAttr("tabindex");
                $(".control-panel").find(".btn").removeAttr("tabindex").removeAttr("role").removeAttr("aria-pressed");
                $(".control-panel").find(".acctoggle-btn").removeAttr("tabindex").removeAttr("role").removeAttr("aria-pressed");
            }else{
                $(".control-panel").addClass("open").attr("tabindex","0");
                $(".control-panel").find(".btn").attr("tabindex","0").attr("role","button").attr("aria-pressed","false");
                $(".control-panel").find(".acctoggle-btn").attr("tabindex","0").attr("role","button").attr("aria-pressed","false");
                isOffLayer=false;
            }
        });
        
        $(document).on("keypress",".control-panel div[role=button]",function(e){
            if (e.key === "Enter") {                    
                $(this).trigger("click");
            }
        });

        $(document).on("click",".control-panel div[role=button]",function(e){
            $(this).toggleAriaPressed();
        });

        // off  tariq 12 sep2020 1246pm //IMPORTANT var $affectedElements = $("h1,h2,h3,h4,h5,h6,ul,ol,input,div,p,a,button,span,li,strong,b,i,hr");
        console.log( "Date ---AccConPanel--58-------- " + new Date() + " ----------------------------" ) ;
        console.log( " affectedElements Count @ 59 :: " + $affectedElements.length );


        $affectedElements.each(function() {
            $(this).data("orig-size", $(this).css("font-size"));
        });

        $("#btn-increase").click(function() {
            changeFontSize(1);                
        })

        $("#btn-decrease").click(function() {
            changeFontSize(-1);
        })

        $("#btn-orig").click(function() {
            $affectedElements.each(function() {
                $(this).css("font-size", $(this).data("orig-size"));
            });
        })

        function changeFontSize(direction) {

                console.log( "Date ---AccConPanel--77-------- " + new Date() + " ----------------------------" ) ;
                console.log( " affectedElements Count @ 78 :: " + $affectedElements.length );

            $affectedElements.each(function() {
                $(this).css("font-size", parseInt($(this).css("font-size")) + direction);
            });
        }          

        $(document).on("click", "#f-monocclr", function() {               
                    $("html").toggleClass("monocclr");
        });

        $.fn.toggleAriaPressed=function(){
            if($(this).attr("aria-pressed")=="true"){
                $(this).attr("aria-pressed","false");
            }else{
                $(this).attr("aria-pressed","true");
            }
        }

    });



// Contact Us
    $(document).ready(function() {
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    });


//CareerCounsellingCategory

function TextChange() {
    alert("GH");
 }

     $(".input-wrap .input-group-field ul").on("click", ".fsele", function() {
         $(this).closest(".input-wrap .input-group-field ul").children('li:not(.fsele)').slideDown(10);
     });

     var allOptions = $(".input-wrap .input-group-field ul").children('li:not(.fsele)');
     $(".input-wrap .input-group-field ul").on("click", "li:not(.fsele)", function() {
         allOptions.removeClass('selected');
         $(this).addClass('selected');	

         // Following line stopped by Tariq 12 apr 2020 0614 pm		
         // $(".input-wrap .input-group-field ul").children('.fsele').html($(this).html().substring(0,16)+ '...K');
         //console.log($(this).html().length);
         thisHTML = $(this).html() ;
         if( thisHTML.length >= 16 ){ thisHTML = thisHTML.substring(0,16) + '...' ; }
          $(".input-wrap .input-group-field ul").children('.fsele').html(thisHTML);
         //console.log(thisHTML);


         allOptions.slideUp(10);
         var dropdown_val=$(".input-wrap .input-group-field ul").find(".selected").data("value");
         $('#categoryType').val(dropdown_val);
         //alert($('#categoryType').val());
         var dropdown_txt=($(this).html().substring(0,16)+ '...');
         $('#categoryTxt').val(dropdown_txt);
     });
     $(document).mouseup(function(event) {
     var target = event.target;
     var select = $(".input-wrap .input-group-field ul");
         if (!select.is(target) && select.has(target).length === 0) {
             allOptions.slideUp(10);
         }
     });

