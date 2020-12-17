
    $(document).ready(function() {
        $('a[href*="#"]')
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { 
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); 
                                $target.focus(); 
                            };
                        });
                    }
                }
            });
    });




//Check_TermsAndCondition
    function Check_TermsAndCondition(value)
    {
        
    
    
        if (document.getElementById("checkCodition").checked)
        { 
            document.getElementById("Continue").disabled=false;
            document.getElementById("Continue").className="btn view-btn sign-up";
        }
        else
        {
            document.getElementById("Continue").disabled=true;
        
            //document.getElementById("Continue").className="BDJtabDisabled";
        
        }
    
    }
    function Check_TermsAndConditionbn(value)
    {
        
    
    
        if (document.getElementById("checkCoditionbn").checked)
        { 
            document.getElementById("Continuebn").disabled=false;
            document.getElementById("Continuebn").className="btn view-btn sign-up";
        }
        else
        {
            document.getElementById("Continuebn").disabled=true;
        
            //document.getElementById("Continue").className="BDJtabDisabled";
        
        }
    
    }
    function isNumberKey(evt)
    {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
        return true;
    }
    
    $(document).ready(function() {
        $("#global_error_message_container").hide();
        //$("#first_name").focus();
    });


//complexity
$(document).ready(function() 
{
    var strPassword;
    var charPassword=0;
    var complexity = $("#complexity");
    var minPasswordLength = 6;
    var maximumwordlenght=12;
    var baseScore = 0, score = 0,feedback='';
    
    var num = {};
    num.Excess = 0;
    num.Upper = 0;
    num.Numbers = 0;
    num.Symbols = 0;

    var bonus = {};
    bonus.Excess = 3;
    bonus.Upper = 4;
    bonus.Numbers = 5;
    bonus.Symbols = 5;
    bonus.Combo = 0; 
    bonus.FlatLower = 0;
    bonus.FlatNumber = 0;
    
    outputResult();
    $("#txtPassword").bind("keyup", checkVal);
    //$('#txtEmail1').focusout(function() 
    
    $('#txtEmail1').on('keyup keypress blur', function() 
    {  
        //if(!$('#userNameRadio1').is(':checked') && !$('#userNameRadio1').is(':checked')) 
        
        if($('#userNameRadio1').is(':checked'))
        {
            $('#txtUserName').val('');
            $('#txtUserName').val($(this).val());  
        }
    });
    
    $('#txtMobile').on('keyup keypress blur', function() 
    {  
        
        if($('#userNameRadio2').is(':checked'))
        {
            $('#txtUserName').val('');
            //$('#txtUserName').val('88'+$(this).val());  //this was for previous system
            $('#txtUserName').val($(this).val());  
        }
    });


function checkVal()
{
    init();
    
    if (charPassword.length >= minPasswordLength && charPassword.length<=maximumwordlenght )
    {
        baseScore = 50;	
        analyzeString();	
        calcComplexity();		
    }
    else
    {
        baseScore = 0;
    }
    
    outputResult();
}

function init()
{
    strPassword= $("#txtPassword").val();
    charPassword = strPassword.split("");
        
    num.Excess = 0;
    num.Upper = 0;
    num.Numbers = 0;
    num.Symbols = 0;
    bonus.Combo = 0; 
    bonus.FlatLower = 0;
    bonus.FlatNumber = 0;
    baseScore = 0;
    score =0;
}

function analyzeString ()
{	
    for (i=0; i<charPassword.length;i++)
    {
        
        if (charPassword[i].match(/[A-Z]/g)) {num.Upper++;}
        if (charPassword[i].match(/[0-9]/g)) {num.Numbers++;}
        if (charPassword[i].match(/(.*[!,@,#,$,%,^,&,*,?,_,~])/)) {num.Symbols++;} 
        
    }
    
    num.Excess = charPassword.length - minPasswordLength;
    
    if (num.Upper  && num.Numbers && num.Symbols)
    {
        bonus.Combo = 25; 
    }

    else if ((num.Upper && num.Numbers)|| (num.Upper && num.Symbols) || (num.Numbers && num.Symbols))
    {
        bonus.Combo = 15; 
    }
    
    if (strPassword.match(/^[\sa-z]+$/))
    { 
        bonus.FlatLower = -15;
    }
    
    if (strPassword.match(/^[\s0-9]+$/))
    { 
        bonus.FlatNumber = -35;
    }
}
    
function calcComplexity()
{
    score = baseScore + (num.Excess*bonus.Excess) + (num.Upper*bonus.Upper) + (num.Numbers*bonus.Numbers) + (num.Symbols*bonus.Symbols) + bonus.Combo + bonus.FlatLower + bonus.FlatNumber;
    
}	


function _updateProgressBar(textContent,value,cssClass,cssClass1){
        feedback.textContent =textContent;
    progress=document.getElementById("progressbar");
    //progress.style.width= value+"px";
    feedback.className=cssClass1;
    progress.className=cssClass;
    show_error_message(textContent,"PasswordStrength");
        
    }
    
function outputResult()
{
    if (document.getElementById("PasswordStrength_message")!=null)
    
    {

        feedback = document.getElementById("PasswordStrength_message");
        
        if ($("#txtPassword").val()== "")
        { 
            complexity.html("Enter a random value").removeClass("weak strong stronger strongest").addClass("default");
            _updateProgressBar("",0,"","msg");
        }
        else if (charPassword.length < minPasswordLength)
        {
            
            complexity.html("At least " + minPasswordLength+ " characters please!").removeClass("strong stronger strongest").addClass("weak");
            _updateProgressBar("Very Weak!",5,"progress-bar very-week-p","very-week msg");
        }
        
        else if (score<50)
        {
            
            complexity.html("Weak!").removeClass("strong stronger strongest").addClass("weak");
            //document.getElementById("password_strength").className = "strength" + score;
            _updateProgressBar("Weak!",score,"progress-bar week-p","very-week msg");
        }
        else if (score>=50 && score<70)
        {
            complexity.html("Average!").removeClass("stronger strongest").addClass("strong");
            _updateProgressBar("Weak!",score,"progress-bar week-p","week msg");
        }
        else if (score>=70 && score<100)
        {
            complexity.html("Strong!").removeClass("strongest").addClass("stronger");
                _updateProgressBar("Strong!",score,"progress-bar strong-p","strong msg");
        }
        else if (score>=100)
        {
            
            complexity.html("Secure!").addClass("strongest");
            _updateProgressBar("Very Strong!",score,"progress-bar very-strong-p","very-strong msg");
            
        }
        else if (charPassword.length < maximumwordlenght )
        {
            complexity.html("Password limite should  be " + maximumwordlenght+ " characters please!").removeClass("strong stronger strongest").addClass("weak");
        }
    }

    
}

}
);

function LoadForm(inputValue)
{
    var categoryType = inputValue;
    var isFromSm = document.getElementById("hIsSMLogin").value;
    var x = document.getElementById("userInfo");
    
    if(inputValue == 2) //this //condition used when there was a radio button 
    {
        isFromSm = "true";
    }
    
    //if (isFromSm=="false")
    //{
        if(categoryType == 1)
        {
            x.style.display = "none";
            document.getElementById("uIDBtn").style.display = "none"
            document.getElementById("emailDiv").style.display = "none";
            document.getElementById("categoryType").value = 1;
            document.getElementById("functionRadio").value = 1;
            document.getElementById("termAndCondition").style.display = "none";
        }
        else if(categoryType == 3){
            x.style.display = "none";
            document.getElementById("uIDBtn").style.display = "none"
            document.getElementById("emailDiv").style.display = "none";
            document.getElementById("categoryType").value = 3;
            document.getElementById("functionRadio").value = 3;
            document.getElementById("termAndCondition").style.display = "none";
        }
        else{
            if (isFromSm =="false")
            {
                    if(document.getElementById("emailDiv").style.display == "none")
                    {
                        document.getElementById("emailDiv").style.display = "block";
                    }
                    x.style.display = "block";
                    document.getElementById("uIDBtn").style.display = "block"
                    document.getElementById("emailuIDBtn").style.display = "block"
                    
    
            }else
            {
                    x.style.display = "none";
                    document.getElementById("uIDBtn").style.display = "none"
                    document.getElementById("emailDiv").style.display = "block";
            }
            document.getElementById("categoryType").value = 0;
            document.getElementById("functionRadio").value = 0;
            document.getElementById("termAndCondition").style.display = "block";
        }
        
        $('.msg').hide('medium');
}

function formVersion(inputValue)
{
    if(inputValue == 1 || inputValue == 3)
    {
            document.getElementById("txtFirstName").placeholder = "আপনার নাম";
            document.getElementById("name").innerHTML = "নাম";
            document.getElementById("category").innerHTML = "নিচের লিস্ট থেকে দক্ষতা নির্বাচন করুন";
            document.getElementById("mbl").innerHTML = "মোবাইল নম্বর";
            document.getElementById("txtMobile").placeholder = "0171XXXXXX";
            document.getElementById("txtEmail1").placeholder = "ইমেইল অ্যাড্রেস";
            document.getElementById("male").innerHTML = "পুরুষ";
            document.getElementById("female").innerHTML = "মহিলা";
            document.getElementById("other").innerHTML = "অন্যান্য";
            document.getElementById("gender").innerHTML = "লিঙ্গ"; 
            document.getElementById("Continue").innerHTML = "অ্যাকাউন্ট তৈরি"; 
        
            document.getElementById("version").value = "BN"
            
                $('#txtFirstName').addClass( 'name-msg' );
                $('#txtLastFName').addClass( 'lname-msg' );
                $('#txtMobile').addClass( 'phoem-msg' );
            
                
            
            
    }
    else
    {		
            document.getElementById("txtFirstName").placeholder = "Your Name";
            document.getElementById("name").innerHTML = "Name";
            document.getElementById("category").innerHTML = "Select your skill from following list";
            document.getElementById("mbl").innerHTML = "Mobile Number";
            document.getElementById("txtMobile").placeholder = "0171XXXXXX";
            document.getElementById("txtEmail1").placeholder = "Email Address";
            document.getElementById("male").innerHTML = "Male";
            document.getElementById("female").innerHTML = "Female";
            document.getElementById("other").innerHTML = "Others";
            document.getElementById("gender").innerHTML = "Gender";
            document.getElementById("Continue").innerHTML = "Create Account"; 
            document.getElementById("version").value = "EN";
            
                $('#txtFirstName').removeClass( 'name-msg' );
                $('#txtLastFName').removeClass( 'lname-msg' );
                $('#txtMobile').removeClass( 'phoem-msg' );
                
    }
}


function setUserName(userName)
{
    var strUserName = userName
    var email = document.getElementById("txtEmail1");
    var mobile = document.getElementById("txtMobile");
    var countryCode = document.getElementById("txtCountryCode");
    var x = document.getElementById("txtUserName");
    if( strUserName == "email")
    {
        if (email.value.trim() == "")
        {
            alert("Email Address cannot be empty.");
            document.getElementById("userNameRadio1").checked = false;
            document.getElementById("txtUserName").value = "";
            return false;
        }else
        {
                CheckUserName1(userName);
                x.value = email.value.trim() ;
        }
    }else
    {
            if (mobile.value.trim() == "")
            {
                alert("Mobile Number cannot be empty.");
                document.getElementById("userNameRadio2").checked = false;
                document.getElementById("txtUserName").value = "";
                return false;
            }else
            {
                    CheckUserName1(userName);
                //x.value = countryCode.value.trim() + mobile.value.trim() ; this was for previous system
                x.value =  mobile.value.trim() ;
            }
    }
    x.disabled = false;
}


$(document).ready(function () {
                $("#userInfo").on("keyup", "#txtPassword", function () {
                    if ($("#progressbar").is(".very-week-p")) {
                        $(".pass-status.very-week").addClass(
                            "active");
                    } else {
                        $(".pass-status.very-week").removeClass(
                            "active");
                    }
                    if ($("#progressbar").is(".week-p")) {
                        $(".pass-status.very-week").addClass(
                            "active");
                        $(".pass-status.week").addClass("active");
                    } else {
                        $(".pass-status.week").removeClass("active");
                    }
                    if ($("#progressbar").is(
                            ".strong-p, .very-strong-p")) {
                        $(".pass-status.very-week").addClass(
                            "active");
                        $(".pass-status.week").addClass("active");
                        $(".pass-status.strong").addClass("active");
                    } else {
                        $(".pass-status.strong").removeClass(
                            "active");
                    }
                })
})
                                                            

//scroll
        $(function(){
        
            $(document).on( 'scroll', function(){
        
                if ($(window).scrollTop() > 100) {
                    $('.scroll-top-wrapper').addClass('show');
                } else {
                    $('.scroll-top-wrapper').removeClass('show');
                }
            });
        
            $('.scroll-top-wrapper').on('click', scrollToTop);
        });
    $('#txtEmail1').keyup(function(){
        str = $(this).val()
        str = str.replace(/\s/g,'')
        $(this).val(str)
    });

        
        function scrollToTop() {
            verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
            element = $('body');
            offset = element.offset();
            offsetTop = offset.top;
            $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
        }
        $( document ).ready(function() {
    $('.datepicker').datepicker({ format: "mm/dd/yyyy" }).on('changeDate', function(ev){
        $(this).datepicker('hide');
    });
    });



        $(function() {
        $('.tab-content').hide();
    });
    
    $('#wcj').click(function() {
        $('.mob-cart').hide();
        $('.tab-content').show();
        $('.social-button-bc').hide();
        $('.social-button').show();
        $('#b_returnEN').show();
        $('#b_returnBN').hide();
        document.getElementById("Continue").disabled=true;
    });
    
    $('#bcj').click(function() {
        $('.mob-cart').hide();
        $('.tab-content').show();
        $('.social-button').hide();
        $('.social-button-bc').show();
        $('#b_returnEN').hide();
        $('#b_returnBN').show();
        document.getElementById("Continue").disabled=false;
        document.getElementById("Continue").className="btn view-btn sign-up";
        
    });

    $('#pwdc').click(function() {
        $('.mob-cart').hide();
        $('.tab-content').show();
        $('.social-button').hide();
        $('.social-button-bc').show();
        $('#b_returnEN').hide();
        $('#b_returnBN').show();
        document.getElementById("Continue").disabled=false;
        document.getElementById("Continue").className="btn view-btn sign-up";
        
    });
    
    $('.p-p-return').click(function() {
        $('.tab-content').hide();
        $('.mob-cart').show();
    });
    
        $('.g-s').on('click', 'label', function() {
            $('.g-s label.active').removeClass('active');
            $(this).addClass('active');
        });
