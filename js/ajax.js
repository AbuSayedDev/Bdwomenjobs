function GetXmlHttpObject() {
    var xmlHttp = null;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}



function setloadingImage(htmlid){
	loadingimage="<div style='text-align:center;' id='loadingImage'><img alt='' src='images/loading_Horizontal_animated.gif'></div>";
	document.getElementById(htmlid).innerHTML=loadingimage;
}

function unSetloadingImage(htmlid){
	
	document.getElementById(htmlid).innerHTML="";
}