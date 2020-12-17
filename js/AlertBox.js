// JavaScript Document

function closeMssageBox (targetDiv)
	{
		document.getElementById(targetDiv).style.display="none"
		document.getElementById(targetDiv).innerHTML="";
		//document.getElementById("vDiv").style.visibility = "hidden";
		
	}
	
//Create Message Box in Javascript for AJAX Call 
function CreateMessageBox (strType, strMsg, TargetDiv, intWidth, intHeight, strColor)
{
	//document.body.innerHTML += '<div  id=TargetDiv style="display:none;width:250px;text-align:center"></div>';
	
	if (intWidth == -1)
	{
		intWidth = 250
	}
	else
	{
		intWidth = intWidth
	}
	
	if (intHeight == -1)
	{
		intHeight = 158
	}
	else
	{
		intHeight = intHeight
	}
	if (strColor == "")
	{
		strColor = "#EEEEEE"
	}
	else
	{
		strColor = strColor
	}
	
	divTop = (screen.availHeight/2 - intHeight/2) 
	divLeft = (screen.availWidth/2 - intWidth/2)
	
	
	tmpDiv = document.getElementById(TargetDiv)
	//document.getElementById("TmpMessage").style.position = "absolute"
	//document.getElementById("TmpMessage").style.top = divTop;
	tmpDiv.style.position = "fixed"
	tmpDiv.style.display = "Block"
	tmpDiv.style.top = divTop+"px";
	tmpDiv.style.left = divLeft+"px";
	tmpDiv.style.width = intWidth+"px"
	//tmpDiv.style.minHeight = "158px"
	tmpDiv.style.border = "1px solid #999999"
	tmpDiv.style.backgroundColor = strColor
	tmpDiv.style.borderRadius = '1em';
	tmpDiv.style.padding = "5px"
	tmpDiv.style.zIndex ="3000"
	
	//tmpDiv.style.borderColor="Red";
	//tmpdiv.outerHTML = "</div><div id='vDiv' style='z-index: 1050;background: none repeat scroll 0 0 #CCCCCC;height: 100%;left: 0;opacity: 0.8;position: fixed;top: 0;  visibility: hidden;width: 100%;' onClick='closeMssageBox()'>"
	if (strType.toLowerCase()=="information")
	{
		tmpImg = "infoMsg"
	}
	else if (strType.toLowerCase()=="failuer")
	{
		tmpImg = "failMsg"
	}
	else if (strType.toLowerCase()=="success")
	{
		tmpImg = "sucsMsg"
	}
	else
	{
		tmpImg = ""
	}
	tmpMsg = "<table width='100%'>"
	tmpMsg = tmpMsg + "<tr>"
	if (strType.toLowerCase()!="processing")
	{
	tmpMsg = tmpMsg + "<td width='50px'>"
	
	tmpMsg = tmpMsg + "<img id='' src='/images/"+tmpImg+".gif' width='50px' height='50px'>"
	
	tmpMsg = tmpMsg + "</td>"
	}
	tmpMsg = tmpMsg + "<td>"
	tmpMsg = tmpMsg + "<span style='font-size:12px; color:black'>"+strMsg+"</span>"
	tmpMsg = tmpMsg + "</td>"
	tmpMsg = tmpMsg + "</tr>"
	tmpMsg = tmpMsg + "</table>"
	
	tmpDiv.innerHTML = tmpMsg ;
	
	if (strType.toLowerCase() == "success" || strType.toLowerCase() == "failuer" || strType.toLowerCase()=="information")
	{
		tmpDiv.innerHTML = tmpDiv.innerHTML+ "<br><div align='center'><input type='button' class='btn btn-success' name='btnMsg' id='btnMsg' value='ok' onClick=closeMssageBox('"+TargetDiv+"') style='width:100px;margin-bottom: 5px;' /></div>";
	}
	//
	tmpDiv.innerHTML = tmpDiv.outerHTML+"<div id='vDiv' style='z-index: 1050;background: none repeat scroll 0 0 #CCCCCC;height: 100%;left: 0;opacity: 0.8;position: fixed;top: 0;  visibility: hidden;width: 100%;'></div>"
	document.getElementById("vDiv").style.visibility="visible";
	//document.getElementById("vDiv").onclick = Function("closeMssageBox('"+TargetDiv+"')");
}