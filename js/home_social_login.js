



  function statusChangeCallback(response) {
    //console.log('statusChangeCallback');
   
    if (response.status === 'connected') {
      
     // getUserInformation();
    } //else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
     // document.getElementById('status').innerHTML = 'Please log ' +
      //  'into this app.';
	 
    //} 
	else {
		
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
     // document.getElementById('status').innerHTML = 'Please log ' +
       // 'into Facebook.';
    }
  }
function create_spinner()
{
	$("#spinner-container").show();
  var spinner = new Spinner({
  lines: 10, // The number of lines to draw
  length: 6, // The length of each line
  width: 4, // The line thickness
  radius: 15, // The radius of the inner circle
  color: '#ffffff', // #rbg or #rrggbb
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false // Whether to render a shadow
}).spin(document.getElementById("spinnerHolder"));

}
  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
	  
  FB.init({
    appId      : '1117783308285421',
    cookie     : true,  // enable cookies to allow the server to access 
   // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function getUserInformation() {
  //  console.log('Welcome!  Fetching your information.... ');
			   FB.api('/me?fields=id,email',
				  function(response) 
				  {   
				     create_spinner();
					  if (response.id!="")
					  {
				    
						$.ajax({
							type: "POST",
							url: "http://bdjobs.com/upcoming/social_login/job_social_agent_log.asp",
							data:"id="+response.id+"&email="+response.email+"&se=F&vs="+strVersion+"",
							success: function (data) 
							{
							   $('#spinner-container').hide();
								if(data.indexOf("###")==-1)
								{
									 
									$('#social-modal-container').show();  
									$('#my_Modal').show();  
									$('#my_Modal').html(data);
									
									$(".social-modal-container").fadeIn(300);
									
									$(document).on("click",".social-modal .close", function(){
									$(".social-modal-container, .social-modal").fadeOut(300);
									});
									


								}
								else
								{
									 
								    data=data.replace("###"," ")
									document.getElementById("status").innerHTML=data;
									document.getElementById("mapUserLogin").submit();
									$('.login-form').fadeOut(100);
								}
							
							},
							error: function (response) {
							//Handle error
							$("#spinner-container").hide();
							
							} 
						});
							
					  
					 
					  
					  }
				  });
				  
     
  
  }
  
  function FBLogin()

{
		
		
		
      FB.login(function(response) {

         if (response.authResponse)

         {
			

             getUserInformation(); //Get User Information.

          } else

          {

           //alert('Authorization failed.');

          }

       },{scope: 'public_profile,email'});

}

function submitForm(sm_form)
{
	
	document.getElementById(sm_form).submit();
}

 // function getUserInformation() {
//    console.log('Welcome!  Fetching your information.... ');
//   // FB.api('/me', function(response) {
//	   
//
//FB.api('/me?fields=first_name, last_name,middle_name, picture, email,religion,gender,location,birthday,education', function(response) {
//          console.log(response);
//          
//           var strHtml= "<b>First name :</b>" + response.first_name+"<br>";
//		   strHtml=strHtml+"<b>Mibdle name:</b>"+response.middle_name+"<br>";
//		   strHtml=strHtml+"<b>Last name:</b>"+response.last_name+"<br>";
//		   strHtml=strHtml+"<b>email : </b>"+response.email+"<br>";
//		   strHtml=strHtml+"<b>religion :</b>"+response.religion+"<br>";
//		   strHtml=strHtml+"<b>gender :</b>"+response.gender +"<br>";
//		   document.getElementById("profilePic").src=response.picture.data.url;
//		    strHtml=strHtml+"<b>Location :</b>"+response.location +"<br>";
//			   strHtml=strHtml+"<b>birthday  :</b>"+response.birthday  +"<br>";
//			   strHtml=strHtml+"<b>birthday  :</b>"+response.education  +"<br>";
//			 
//		   document.getElementById('status').innerHTML =strHtml;
//        });
//     // console.log('Successful login for: ' + response);
////      document.getElementById('status').innerHTML =
////        'Thanks for logging in, ' + response.name + '!';
////    });
//  }

function logout()
{
    gapi.auth.signOut();
    location.reload();
	$('#g_sign_in').show();
	$('#g_sign_out').hide();
}
function log_in() 
{//gplus_button li_button
	
  var myParams = {
    'clientid' :"656340698751-kt8lk3hujr2grfo7rnjmddb85rmg1c2q.apps.googleusercontent.com",
    'cookiepolicy' : 'single_host_origin',
    'callback' : 'onSignInCallback',
    'approvalprompt':'force',
    'scope' : 'email'
  };
  gapi.auth.signIn(myParams);
}

  function onSignInCallback(resp) {
    gapi.client.load('plus', 'v1', apiClientLoaded);
  }
//
//  *
//   * Sets up an API call after the Google API client loads.
//   
  function apiClientLoaded() {
    gapi.client.plus.people.get({userId: 'me'}).execute(handleEmailResponse);
  }
//
//  *
//   * Response callback for when the API client receives a response.
//   *
//   * @param resp The API response object with the user email and profile information.
//   
  function handleEmailResponse(resp) {
	  var email = '', id='';
	  create_spinner();
            if(resp['emails'])
            {
                for(i = 0; i < resp['emails'].length; i++)
                {
                    if(resp['emails'][i]['type'] == 'account')
                    {
                        email = resp['emails'][i]['value'];
                    }
                }
            }
			id=resp['id'];
			
	if (id!="")
			{
		
  			 $.ajax({
					type: "POST",
					url: "http://bdjobs.com/upcoming/social_login/job_social_agent_log.asp",
					data:"id="+id+"&email="+email+"&se=G&vs="+strVersion+"",
					success: function (data) 
					{
						$('#spinner-container').hide();
						if(data.indexOf("Invalid request")==-1)
						{
									if(data.indexOf("###")==-1)
										{
								
											 
											$('#social-modal-container').show();  
											$('#my_Modal').show();  
											$('#my_Modal').html(data);
											
											$(".social-modal-container").fadeIn(300);
											
											$(document).on("click",".social-modal .close", function(){
											$(".social-modal-container, .social-modal").fadeOut(300);
											});
											
											
										
											//document.getElementById("text").innerHTML=data;
											
											
										}
										else
										{
											 data=data.replace("###", "");
											document.getElementById("status").innerHTML=data;
											document.getElementById("mapUserLogin").submit();
											$('.login-form').fadeOut(100);
							
										}
						}
						
					},
					error: function (response) {
							//Handle error
							$("#spinner-container").hide();
							
							
							}
							
							
					
					});
					
					
	
   
		
  }

  }

 
 
    function onLinkedInLoad() {

        IN.UI.Authorize().place();      
        IN.Event.on(IN, "auth", function () { onLogin(); });
		
		
		
    }
	function onlogOut()
	{
		IN.UI.Authorize().place();      
		IN.Event.on(IN, "logout", function () { onLogout(); });
		
	}
	

    function onLogin()
	 {
	
         IN.API.Profile("me").fields("id","email-address").result(displayResult); 
		
     }  
    function displayResult(profiles) 
	{
		 member = profiles.values[0];
		 create_spinner();
		 if(member.id!="")
		 {
		  
		 $.ajax({
					type: "POST",
url: "http://bdjobs.com/upcoming/social_login/job_social_agent_log.asp",
					data:"id="+member.id+"&email="+member.emailAddress+"&se=L&vs="+strVersion+"",
					success: function (data) 
					{
						
						$('#spinner-container').hide();
						 
						if(data.indexOf("###")==-1)
								{
						
					               	$('#social-modal-container').show();  
									$('#my_Modal').show();  
									$('#my_Modal').html(data);
									
									$(".social-modal-container").fadeIn(300);
									
									$(document).on("click",".social-modal .close", function(){
									$(".social-modal-container, .social-modal").fadeOut(300);
									});
									
									
								
						 			//document.getElementById("text").innerHTML=data;
									
									
								}
								else
								{
									 data=data.replace("###", "");
									document.getElementById("status").innerHTML=data;
									
									document.getElementById("mapUserLogin").submit();
									$('.login-form').fadeOut(100);
						
					
								}
					},
					error: function (response) {
							//Handle error
							
							$('#spinner-container').hide();
							
							}
							
							
					});
		 }
       
       
    }   

function closeModal()
{
	$(".social-modal-container").fadeIn(300);
	
	$(document).on("click",".social-modal .close", function(){
	$(".social-modal-container, .social-modal").fadeOut(300);
	});
}


