$(document).ready(function() {
    $('.done-button-sm, .done-button-s').click(function() {
        $('.open').removeClass('open');
    });
});
var d = document;
var category = "" //= (navigator.userAgent.toLowerCase().indexOf('category') != -1) ? true : false;
var gebtn = function(parEl, child) { return parEl.getElementsByTagName(child); };

function loadTools() {
    var body = gebtn(d, 'body')[0];

    body.className = body.className && body.className != '' ? body.className + ' has-js' : 'has-js';

    if (!d.getElementById || !d.createTextNode) return;
    var ls = gebtn(d, 'label');
    //console.log(ls);
    for (var i = 0; i < ls.length; i++) {
        var l = ls[i];
        if (l.className.indexOf('label_') == -1) continue;
        var inp = gebtn(l, 'input')[0];
        if (l.className == 'label_check') {
            //l.className = (category && inp.checked == true || inp.checked) ? 'label_check c_on' : 'label_check c_off';
            l.onclick = check_it;
        };
        if (l.className == 'label_radio') {
            l.className = (category && inp.checked == true || inp.checked) ? 'label_radio r_on' : 'label_radio r_off';
            l.onclick = turn_radio;
        };
    };
};
var check_it = function() {
    var inp = gebtn(this, 'input')[0];
    if (this.className == 'label_check c_off' || (!category && inp.checked)) {
        //this.className = 'label_check c_on';
        if (category) inp.click();
    } else {
        //this.className = 'label_check c_off';
        if (category) inp.click();
    };
};
var turn_radio = function() {
    var inp = gebtn(this, 'input')[0];
    if (this.className == 'label_radio r_off' || inp.checked) {
        var ls = gebtn(this.parentNode, 'label');
        for (var i = 0; i < ls.length; i++) {
            var l = ls[i];
            if (l.className.indexOf('label_radio') == -1) continue;
            l.className = 'label_radio r_off';
        };
        this.className = 'label_radio r_on';
        if (category) inp.click();
    } else {
        this.className = 'label_radio r_off';
        if (category) inp.click();
    };
    //};
    //ClickEvent();
}

function ClickEvent() {
    $(".JObSerachLeftPannel").click(function() {
        strID = this.id;
        strDVal = 0;
        tstrID = strID.toLowerCase();
        if (tstrID.indexOf("fcat") > -1 || tstrID.indexOf("specialskill") > -1) {
            strDVal = -1;
        }
        strName = this.name;
        strType = this.type;
        strInsVal = 1;
        if (tstrID.indexOf("specialskill") > -1) {
            strInsVal = -1;
        }

        if (strName.toLowerCase() == "fcat") {
            valueFcat = this.value;

            if (parseInt(valueFcat) == -1 || parseInt(valueFcat) == -10 || (parseInt(valueFcat) > 0 && parseInt(valueFcat) < 60)) {
                //categoty = $("input[name='fcat']").length
                for (i = 60; i <= 100; i++) {
                    DivIDInfo = "lb" + strName + i;
                    if (document.getElementById(DivIDInfo)) {
                        document.getElementById(DivIDInfo).className = "label_radio r_off"
                    }
                    if (document.getElementById(DivIDInfo)) {
                        document.getElementById(DivIDInfo).checked = false
                    }

                }

                DivIDInfo = "lb" + strName + "-11";
                if (document.getElementById(DivIDInfo)) {
                    document.getElementById(DivIDInfo).className = "label_radio r_off"
                }
                if (document.getElementById(DivIDInfo)) {
                    document.getElementById(DivIDInfo).checked = false
                }

            }
            if (parseInt(valueFcat) == -11 || parseInt(valueFcat) > 60) {
                for (i = 0; i <= 60; i++) {
                    DivIDInfo = "lb" + strName + i;
                    if (document.getElementById(DivIDInfo)) {
                        document.getElementById(DivIDInfo).className = "label_radio r_off"
                    }
                    if (document.getElementById(DivIDInfo)) {
                        document.getElementById(DivIDInfo).checked = false
                    }
                }
                DivIDInfo = "lb" + strName + "-1";
                if (document.getElementById(DivIDInfo)) {
                    document.getElementById(DivIDInfo).className = "label_radio r_off"
                }
                if (document.getElementById(DivIDInfo)) {
                    document.getElementById(DivIDInfo).checked = false
                }
                DivIDInfo = "lb" + strName + "-10";
                if (document.getElementById(DivIDInfo)) {
                    document.getElementById(DivIDInfo).className = "label_radio r_off"
                }
                if (document.getElementById(DivIDInfo)) {
                    document.getElementById(DivIDInfo).checked = false
                }
            }
        }

        createContent(strID, strDVal, strName, strType, strInsVal, "filterList")

    });
}
var windowOpen = 0;

function DivOpen(QStr) {
    if (windowOpen == 0) {
        window.open("jobdetails.asp?" + QStr, "_Blank")
    }
    windowOpen = 0;
    //else

}

function DivOpenBN(QStr) {
    if (windowOpen == 0) {
        window.open("jobdetailsBN.asp?" + QStr, "_Blank")
    }
    windowOpen = 0;
    //else

}

function clickJObTitle() {
    windowOpen = 1;

}
var url;
var LoadType;
var getversion;
getversion = ""
var geturl = window.location.toString().toLowerCase();
if (geturl.indexOf("/bn/") >= 0) {
    getversion = "bng"
}

var callAjax = 0;


function createContent(vid, dval, vname, vtype, vins, appendDiv) {
    if (document.getElementById("empty_div")) {
        $("#empty_div").remove()
    }



    var varTime = ""
    var initialization = 1
        /*if (document.getElementById("FillFilter").style.display == "none")
        {
        	document.getElementById("FillFilter").style.display = "block"
        }*/

    var ClickDiv = document.getElementById(vid)
    var TextDiv = document.getElementById("sp" + vid)
        //console.log( "document.getElementById("+ClickDiv+").checked")
    var CrtDiv = "crt" + vname
    strSelName = vname

    //vtype = ClickDiv.type
    //alert(ClickDiv.id)
    if (vid.indexOf("Gender") > 0) {
        //console.log(vid.indexOf("Gender"))
        levelGender = ""


        if (document.getElementById("qGender1").checked == true) {
            if (getversion == "bng") {
                levelGender = levelGender + "à¦ªà§à¦°à§à¦·"
            } else {
                levelGender = levelGender + "Male"
            }
        }
        if (document.getElementById("qGender2").checked == true) {
            if (levelGender != "") {
                levelGender = levelGender + ","
            }
            if (getversion == "bng") {
                levelGender = levelGender + "à¦®à¦¹à¦¿à¦²à¦¾"
            } else {
                levelGender = levelGender + "Female"
            }

        }
        if (document.getElementById("qGender3")) {

            if (document.getElementById("qGender3").checked == true) {
                if (levelGender != "") {
                    levelGender = levelGender + ","
                }
                if (getversion == "bng") {
                    levelGender = levelGender + "à¦…à¦¨à§à¦¯à¦¾à¦¨à§à¦¯"
                } else {
                    levelGender = levelGender + "Others"
                }

            }
        }

        if (getversion == "bng") {
            tmpStyle = "style='font-size:15px;'";
        } else {
            tmpStyle = "";
        }

        CrtDiv = "crtGender"
            //levelGender = levelGender.substr(1)
        if (levelGender != "") {
            if (levelGender.indexOf(",") == 0) {
                levelGender = levelGender.substr(1)
            }
            //console.log(levelGender)

            $("#" + CrtDiv).remove()
            $("#" + appendDiv).append("<div id='" + CrtDiv + "' class='well' " + tmpStyle + ">" + levelGender + "<a href=javascript:CloseFilter('" + CrtDiv + "'," + dval + ",'" + vtype + "','" + vid + "','" + strSelName + "')><span>X</span></a>" + "</div>")
        } else {
            if (document.getElementById("crtGender")) {
                $("#" + CrtDiv).remove()
            }
        }
    } else {
        if (vtype == "radio") {

            //console.log(ClickDiv.id)



            if (ClickDiv != null) {

                //console.log(document.getElementById(ClickDiv.id).checked +"||" +ClickDiv.value)
                //console.log(document.getElementById(ClickDiv.id))
                //alert(vname+"**"+vins+""+ClickDiv.value)
                if (vname == "qJobSpecialSkill") {
                    if ((document.getElementById(CrtDiv) && vins == -1) || ClickDiv.value == "-1") {
                        $("#" + CrtDiv).remove()
                    }
                    //console.log(ClickDiv.id +"----"+document.getElementById(ClickDiv.id).checked +"-----"+ClickDiv.value )
                    if (document.getElementById(ClickDiv.id).checked == true && ClickDiv.value != "-1") {
                        //alert()
                        $("#" + appendDiv).append("<div id='" + CrtDiv + "' class='well'>" + TextDiv.innerHTML + "<a href=javascript:CloseFilter('" + CrtDiv + "','" + dval + "','" + vtype + "','" + vid + "','" + strSelName + "')><span>X</span></a>" + "</div>")
                            //alert(ClickDiv.value)
                    }

                } else {
                    if ((document.getElementById(CrtDiv) && vins == 1) || ClickDiv.value == "0") {
                        $("#" + CrtDiv).remove()
                    }

                    if (document.getElementById(ClickDiv.id).checked == true && ClickDiv.value != "0") {
                        //alert()
                        $("#" + appendDiv).append("<div id='" + CrtDiv + "' class='well'>" + TextDiv.innerHTML + "<a href=javascript:CloseFilter('" + CrtDiv + "','" + dval + "','" + vtype + "','" + vid + "','" + strSelName + "')><span>X</span></a>" + "</div>")
                            //alert(ClickDiv.value)
                    }
                }
            }
        }

        if (vtype == "select-one") {
            //alert(ClickDiv.id)
            if (ClickDiv != null) {
                selecteedIndex = ClickDiv.selectedIndex
                    //alert(selecteedIndex)
                    //selecteedIndexText = ClickDiv[selecteedIndex].text
                selecteedIndexText = $("#" + vid + " option:selected").text();
                //$("#yourdropdownid option:selected").text();

                if (document.getElementById(CrtDiv)) {
                    $("#" + CrtDiv).remove()
                }


                if (ClickDiv.value != "0") {
                    //alert()
                    $("#" + appendDiv).append("<div id='" + CrtDiv + "' class='well'>" + selecteedIndexText + "<a href=javascript:CloseFilter('" + CrtDiv + "','" + dval + "','" + vtype + "','" + vid + "','" + strSelName + "')><span>X</span></a>" + "</div>")
                        //alert(ClickDiv.value)
                }
            }


        }

        if (vtype == "checkbox") {
            if (document.getElementById(CrtDiv) && vins == 1) {
                $("#" + CrtDiv).remove()
            }
            var chklen = $("input[name='" + vname + "']").length
            var i;
            var chkName = "";
            for (i = 0; i < chklen; i++) {
                if (document.getElementById(vname + i).checked == true) {
                    chkName = chkName + "," + document.getElementById("sp" + vname + i).innerHTML
                }
            }
            chkName = chkName.substr(1)
            if (chkName != "") {
                $("#" + appendDiv).append("<div id='" + CrtDiv + "' class='well'>" + chkName + "<a href=javascript:CloseFilter('" + CrtDiv + "'," + dval + ",'" + vtype + "','" + vid + "','" + strSelName + "')><span>X</span></a>" + "</div>")
            }
        }
        //alert(vtype)
        if (vtype == "text") {

            if (document.getElementById(CrtDiv)) {
                $("#" + CrtDiv).remove()
            }
            if (ClickDiv.value != "") {
                $("#" + appendDiv).append("<div id='" + CrtDiv + "' class='well'>" + ClickDiv.value + "<a href=javascript:CloseFilter('" + CrtDiv + "'," + dval + ",'" + vtype + "','" + vid + "','" + strSelName + "')><span>X</span></a>" + "</div>")
            }
        }
    }

    if (vtype == "hidden") {
        //CrtDiv = "crtMatchPosting"
        /*
        if (vid == "qOT")
        {
        	if (getversion == "bng")
        	{
        		ClickDiv.value = "<span style='font-size:15px'>à¦¸à¦°à¦•à¦¾à¦°à§€</span>"
        	}
        	else
        	{
        		ClickDiv.value = "Government"
        	}
        }
        */
        varTime = ""
        if (vid == "MPostings") {
            if (getversion == "bng") {
                //alert(document.getElementById("tMPostings").value);
                if (document.getElementById("tMPostings")) {
                    varTime = "<span style='font-size:15px'>" + document.getElementById("tMPostings").value + "</span>"
                }
            }
        }

        if (document.getElementById(CrtDiv)) {
            $("#" + CrtDiv).remove()
        }
        if (varTime == "") {
            varTime = ClickDiv.value
        } else {
            varTime = varTime
        }
        if (ClickDiv.value != "") {
            $("#" + appendDiv).append("<div id='" + CrtDiv + "' class='well'>" + varTime + "<a href=javascript:CloseFilter('" + CrtDiv + "'," + dval + ",'" + vtype + "','" + vid + "','" + strSelName + "')><span>X</span></a>" + "</div>")
        }
    }
    //clearDiv()

    if (callAjax == 0) {
        //console.log(ClickDiv)
        //showSearchedResult(true);
        if (ClickDiv.value != "") {
            if (getversion == "bng") {
                showSearchedResultBn(true);
            } else {
                showSearchedResult(true);
            }
        }
    }

    SaveFilterEnable();


}

function CloseFilter(vid, vval, vtype, selctedDiv, selectedName) {

    var vv = vid.substr(3)
    if (vtype == "radio" || vtype == "checkbox" || vtype == "select-one") {
        if (vtype == "radio") {
            if (document.getElementById("lb" + selctedDiv)) {
                document.getElementById("lb" + selctedDiv).className = "label_radio r_off"
            }
            if (document.getElementById(selctedDiv)) {
                document.getElementById(selctedDiv).checked = false
            }
            if (document.getElementById("lb" + vv + vval)) {
                document.getElementById("lb" + vv + vval).className = "label_radio r_on"
            }
            if (document.getElementById(vv + vval)) {
                document.getElementById(vv + vval).checked = true
            }

            //console.log("az"+vid.indexOf("LcationList"))
            if (vid.indexOf("LcationList") > 0) {

                for (i = 1; i < 10; i++) {
                    ti = i

                    if (document.getElementById("lbDistrict" + ti)) {
                        document.getElementById("lbDistrict" + ti).className = "label_radio r_off"
                    }
                    if (document.getElementById("District" + ti)) {
                        document.getElementById("District" + ti).selected = false
                    }
                    if (ti == 1) {
                        if (document.getElementById("subDistrict" + ti)) {
                            document.getElementById("subDistrict" + ti).style.display = "block"
                        }
                    } else {
                        if (document.getElementById("subDistrict" + ti)) {
                            document.getElementById("subDistrict" + ti).style.display = "none"
                        }
                    }

                    fillDistrictandCountry(1, false)
                }
                if (document.getElementById("subCountry1")) {
                    document.getElementById("subCountry1").style.display = "none"
                }

                document.getElementById("lbCountry0").className = "label_radio r_on"
                document.getElementById("Country0").checked = true
                document.getElementById("lbCountry1").className = "label_radio r_off"
                document.getElementById("Country1").checked = false

            }
        }
        if (vtype == "select-one") {
            $('#' + selctedDiv + ' option[value="' + vval + '"]').prop('selected', true);
        }
        if (vtype == "checkbox") {
            var chklen = $("input[name='" + selectedName + "']").length
            var i;
            var chkName = "";
            for (i = 0; i < chklen; i++) {
                if (document.getElementById(selectedName + i)) {
                    document.getElementById(selectedName + i).checked = false
                }
                if (document.getElementById("lb" + selectedName + i)) {
                    //document.getElementById("lb" + selectedName + i).className = "label_check c_off"
                }

            }
        }
    }

    if (vtype == "text" || vtype == "hidden") {
        $("#" + selctedDiv).val("");
    }

    if (vid == "crtGender") {
        document.getElementById("qGender1").checked = false
            //document.getElementById("lbqGender1").className = "label_check c_off"
        document.getElementById("qGender2").checked = false
            //document.getElementById("lbqGender2").className = "label_check c_off"
        document.getElementById("qGender3").checked = false
            //document.getElementById("lbqGender3").className = "label_check c_off"

        if (document.getElementById("qGender0")) {
            document.getElementById("qGender0").checked = true
        }
        if (document.getElementById("lbqGender0")) {
            document.getElementById("lbqGender0").className = "label_radio r_on"
        }
    }

    $("#" + vid).remove()
    clearDiv()
    if (getversion == "") {
        showSearchedResult(true)
    } else {
        showSearchedResultBn(true)
    }

    SaveFilterEnable()

}

function clearDiv() {
    if ($("#filterList").html().trim() == "") {
        //$("#FillFilter").hide();
        //$("#filterList").html() = "";
        document.getElementById("filterList").innerHTML = "<div id='empty_div' class='well_empty'>&nbsp;<div>";
    }
}

function allchecked() {
    callAjax = 1
    if (IsLoadFilter("fcat", $("input[name='fcat']:checked").val()) == true) {
        categoty = $("input[name='fcat']").length
            //alert(categoty)
        for (i = 0; i <= 100; i++) {
            ti = i
            if (i == categoty - 1) {
                ti = -10
            }
            if (i == 0) {
                ti = -1
            }
            if (i == 100) {
                ti = -11
            }
            if (document.getElementById("fcat" + ti)) {
                createContent("fcat" + ti, -1, 'fcat', 'radio', 0, "filterList")
            }
        }
    }
    if (IsLoadFilter("iCat", $("input[name='iCat']:checked").val()) == true) {
        OrganizationType = $("input[name='iCat']").length
        for (i = 0; i < OrganizationType; i++) {
            ti = i
            if (i == OrganizationType - 1) {
                ti = -10
            }
            if (i == 0) {
                ti = -1
            }
            createContent("iCat" + ti, 0, 'iCat', 'radio', 0, "filterList")
        }
    }
    if (IsLoadFilter("qJobNature", $("#qJobNature").val()) == true) {
        createContent("qJobNature", 0, 'qJobNature', 'select-one', 0, "filterList")
    }
    if (IsLoadFilter("qJobLevel", $("#qJobLevel").val()) == true) {
        createContent("qJobLevel", 0, 'qJobLevel', 'select-one', 0, "filterList")
    }



    if (IsLoadFilter("qPosted", $("input[name='qPosted']:checked").val()) == true) {
        posted = $("input[name='qPosted']").length
        for (i = 0; i < posted; i++) {
            ti = i
            createContent("qPosted" + ti, 0, 'qPosted', 'radio', 0, "filterList")
        }
    }
    if (IsLoadFilter("qDeadline", $("input[name='qDeadline']:checked").val()) == true) {
        Deadline = $("input[name='qDeadline']").length
        for (i = 0; i < Deadline; i++) {
            ti = i
            createContent("qDeadline" + ti, 0, 'qDeadline', 'radio', 0, "filterList")
        }
    }

    if (IsLoadFilter("txtsearch", $("#txtsearch").val()) == true) {
        strkeyWord = $("#txtsearch").val()
        if (strkeyWord != "") {
            createContent("txtsearch", 0, 'txtsearch', 'text', 0, "filterList")
        }
    }

    if (IsLoadFilter("LcationList", $("input[name='LcationList']:checked").val()) == true) {
        strLocation = $("input[name='LcationList']").length;
        for (i = 0; i <= 64; i++) {
            ti = i
            createContent("LcationList" + ti, 0, 'LcationList', 'radio', 0, "filterList")
        }
        for (i = 101; i < 322; i++) {
            ti = i
            createContent("LcationList" + ti, 0, 'LcationList', 'radio', 0, "filterList")
        }
        for (i = 80; i < 90; i++) {
            ti = i
            createContent("LcationList" + ti, 0, 'LcationList', 'radio', 0, "filterList")
        }
    }


    if (IsLoadFilter("qExp", $("#qExp").val()) == true) {
        createContent("qExp", 0, 'qExp', 'select-one', 0, "filterList")
    }
    if (IsLoadFilter("qAge", $("#qAge").val()) == true) {
        createContent("qAge", 0, 'qAge', 'select-one', 0, "filterList")
    }

    if (IsLoadFilter("qGender", $("input[name='qGender']:checked").val()) == true) {
        strGender = $("input[name='qGender']").length;
        for (i = 0; i < strGender; i++) {
            ti = i
            createContent("qGender" + ti, 0, 'qGender', 'radio', 0, "filterList")
        }
    }

    if (IsLoadFilter("qOT", $("input[name='qOT']:checked").val()) == true) {
        strOrgType = $("input[name='qOT']").length
        for (i = 0; i < strOrgType; i++) {
            ti = i
            createContent("qOT" + ti, 0, 'qOT', 'radio', 0, "filterList")
        }
    }
    if (IsLoadFilter("qJobSpecialSkill", $("input[name='qJobSpecialSkill']:checked").val()) == true) {
        strSpecialSkill = $("input[name='qJobSpecialSkill']").length
        for (i = 0; i < strSpecialSkill; i++) {
            ti = i
            createContent("qJobSpecialSkill" + ti, -1, 'qJobSpecialSkill', 'radio', -1, "filterList")
        }
    }

    if (IsLoadFilter("Newspaper", $("input[name='Newspaper']:checked").val()) == true) {
        Newspaper = $("input[name='Newspaper']").length
        for (i = 0; i < Newspaper; i++) {
            ti = i
            if (i == Newspaper - 1) {
                ti = -10
            }
            if (i == 0) {
                ti = -1
            }
            createContent("Newspaper" + ti, -1, 'Newspaper', 'radio', 0, "filterList")
        }
    }

    if (IsLoadFilter("qJobSpecialSkill", $("input[name='qJobSpecialSkill']:checked").val()) == true) {
        specialSkill = $("input[name='qJobSpecialSkill']").length;
        //console.log(specialSkill)
        for (i = -1; i < specialSkill; i++) {
            ti = i
            createContent("qJobSpecialSkill" + ti, -1, 'qJobSpecialSkill', 'radio', 0, "filterList");
        }
    }
    //Work From Home
    if (IsLoadFilter("qWorkstation", $("input[name='qWorkstation']:checked").val()) == true) {
        strWorkstation = $("input[name='qWorkstation']").length;
        for (i = 0; i < strWorkstation; i++) {
            ti = i
            createContent("qWorkstation" + ti, 0, 'qWorkstation', 'checkbox', 0, "filterList")
        }
    }
    //Retired Army
    if (IsLoadFilter("qRetiredArmy", $("input[name='qRetiredArmy']:checked").val()) == true) {
        strRetiredArmy = $("input[name='qRetiredArmy']").length;
        for (i = 0; i < strRetiredArmy; i++) {
            ti = i
            createContent("qRetiredArmy" + ti, 0, 'qRetiredArmy', 'checkbox', 0, "filterList")
        }
    }
    //PWD
    if (IsLoadFilter("qPWD", $("input[name='qPWD']:checked").val()) == true) {
        strPWD = $("input[name='qPWD']").length;
        for (i = 0; i < strPWD; i++) {
            ti = i
            createContent("qPWD" + ti, 0, 'qPWD', 'checkbox', 0, "filterList")
        }
    }

    callAjax = 0
    SaveFilterEnable()
}

function FillLocation(LocationType) {
    strDistrict = ""
    targetDiv = document.getElementById("LocationName")
    strDistrict = "<label id='lbLocationName0' class='label_radio r_on' for='LocationName0'><input id='LocationName0' type='radio' checked value='0' name='LocationName'><span id='spLocationName0'>Any</span></label>"
    if (targetDiv) {
        if (LocationType == "Country") {
            for (i = 0; i < arrCountryList.length; i++) {
                strDistrict = strDistrict + "<label id='lbLocationName" + (i + 1) + "' class='label_radio r_off' for='LocationName" + (i + 1) + "'><input id='LocationName" + (i + 1) + "' type='radio' value='" + arrCountryList[i][0] + "' name='LocationName'><span id='spLocationName" + (i + 1) + "'>" + arrCountryList[i][1] + "</span></label>"
            }
        } else {
            for (i = 0; i < arrDistrictList.length; i++) {
                strDistrict = strDistrict + "<label id='lbLocationName" + (i + 1) + "' class='label_radio r_off' for='LocationName" + (i + 1) + "'><input id='LocationName" + (i + 1) + "' type='radio' value='" + arrDistrictList[i][0] + "' name='LocationName'><span id='spLocationName" + (i + 1) + "'>" + arrDistrictList[i][1] + "</span></label>"
            }
        }

    }
    targetDiv.innerHTML = strDistrict
}

function setLocation(dis, cun) {
    //console.log(dis+"--"+cun)
    $("#lb" + dis).css({ "display": "None" });
    $("#lb" + dis + "List").css({ "display": "None" });
    $("#lb" + cun).css({ "display": "block" });
    $("#lb" + cun + "List").css({ "display": "block" });
}



function setOrderAction(v) {
    val = document.getElementById(v).value
    vid = v.substr(3)
    document.getElementById("hid" + vid).value = val
    showSearchedResult(true)
}

function GoPage(v) {
    url = document.getElementById("frmJobSearch").action;
    varCat = $("input[name='fcat']:checked").val()
    if (varCat == undefined) {
        varCat = "";
    }
    tmpUrl = ""
    if (varCat != "") {
        tmpUrl = url + "?fcatId=" + varCat;
    }

    if (getversion == "bng") {
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        RandomNumber = ""
        for (var i = 0; i < 6; i++) {
            RandomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        if (tmpUrl != "") {
            tmpUrl = tmpUrl + "&var=" + RandomNumber;
        } else {
            tmpUrl = url + "?var=" + RandomNumber;
        }

    } else {
        if (tmpUrl == "") {
            tmpUrl = url;
        }

    }
    document.getElementById("pg").value = v;
    document.getElementById("frmJobSearch").action = tmpUrl;
    document.getElementById("hClickLog").value = "1";
    document.getElementById("frmJobSearch").submit();
}

function GoPage_ver1(v) {
    url = document.getElementById("frmJobSearch").action;
    varCat = $("input[name='fcat']:checked").val()
    if (varCat == undefined) {
        varCat = "";
    }
    tmpUrl = ""
    if (varCat != "") {
        tmpUrl = url + "?fcatId=" + varCat;
    }

    if (getversion == "bng") {
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        RandomNumber = ""
        for (var i = 0; i < 6; i++) {
            RandomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        if (tmpUrl != "") {
            tmpUrl = tmpUrl + "&var=" + RandomNumber;
        } else {
            tmpUrl = url + "?var=" + RandomNumber;
        }

    } else {
        if (tmpUrl == "") {
            tmpUrl = url;
        }

    }
    document.getElementById("pg").value = v;
    document.getElementById("frmJobSearch").action = tmpUrl;
    document.getElementById("frmJobSearch").submit()
}

function SubmitPage() {
    v = document.getElementById("pg").value
        //v = parseInt(v) +1
    GoPage(v)
}

function popbox() {}
var ie8plus;
var xmlHttp

function GetXmlHttpObject__() {
    xmlHttp = null;

    if ($.browser.msie && window.XDomainRequest) {
        xmlHttp = new XDomainRequest();
        ie8plus = true;
    } else {
        ie8plus = false;
        try {
            // Firefox, Opera 8.0+, Safari , chrome

            xmlHttp = new XMLHttpRequest();
            //alert( 235 )
        } catch (e) {
            // Internet Explorer
            try {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
                //alert(243)
            } catch (e) {
                try {
                    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                    //alert(250)
                } catch (e) {
                    //alert(254 + e)
                }
            }
        }
    }

    return xmlHttp;
} //GetXmlHttpObject()

function GetXmlHttpObject() {
    xmlHttp = null;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlHttp;
}

function stateChanged() {
    var strResponseText;
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {

            if (LoadType == "JobLista") {
                strResponseText = xmlHttp.responseText
                document.getElementById("jobList").innerHTML = strResponseText;



                /*
                $("#owl-bottom").owlCarousel({
                    autoPlay: 8000,
                    items: 3,
                    //lazyLoad : true,
                    autoWidth: true,
                    scrollPerPage: true,
                    //itemsDesktop: [1920, 5],
                    itemsTablet: [768, 3],
                    itemsMobile: [479, 1],
                    itemsDesktopSmall: [1280, 3],
                    //itemsCustom: [1366, 4],
                    pagination: false,
                    navigation: true,
                    navigationText: [
                        "<img src='//www.ajkerdeal.com/Images/NewSite/Previous-Arrow.png' width='18'/>",
                        "<img src='//www.ajkerdeal.com/Images/NewSite/Next-Arrow.png' width='18' />"
                    ],
                    //Call beforeInit callback, elem parameter point to $("#owl-demo")
                    beforeInit: function(elem) {
                        //random(elem);
                    }

                });
                */


                $('#training-slider').carousel()
                    /*
                    if (strResponseText.indexOf("view details") > 0)
                    {
                    	
                    }
                    else
                    {
                    	document.getElementById("jobList").innerHTML= "<div class='jobs_top_ins_text_wrapper'><div class='jobs_top_ins_text'>Please click at the respective job title to view details</div></div>"
                    	document.getElementById("jobList").innerHTML=  document.getElementById("jobList").innerHTML+"<div class='norm_jobs_wrapper' align='center' style='padding:10px 0px 10px 0px; font-size:15px; font-weight:bold '> No Job Found <br></div>"
                    	document.getElementById("jobList").style.minHeight = "100px";
                    }
                    */
                if (document.getElementById("bottomPagging")) {
                    document.getElementById("topPagging").innerHTML = document.getElementById("bottomPagging").innerHTML
                } else {
                    if ($("#ver").val() == "bn") {
                        document.getElementById("topPagging").innerHTML = "<ul><li>à¦ªà¦¾à¦¤à¦¾ :</li><li><a class='currentpage'>à§§</a></li></ul>"
                    } else {
                        document.getElementById("topPagging").innerHTML = "<ul><li>Pages :</li><li><a class='currentpage'>1</a></li></ul>"
                    }
                }

                if (document.getElementById("bottomTotalRecord")) {
                    if (document.getElementById("bottomTotalRecord").value == "") {
                        document.getElementById("TopTotalRecord").innerHTML = 0
                            //document.getElementById("TopTotalRecord").style.backgroundColor="transparent"
                    } else {
                        document.getElementById("TopTotalRecord").innerHTML = document.getElementById("bottomTotalRecord").value
                            //document.getElementById("TopTotalRecord").style.backgroundColor="#69aa44"
                    }
                } else {
                    document.getElementById("TopTotalRecord").innerHTML = 0
                }

                if (document.getElementById("bottomBNgEngJobs")) {
                    document.getElementById("bngEngJobs").innerHTML = "jobs matching your search criteria<a href=javascript:switchSearch('abngEngJobs')> <span id='abngEngJobs'  style='color:#063851; font-weight:bold; cursor:pointer;'>(" + document.getElementById("bottomBNgEngJobs").value + ")</span></a>"
                        //document.getElementById("abngEngJobs").style.backgroundColor="#69aa44"
                        //document.getElementById("abngEngJobs").style.color = "#063851"
                } else {
                    if (getversion == "bng") {
                        document.getElementById("bngEngJobs").innerHTML = "<span style='font-size:15px'> à¦Ÿà¦¿ à¦šà¦¾à¦•à¦°à¦¿ à¦ªà¦¾à¦“à¦¯à¦¼à¦¾ à¦—à¦¿à¦¯à¦¼à§‡à¦›à§‡</span>"
                    } else {

                        if (parseInt(document.getElementById("bottomTotalRecord").value) > 1) {
                            document.getElementById("bngEngJobs").innerHTML = "jobs matching your search criteria"
                        } else {
                            document.getElementById("bngEngJobs").innerHTML = "job matching your search criteria"
                        }
                    }

                    //document.getElementById("abngEngJobs").style.backgroundColor=""
                    //document.getElementById("abngEngJobs").style.color = ""
                }
                //document.getElementById("bngEngJobs").innerHTML=""


                //rotateTraining(true);
                RightAds()
                    //alert(document.getElementById("jobList").innerHTML)
                    /*
                    var pageOptions = {
                        "pubId": "pub-5130888087776673", // Make sure this the correct client ID!
                        "query": "jobs",
                        "adPage": 1
                    };

                    var adblock1 = {
                        "container": "afscontainer1",
                        "width": "100%",
                        "number": 2
                    };
                    */
                if (document.getElementById("SetAdsFooterQuery")) {
                    pageOptions.query = document.getElementById("SetAdsFooterQuery").value;
                    _googCsa('ads', pageOptions, adblock1);
                    console.log(pageOptions.query)
                }

            }
            if (LoadType == "TrainingBanner") {

                strResponseText = xmlHttp.responseText
                document.getElementById("JobListing_Training").innerHTML = strResponseText;
                //BottomAds()
                //RightAds()

            }
            if (LoadType == "BottomGB") {
                strResponseText = xmlHttp.responseText
                document.getElementById("BottomAds").innerHTML = strResponseText;
            }
            if (LoadType == "RightAds") {

                strResponseText = xmlHttp.responseText
                strCat = $("input[name='fcat']:checked").val()


                allbannnershow = 0
                if (strCat == "8") {
                    allbannnershow = 1
                }

                if (strCat == "18") //||  strCat == "12"
                {
                    allbannnershow = 1
                }

                if (allbannnershow == 0) {
                    document.getElementById("jobsarchRightBanner").innerHTML = strResponseText;
                } else {
                    document.getElementById("jobsarchRightBanner").innerHTML = "";
                }

                if (strCat == "18") //|| strCat == "12"
                {
                    document.getElementById("jobsarchRightBottomBannerBottom").innerHTML = strResponseText;
                } else {
                    document.getElementById("jobsarchRightBottomBannerBottom").innerHTML = "";
                }

                if (strCat == "8") {
                    document.getElementById("jobsarchRightBottomBanner").innerHTML = strResponseText;
                    document.getElementById("bottomGB").style.display = "none"
                } else {
                    document.getElementById("jobsarchRightBottomBanner").innerHTML = "";
                    document.getElementById("bottomGB").style.display = ""
                }


                //if (strCat == "8")
                //					{
                //						document.getElementById("jobsarchRightBottomBanner").innerHTML="";
                //						document.getElementById("bottomGB").style.display = ""
                //					}

                if (strCat == "8" || strCat == "6" || strCat == "2") // || strCat == "12"//|| for gp strCat == "1" || strCat == "5" || strCat == "9" || strCat == "7"
                {
                    document.getElementById("bottomGB").style.display = "none"
                } else {
                    document.getElementById("bottomGB").style.display = ""
                }

                if (strCat == "5" || strCat == "12" || strCat == "4" || strCat == "3") // || strCat == "12"//|| for gp strCat == "1" || strCat == "5" || strCat == "9" || strCat == "7"
                {
                    document.getElementById("topGBAds").style.display = "none"
                } else {
                    document.getElementById("topGBAds").style.display = ""
                }



                if (document.getElementById('aswift_0')) {
                    //document.getElementById('aswift_0').contentWindow.location.reload(true);
                }

                var isAdsShow = $("#hidAdsShow").val();

                if (isAdsShow != "0") {
                    if (parseInt(cat) == 2 || parseInt(cat) == 9) {
                        googletag.cmd.push(function() {

                            googletag.pubads().setTargeting('fcatId', "'" + cat + "'");

                            googletag.pubads().enableSingleRequest();
                            googletag.enableServices();
                        });
                        googletag.pubads().setTargeting('fcatId', "'" + cat + "'");
                    }
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1554808719627-0'); });
                }
                //TrainingBanner()
            }
        } else {
            //alert("Some problem has been occurred. Please try later."); 
        }
        //Affected Elements Redefine
        AccessibilityAffectedElementsRedefine();
    }
}

function LoadStatus(LoadType) //(strStatus, StatusNumber)
{
    strLayer = "<div align='left' style='width:20px; margin-top:-3px;'>"
    strLayer += "<span class='style2'><img src='//jobs.bdjobs.com/images/loading_Horizontal_animated.gif' width='200' height='20' /></span> "
    strLayer += "</div>"
    if (LoadType == "JobLista") {
        document.getElementById("bngEngJobs").innerHTML = strLayer
    }
    if (LoadType == "TrainingBanner") {
        //document.getElementById("JobListing_Training").innerHTML=strLayer
    }
    if (LoadType == "BottomGB") {
        //document.getElementById("BottomAds").innerHTML=strLayer
    }
    if (LoadType == "RightAds") {
        //document.getElementById("RightAds").innerHTML=strLayer
    }
}

function showSearchedResult(ButtonClicked) {
    //console.log("a")
    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        window.location.href = gURL;
        return;
    }

    url = "joblisting_common_init.asp";
    setURLString()
    LoadType = "JobLista"
    LoadStatus(LoadType); //("Loading", 1)

    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("POST", url, true);

    if (ie8plus == true) {
        xmlhttp.send();
    } else {
        xmlHttp.setRequestHeader("Content-length", url.length);

        xmlHttp.send(url);
    }
}

function showSearchedResultBn(ButtonClicked) {


    xmlHttp = GetXmlHttpObject()
    if (xmlHttp == null) {
        window.location.href = gURL;
        return;
    }

    url = "joblisting_Common_initbn.asp";
    setURLString()
    LoadType = "JobLista"
    LoadStatus(LoadType); //("Loading", 1)

    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("POST", url, true);

    if (ie8plus == true) {
        xmlhttp.send();
        //alert(1)
    } else {
        xmlHttp.setRequestHeader("Content-length", url.length); //This line is required for Firefox, only when using POST method

        xmlHttp.send(url);
    }
}

function gaCall(level, val, SearchBy) {
    strPageName = "/jobsearch.asp"
    if (getversion == "bng") {
        strPageName = "/bn/jobsearchbn.asp"
    }

    if (val == undefined) {
        val = ""
    }

    if (val == "Dhaka") {
        val = 82;
    }
    if (val == "Chittagong") {
        val = 81;
    }
    if (val == "Rajshahi") {
        val = 84;
    }
    if (val == "Khulna") {
        val = 83;
    }
    if (val == "Sylhet") {
        val = 86;
    }
    if (val == "Rangpur") {
        val = 85;
    }
    if (val == "Barisal") {
        val = 80;
    }
    if (val == "FullTime") {
        val = 1;
    }
    if (val == "PartTime") {
        val = 2;
    }
    if (val == "Contract") {
        val = 3;
    }
    if (val == "Entry") {
        val = 1;
    }
    if (val == "Mid") {
        val = 2;
    }
    if (val == "Top") {
        val = 3;
    }

    if (val != "") {
        if (level.indexOf("search") >= 0 || level == "MPostings") {
            gaLevel = document.getElementById(level).value;
        } else {
            if (level == "qGender") {
                levelGender = "";

                if (document.getElementById("qGender1").checked == true) {
                    if (getversion == "bng") {
                        levelGender = levelGender + ",à¦¶à§à¦§à§à¦®à¦¾à¦¤à§à¦° à¦ªà§à¦°à§à¦·"
                    } else {
                        levelGender = levelGender + ",Male only"
                    }
                }
                if (document.getElementById("qGender2").checked == true) {
                    if (getversion == "bng") {
                        levelGender = levelGender + ",à¦¶à§à¦§à§à¦®à¦¾à¦¤à§à¦° à¦®à¦¹à¦¿à¦²à¦¾"
                    } else {
                        levelGender = levelGender + ",Female only"
                    }

                }
                if (document.getElementById("qGender3").checked == true) {
                    if (getversion == "bng") {
                        levelGender = ",à¦…à¦¨à§à¦¯à¦¾à¦¨à§à¦¯"
                    } else {
                        levelGender = ",Others"
                    }

                }
                gaLevel = levelGender.substr(1);

            } else {



                if (document.getElementById("sp" + level + val)) {
                    gaLevel = document.getElementById("sp" + level + val).innerHTML;
                } else {
                    gaLevel = ""
                }
            }
        }

        //if ( gaLevel != "Any" && gaLevel != "All Jobs" && gaLevel.indexOf("à¦¸à¦•à¦² à¦šà¦¾à¦•à¦°à¦¿") == 0 && gaLevel.indexOf("à¦¯à§‡à¦•à§‹à¦¨ à¦ªà¦°à¦¿à¦¸à¦°") == 0 && gaLevel.indexOf("à¦¯à§‡à¦•à§‹à¦¨ à¦¦à¦¿à¦¨") == 0 && gaLevel.indexOf("à¦¯à§‡à¦•à§‹à¦¨ à¦¶à¦¿à¦²à§à¦ª") == 0 && gaLevel.indexOf("à¦¯à§‡à¦•à§‹à¦¨ à¦§à¦°à¦£à§‡à¦°") == 0 && gaLevel.indexOf("à¦¯à§‡à¦•à§‹à¦¨ à¦²à§‡à¦­à§‡à¦²") == 0)
        if (gaLevel != "Any" && gaLevel != "All Jobs" && gaLevel != "") {
            //if(SearchBy=="Keyword")
            //	{
            //		ga('send', 'event', SearchBy, 'click', gaLevel, 1);
            //	}
            //ga('send', 'event', SearchBy, 'click', gaLevel, 1);
            //console.log(level+"--"+gaLevel)
        }
    }
}

function setURLString() {


    strCat = $("input[name='fcat']:checked").val()
    CatName = $("input[name='fcat']:checked").parent().text()
    if (CatName == "All Category" || CatName == "à¦¸à¦•à¦² à¦•à§à¦¯à¦¾à¦Ÿà¦¾à¦—à¦°à¦¿") {
        if (getversion == "bng") {
            CatName = "à¦œà¦¬ à¦¸à¦¾à¦°à§à¦š"
        } else {
            CatName = "Job Search"
        }
    }
    document.title = CatName + " || Bdjobs.com "
    gaCall("fcat", strCat, "Category");

    //strOrganization= $("input[name='qOT']:checked").val()
    //console.log(strOrganization)'
    strOrganization = $("input[name='iCat']:checked").val()
    gaCall("iCat", strOrganization, "Industry");
    //console.log(strOrganization)'

    strJobNature = $("#qJobNature").val()
    gaCall("qJobNature", strJobNature, "Job Nature");
    //console.log(strJobNature)


    //strJobLevelVal = ""
    //strJobLevel = $("input[name='qJobNature']:checked").val()
    //// strJobLevelVal =  strJobLevelVal + ","+ this.value
    //});
    //strJobLevelVal = $("input[name='qJobLevel']:checked").val()
    strJobLevelVal = $("#qJobLevel").val()
    gaCall("qJobLevel", strJobLevelVal, "Job Level");
    //strJobLevelVal = strJobLevelVal.substr(1)
    //console.log(strJobLevelVal)

    strLocation = $("input[name='LcationList']:checked").val()
        //console.log(strLocation)
    if (strLocation == undefined) {
        strLocation = ""
    }
    gaCall("LcationList", strLocation, "Location");
    //console.log(strLocation)

    strPosted = $("input[name='qPosted']:checked").val()
    gaCall("qPosted", strPosted, "Posted within");
    //console.log(strPosted)

    strDeadline = $("input[name='qDeadline']:checked").val()
    gaCall("qDeadline", strDeadline, "Deadline");
    //console.log(strDeadline)

    strKeyWord = $("input[name='txtsearch']").val()
    strKeyWord = strKeyWord.replace("'", "");
    strKeyWord = strKeyWord.replace('"', '');
    strKeyWord = strKeyWord.replace('=', '');

    arrSpecialChr = strKeyWord.split('&');
    for (i = 0; i <= arrSpecialChr.length; i++) {
        strKeyWord = strKeyWord.replace('&', '');
    }





    gaCall("txtsearch", strKeyWord, "Keyword");
    //console.log(strKeyWord)

    strOrder = $("input[name='hidOrder']").val()


    strExpRange = $("#qExp").val()
    gaCall("qExp", strExpRange, "Exp");

    strAgeRange = $("#qAge").val()
    gaCall("qAge", strAgeRange, "Age");
    //console.log(strAgeRange)

    strGender = $("input[name='qGender']:checked").val()
    if (strGender == undefined) {
        strGender = ""
    }
    strGender = ""
    $("input[name='qGender']:checked").each(function() {
        //console.log()
        strGender = strGender + "," + this.value
    });
    strGender = strGender.substr(1)
    strGenderB = $("input[name='qGenderB']:checked").val()
    if (strGenderB == undefined) {
        strGenderB = ""
    }

    if (strGender != "") {
        if (strGenderB != "") {
            strGender = strGender + "," + strGenderB
        }
        gaCall("qGender", strGender, "Gender");

    }

    strMDate = $("input[name='MPostings']").val()
    gaCall("MPostings", strMDate, "Match Jobpostings");
    strver = $("input[name='ver']").val()
    strOT = ""
    strOT = $("input[name='qOT']:checked").val()
        /*
        if (strOT != "")
        {
        	strOT = 1
        }
        */
    gaCall("qOT", strOT, "Organization");

    strNewspaper = $("input[name='Newspaper']:checked").val()
    if (strNewspaper == undefined) {
        strNewspaper = ""
    }
    gaCall("Newspaper", strNewspaper, "Newspaper");

    strSpecialSkill = $("input[name='qJobSpecialSkill']:checked").val()

    //console.log(strSpecialSkill)
    if (parseInt(strSpecialSkill) > -1) {

        gaCall("qJobSpecialSkill", strSpecialSkill, "SpecialSkill");
        //console.log("c")

    } else {
        strSpecialSkill = ""
    }
    //Work From Home
    strWorkstation = $("input[name='qWorkstation']:checked").val()
    if (strWorkstation == undefined) {
        strWorkstation = ""
    }

    //Retired Army
    strRetiredArmy = $("input[name='qRetiredArmy']:checked").val()
    if (strRetiredArmy == undefined) {
        strRetiredArmy = ""
    }
    strPWD = $("input[name='qPWD']:checked").val()
    if (strPWD == undefined) {
        strPWD = ""
    }
    console.log(strPWD) 

    url = url + "?fcatId=" + strCat + "&locationId=" + strLocation + "&iCat=" + strOrganization + "&JobType=" + strJobNature + "&JobLevel=" + strJobLevelVal + "&JobPosting=" + strPosted + "&JobDeadline=" + strDeadline + "&JobKeyword=" + strKeyWord + "&ListOrder=" + strOrder + "&Exp=" + strExpRange + "&Age=" + strAgeRange + "&Gender=" + strGender + "&GenderB=" + strGenderB + "&MDate=" + strMDate + "&ver=" + strver + "&OrgType=" + strOT + "&news=" + strNewspaper + "&SpecialSkill=" + strSpecialSkill + "&RetiredArmy=" + strRetiredArmy + "&Workstation=" + strWorkstation;
    url = url + "&pwd=" + strPWD;

}

function TrainingBanner() {
    xmlHttp = GetXmlHttpObject()
        //alert(xmlHttp);
    if (xmlHttp == null) {
        //alert ("Your browser does not support AJAX!");	
        //alert(gURL);
        window.location.href = gURL;
        return;
    }

    url = "jobtrainingads.asp";
    LoadType = "TrainingBanner"
    LoadStatus(LoadType); //("Loading", 1)

    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("GET", url, true);


    xmlHttp.setRequestHeader("Content-length", url.length); //This line is required for Firefox, only when using POST method

    xmlHttp.send(url);

}

function RightAds() {

    xmlHttp = GetXmlHttpObject()
        //alert(xmlHttp);
    if (xmlHttp == null) {
        //alert ("Your browser does not support AJAX!");	
        //alert(gURL);
        window.location.href = gURL;
        return;
    }

    cat = $("input[name='fcat']:checked").val()

    url = "//jobs.bdjobs.com/jobsearch_right_banner.asp?cat=" + cat;
    LoadType = "RightAds"
    LoadStatus(LoadType); //("Loading", 1)

    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("GET", url, true);


    xmlHttp.setRequestHeader("Content-length", url.length); //This line is required for Firefox, only when using POST method

    xmlHttp.send(url);



}

function BottomAds() {

    xmlHttp = GetXmlHttpObject()
        //alert(xmlHttp);
    if (xmlHttp == null) {
        //alert ("Your browser does not support AJAX!");	
        //alert(gURL);
        window.location.href = gURL;
        return;
    }

    url = "jobsearch_bottomgb.asp";
    LoadType = "BottomGB"
    LoadStatus(LoadType); //("Loading", 1)

    xmlHttp.onreadystatechange = stateChanged;
    xmlHttp.open("GET", url, true);


    xmlHttp.setRequestHeader("Content-length", url.length); //This line is required for Firefox, only when using POST method

    xmlHttp.send(url);
}

function setDestict(vid, vval) {
    //alert(vid)
    document.getElementById("Country1").checked = false;
    //document.getElementById("lbCountry1").className = "label_radio r_off"
    document.getElementById("Country0").checked = true;
    //document.getElementById("lbCountry0").className = "label_radio r_on"
    fillDistrictandCountry(vval, true)
}

function setCountry(vid, val) {

    for (i = 1; i <= 8; i++) {
        //console.log("District"+i)
        document.getElementById("District" + i).checked = false;
        //document.getElementById("lbDistrict" + i).className = "label_radio r_off"
    }
    //console.log(val)
    if (val == 1) {
        fillDistrictandCountry(9, true)
    } else {
        document.getElementById("District1").checked = true;
        //document.getElementById("lbDistrict1").className = "label_radio r_on"
        fillDistrictandCountry(1, true)
    }

}

function ClearAllFilters() {

    //document.getElementById("FillFilter").innerHTML="";
    $("#filterList").html("");
    $("#FillFilter").hide();

    $("#hPopUpVal").val("1");
    $("#userfiltername1").val("");
    saveFilter = $("input[name='SaveFilterList']").length;
    for (i = 0; i < saveFilter; i++) {
        ti = i
            //document.getElementById("lbSaveFilterList" + ti).className = "label_radio r_off"
        document.getElementById("SaveFilterList" + ti).checked = false
    }

    categoty = $("input[name='fcat']").length
        //alert(categoty)
    for (i = 0; i <= 100; i++) {
        ti = i
        if (i == categoty - 1) {
            ti = -10
        }
        if (i == 0) {
            ti = -1
        }
        if (i == 100) {
            ti = -11
        }

        if (ti == -1) {
            if (document.getElementById("fcat" + ti)) {
                //document.getElementById("lbfcat" + ti).className = "label_radio r_on"
                document.getElementById("fcat" + ti).checked = true
            }
        } else {
            if (document.getElementById("fcat" + ti)) {
                //document.getElementById("lbfcat" + ti).className = "label_radio r_off"
                document.getElementById("fcat" + ti).checked = false
            }
        }
    }
    OrganizationType = $("input[name='iCat']").length
        //console.log(OrganizationType)
    for (i = 0; i < OrganizationType; i++) {
        ti = i

        if (i == 20) {
            ti = -10
        }
        //console.log(ti)
        if (ti == 0) {
            if (document.getElementById("lbiCat" + ti)) {
                //document.getElementById("lbiCat" + ti).className = "label_radio r_on"
                document.getElementById("iCat" + ti).checked = true
            }

        } else {
            if (document.getElementById("lbiCat" + ti)) {
                //document.getElementById("lbiCat" + ti).className = "label_radio r_off"
                document.getElementById("iCat" + ti).checked = false
            }

        }
    }
    $('#qJobNature option[value="0"]').prop('selected', true);
    /*
    JobNature =  $("input[name='qJobNature']").length
    for (i = 0; i<JobNature; i++)
    {
        ti = i
        
    	if (ti==0)
    	{
    		document.getElementById("lbqJobNature"+ti).className="label_radio r_on"
    		document.getElementById("qJobNature"+ti).checked = true
    	}
    	else
    	{
    		document.getElementById("lbqJobNature"+ti).className="label_radio r_off"
    		document.getElementById("qJobNature"+ti).checked = false
    	}
    }
    */
    JobOrgType = $("input[name='qOT']").length
    for (i = 0; i < JobOrgType; i++) {
        ti = i

        if (ti == 0) {
            //document.getElementById("lbqOT" + ti).className = "label_radio r_on"
            document.getElementById("qOT" + ti).checked = true
        } else {
            //document.getElementById("lbqOT" + ti).className = "label_radio r_off"
            document.getElementById("qOT" + ti).checked = false
        }
    }
    //JobLevel = $("input[name='qJobLevel']").length

    $('#qJobLevel option[value="0"]').prop('selected', true);
    /*
    JobLevel = $("input[name='qJobLevel']").length
    for (i = 0; i<JobLevel; i++)
    {
        ti = i
        
    	if (ti==0)
    	{
    		document.getElementById("lbqJobLevel"+ti).className="label_radio r_on"
    		document.getElementById("qJobLevel"+ti).checked = true
    	}
    	else
    	{
    		document.getElementById("lbqJobLevel"+ti).className="label_radio r_off"
    		document.getElementById("qJobLevel"+ti).checked = false
    	}
    }
    */
    posted = $("input[name='qPosted']").length
    for (i = 0; i < posted; i++) {
        ti = i

        if (ti == 0) {
            //document.getElementById("lbqPosted" + ti).className = "label_radio r_on"
            document.getElementById("qPosted" + ti).checked = true
        } else {
            //document.getElementById("lbqPosted" + ti).className = "label_radio r_off"
            document.getElementById("qPosted" + ti).checked = false
        }
    }
    Deadline = $("input[name='qDeadline']").length
    for (i = 0; i < Deadline; i++) {
        ti = i

        if (ti == 0) {
            //document.getElementById("lbqDeadline" + ti).className = "label_radio r_on"
            document.getElementById("qDeadline" + ti).checked = true
        } else {
            //document.getElementById("lbqDeadline" + ti).className = "label_radio r_off"
            document.getElementById("qDeadline" + ti).checked = false
        }
    }

    //strkeyWord =  $("#txtsearch").val()
    document.getElementById("txtsearch").value = ""
        //if (strkeyWord.trim() != "")
        //{

    //}
    for (i = 1; i < 10; i++) {
        ti = i


        if (document.getElementById("lbDistrict" + ti)) {
            //document.getElementById("lbDistrict" + ti).className = "label_radio r_off"
        }
        if (document.getElementById("District" + ti)) {
            document.getElementById("District" + ti).selected = false
        }


    }

    //document.getElementById("lbCountry0").className = "label_radio r_on"
    document.getElementById("Country0").checked = true
        //document.getElementById("lbCountry1").className = "label_radio r_off"
    document.getElementById("Country1").checked = false
    fillDistrictandCountry(1, false);

    $('#qExp option[value="0"]').prop('selected', true);
    /*
    strExpRange = $("input[name='qExp']").length;
    for (i = 0; i<strExpRange; i++)
    {
        ti = i
        
    	if (ti==0)
    	{
    		document.getElementById("lbqExp"+ti).className="label_radio r_on"
    		document.getElementById("qExp"+ti).checked = true
    	}
    	else
    	{
    		document.getElementById("lbqExp"+ti).className="label_radio r_off"
    		document.getElementById("qExp"+ti).checked = false
    	}
    }
    */
    $('#qAge option[value="0"]').prop('selected', true);
    /*
    strAgeRange = $("input[name='qAge']").length;
    for (i = 0; i<strExpRange; i++)
    {
        ti = i
        
    	if (ti==0)
    	{
    		document.getElementById("lbqAge"+ti).className="label_radio r_on"
    		document.getElementById("qAge"+ti).checked = true
    	}
    	else
    	{
    		document.getElementById("lbqAge"+ti).className="label_radio r_off"
    		document.getElementById("qAge"+ti).checked = false
    	}
    }
    */
    Newspaper = $("input[name='Newspaper']").length
        //alert(categoty)
    for (i = 0; i < Newspaper; i++) {
        ti = i
        if (i == Newspaper - 1) {
            ti = -10
        }
        if (i == 0) {
            ti = 0
        }

        if (ti == 0) {
            //document.getElementById("lbNewspaper" + ti).className = "label_radio r_on"
            document.getElementById("Newspaper" + ti).checked = true
        } else {
            if (document.getElementById("lbNewspaper" + ti)) {
                //document.getElementById("lbNewspaper" + ti).className = "label_radio r_off"
            }
            if (document.getElementById("Newspaper" + ti)) {
                document.getElementById("Newspaper" + ti).checked = false
            }
        }
    }

    SpecialSkill = $("input[name='qJobSpecialSkill']").length
    for (i = -1; i < SpecialSkill; i++) {
        ti = i

        if (ti == -1) {
            //document.getElementById("lbqJobSpecialSkill" + ti).className = "label_radio r_on"
            document.getElementById("qJobSpecialSkill" + ti).checked = true
        } else {
            if (document.getElementById("lbqJobSpecialSkill" + ti)) {
                //document.getElementById("lbqJobSpecialSkill" + ti).className = "label_radio r_off"
            }
            if (document.getElementById("qJobSpecialSkill" + ti)) {
                document.getElementById("qJobSpecialSkill" + ti).checked = false
            }
        }
    }

    document.getElementById("qGender1").checked = false
        //document.getElementById("lbqGender1").className = "label_check c_off"
    document.getElementById("qGender2").checked = false
        //document.getElementById("lbqGender2").className = "label_check c_off"
    document.getElementById("qGender3").checked = false
        //document.getElementById("lbqGender3").className = "label_check c_off"
    if (document.getElementById("qGender0")) {
        document.getElementById("qGender0").checked = true
    }
    if (document.getElementById("lbqGender0")) {
        //document.getElementById("lbqGender0").className = "label_radio r_on"
    }

    document.getElementById("qRetiredArmy0").checked = false
    document.getElementById("qWorkstation0").checked = false
    document.getElementById("qPWD0").checked = false
        //document.getElementById("lbqRetiredArmy0").className = "label_check c_off"

    document.getElementById("hidOrder").value = ""
    document.getElementById("pg").value = "1"
    document.getElementById("MPostings").value = ""
    document.getElementById("ver").value = ""
        //document.getElementById("qOT").value = ""
    document.getElementById("hidJobSearch").value = "JobSearch"


    clearDiv();
    if (getversion == "") {
        showSearchedResult(true)
    } else {
        showSearchedResultBn(true)
    }

    SaveFilterEnable()
}

function ClearAllFiltersForSf() {

    //document.getElementById("FillFilter").innerHTML="";
    $("#filterList").html("");
    $("#FillFilter").hide();

    categoty = $("input[name='fcat']").length
        //alert(categoty)
    for (i = 0; i <= 100; i++) {
        ti = i
        if (i == categoty - 1) {
            ti = -10
        }
        if (i == 0) {
            ti = -1
        }
        if (i == 100) {
            ti = -11
        }

        if (ti == -1) {
            if (document.getElementById("fcat" + ti)) {
                //document.getElementById("lbfcat" + ti).className = "label_radio r_on"
                document.getElementById("fcat" + ti).checked = true
            }
        } else {
            if (document.getElementById("fcat" + ti)) {
                //document.getElementById("lbfcat" + ti).className = "label_radio r_off"
                document.getElementById("fcat" + ti).checked = false
            }
        }
    }
    OrganizationType = $("input[name='iCat']").length
        //console.log(OrganizationType)
    for (i = 0; i < OrganizationType; i++) {
        ti = i

        if (i == 20) {
            ti = -10
        }
        //console.log(ti)
        if (ti == 0) {
            if (document.getElementById("lbiCat" + ti)) {
                //document.getElementById("lbiCat" + ti).className = "label_radio r_on"
                document.getElementById("iCat" + ti).checked = true
            }

        } else {
            if (document.getElementById("lbiCat" + ti)) {
                //document.getElementById("lbiCat" + ti).className = "label_radio r_off"
                document.getElementById("iCat" + ti).checked = false
            }

        }
    }
    $('#qJobNature option[value="0"]').prop('selected', true);
    /*
    JobNature =  $("input[name='qJobNature']").length
    for (i = 0; i<JobNature; i++)
    {
        ti = i
        
    	if (ti==0)
    	{
    		document.getElementById("lbqJobNature"+ti).className="label_radio r_on"
    		document.getElementById("qJobNature"+ti).checked = true
    	}
    	else
    	{
    		document.getElementById("lbqJobNature"+ti).className="label_radio r_off"
    		document.getElementById("qJobNature"+ti).checked = false
    	}
    }
    */
    JobOrgType = $("input[name='qOT']").length
    for (i = 0; i < JobOrgType; i++) {
        ti = i

        if (ti == 0) {
            //document.getElementById("lbqOT" + ti).className = "label_radio r_on"
            document.getElementById("qOT" + ti).checked = true
        } else {
            //document.getElementById("lbqOT" + ti).className = "label_radio r_off"
            document.getElementById("qOT" + ti).checked = false
        }
    }
    //JobLevel = $("input[name='qJobLevel']").length

    $('#qJobLevel option[value="0"]').prop('selected', true);
    /*
    JobLevel = $("input[name='qJobLevel']").length
    for (i = 0; i<JobLevel; i++)
    {
        ti = i
        
    	if (ti==0)
    	{
    		document.getElementById("lbqJobLevel"+ti).className="label_radio r_on"
    		document.getElementById("qJobLevel"+ti).checked = true
    	}
    	else
    	{
    		document.getElementById("lbqJobLevel"+ti).className="label_radio r_off"
    		document.getElementById("qJobLevel"+ti).checked = false
    	}
    }
    */
    posted = $("input[name='qPosted']").length
    for (i = 0; i < posted; i++) {
        ti = i

        if (ti == 0) {
            //document.getElementById("lbqPosted" + ti).className = "label_radio r_on"
            document.getElementById("qPosted" + ti).checked = true
        } else {
            //document.getElementById("lbqPosted" + ti).className = "label_radio r_off"
            document.getElementById("qPosted" + ti).checked = false
        }
    }
    Deadline = $("input[name='qDeadline']").length
    for (i = 0; i < Deadline; i++) {
        ti = i

        if (ti == 0) {
            //document.getElementById("lbqDeadline" + ti).className = "label_radio r_on"
            document.getElementById("qDeadline" + ti).checked = true
        } else {
            //document.getElementById("lbqDeadline" + ti).className = "label_radio r_off"
            document.getElementById("qDeadline" + ti).checked = false
        }
    }

    //strkeyWord =  $("#txtsearch").val()
    document.getElementById("txtsearch").value = ""
        //if (strkeyWord.trim() != "")
        //{

    //}
    for (i = 1; i < 10; i++) {
        ti = i


        if (document.getElementById("lbDistrict" + ti)) {
            //document.getElementById("lbDistrict" + ti).className = "label_radio r_off"
        }
        if (document.getElementById("District" + ti)) {
            document.getElementById("District" + ti).selected = false
        }


    }

    //document.getElementById("lbCountry0").className = "label_radio r_on"
    document.getElementById("Country0").checked = true
        //document.getElementById("lbCountry1").className = "label_radio r_off"
    document.getElementById("Country1").checked = false
    fillDistrictandCountry(1, false);

    $('#qExp option[value="0"]').prop('selected', true);
    /*
    strExpRange = $("input[name='qExp']").length;
    for (i = 0; i<strExpRange; i++)
    {
        ti = i
        
    	if (ti==0)
    	{
    		document.getElementById("lbqExp"+ti).className="label_radio r_on"
    		document.getElementById("qExp"+ti).checked = true
    	}
    	else
    	{
    		document.getElementById("lbqExp"+ti).className="label_radio r_off"
    		document.getElementById("qExp"+ti).checked = false
    	}
    }
    */
    $('#qAge option[value="0"]').prop('selected', true);
    /*
    strAgeRange = $("input[name='qAge']").length;
    for (i = 0; i<strExpRange; i++)
    {
        ti = i
        
    	if (ti==0)
    	{
    		document.getElementById("lbqAge"+ti).className="label_radio r_on"
    		document.getElementById("qAge"+ti).checked = true
    	}
    	else
    	{
    		document.getElementById("lbqAge"+ti).className="label_radio r_off"
    		document.getElementById("qAge"+ti).checked = false
    	}
    }
    */
    Newspaper = $("input[name='Newspaper']").length
        //alert(categoty)
    for (i = 0; i < Newspaper; i++) {
        ti = i
        if (i == Newspaper - 1) {
            ti = -10
        }
        if (i == 0) {
            ti = 0
        }

        if (ti == 0) {
            //document.getElementById("lbNewspaper" + ti).className = "label_radio r_on"
            document.getElementById("Newspaper" + ti).checked = true
        } else {
            if (document.getElementById("lbNewspaper" + ti)) {
                // document.getElementById("lbNewspaper" + ti).className = "label_radio r_off"
            }
            if (document.getElementById("Newspaper" + ti)) {
                document.getElementById("Newspaper" + ti).checked = false
            }
        }
    }

    SpecialSkill = $("input[name='qJobSpecialSkill']").length
    for (i = -1; i < SpecialSkill; i++) {
        ti = i

        if (ti == -1) {
            //document.getElementById("lbqJobSpecialSkill" + ti).className = "label_radio r_on"
            document.getElementById("qJobSpecialSkill" + ti).checked = true
        } else {
            if (document.getElementById("lbqJobSpecialSkill" + ti)) {
                // document.getElementById("lbqJobSpecialSkill" + ti).className = "label_radio r_off"
            }
            if (document.getElementById("qJobSpecialSkill" + ti)) {
                document.getElementById("qJobSpecialSkill" + ti).checked = false
            }
        }
    }

    document.getElementById("qGender1").checked = false
        //document.getElementById("lbqGender1").className = "label_check c_off"
    document.getElementById("qGender2").checked = false
        //document.getElementById("lbqGender2").className = "label_check c_off"
    document.getElementById("qGender3").checked = false
        //document.getElementById("lbqGender3").className = "label_check c_off"
    if (document.getElementById("qGender0")) {
        document.getElementById("qGender0").checked = true
    }
    if (document.getElementById("lbqGender0")) {
        //document.getElementById("lbqGender0").className = "label_radio r_on"
    }

    document.getElementById("qRetiredArmy0").checked = false
    document.getElementById("qWorkstation0").checked = false
    document.getElementById("qPWD0").checked = false
    //document.getElementById("lbqRetiredArmy0").className = "label_check c_off"

    document.getElementById("hidOrder").value = ""
    document.getElementById("pg").value = "1"
    document.getElementById("MPostings").value = ""
    document.getElementById("ver").value = ""
        //document.getElementById("qOT").value = ""
    document.getElementById("hidJobSearch").value = "JobSearch"


    clearDiv();
    if (getversion == "") {
        showSearchedResult(true)
    } else {
        showSearchedResultBn(true)
    }

    SaveFilterEnable()
}

function switchSearch(id) {
    //console.log(document.getElementById(id).innerHTML)
    textval = document.getElementById(id).innerHTML
        //console.log(textval.indexOf("0"))
    if (textval != "") {
        if (textval.indexOf("0") == 0) {

        } else {

            if (textval.indexOf("bangla") > 0) {
                document.getElementById("ver").value = "bn"
            } else {
                document.getElementById("ver").value = "en"
            }
            showSearchedResult(true);
        }
    }
}

function switchSearchBn(id) {
    //console.log(document.getElementById(id).innerHTML)
    textval = document.getElementById(id).innerHTML
        //console.log(textval.indexOf("0"))
    if (textval != "") {
        if (textval.indexOf("0") == 0) {

        } else {

            if (textval.indexOf("à¦¬à¦¾à¦‚à¦²à¦¾") > 0) {
                document.getElementById("ver").value = "bn"
            } else {
                document.getElementById("ver").value = "en"
            }
            showSearchedResultBn(true);
        }
    }
}

function setPerpageRecord(val) {
    var newDate = addDays(new Date(), 7);
    document.cookie = "JOBSRPP=" + val + "; expires=" + newDate + "; path=/";
    if (getversion == "") {
        showSearchedResult(true)
    } else {
        showSearchedResultBn(true)
    }
}

function addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}

function setBowserWidth() {
    var newDate = addDays(new Date(), 7);
    document.cookie = "JOBSBRWWIDTH=" + window.innerWidth + "; expires=" + newDate + "; path=/";
}

setBowserWidth();

$(document).ready(function() {
    $(window).on('resize', function() {
        setBowserWidth();
    });
    customScroll_on();
});

function customScroll_on() {
    $(".ttest .p-body,.ttest .p-body-s,.ttest .p-body-l").each(function(i, d) {
        var h = $(this).attr("data-height") ? $(this).attr("data-height") : 170;
        $(this).bdjcsbar({
            setHeight: h,
            theme: "light"
        });
    });
}

function customScroll_off() {
    $(".ttest .p-body,.ttest .p-body-s,.ttest .p-body-l").each(function(i, d) {
        $(this).bdjcsbar('destroy');
    });
}

function saveFilterHtml(FilterName, sfAjaxNameValdMsg1, sfAjaxNameValdMsg2, sfAjaxNameValdMsg3, sfAjaxNameValdMsg4) {
    var strSaveFilter = "";
    strSaveFilter += "    <div id=\"mf\" class=\"mf\">";
    strSaveFilter += "        <div id=\"mft\" class=\"well\">";
    strSaveFilter += "            <span  class=\"mft\">";
    strSaveFilter += "                <a data-placement=\"bottom\" data-toggle=\"popover\" data-container=\"body\" type=\"button\" data-html=\"true\" href=\"javascript:changeEditTextValueSf();\" id=\"editable-sf-name\" class=\"editable-click\">" + FilterName + "<\/a>";
    strSaveFilter += "                <div id=\"popover-content\" class=\"hide\" style=\"padding:10px 5px 15px 5px !important;\">";
    strSaveFilter += "                    <div class=\"row\">";
    strSaveFilter += "                      <div class=\"col-xs-8\" style=\"padding-right:0px;\">";
    strSaveFilter += "                          <div class=\"editable-input\" style=\"position: relative;\">";
    strSaveFilter += "                                <input type=\"text\" class=\"form-control input-sm\" id=\"txtEditFilterName\" value=\"" + FilterName + "\" style=\"padding-right: 24px;\" maxlength=\"50\">";
    strSaveFilter += "                            <\/div>";
    strSaveFilter += "                        <\/div>";
    strSaveFilter += "                        <div class=\"col-xs-4\" style=\"padding-left:10px; padding-right:0px;\">";
    strSaveFilter += "                            <div class=\"editable-buttons\">";
    strSaveFilter += "                                <button type=\"button\" class=\"btn btn-success btn-sm editable-submit\" onclick=\"forJsAjaxNameValidation();\" >";
    strSaveFilter += "                                    <img src=\"\/images\/tik.png\">";
    strSaveFilter += "                                <\/button>";
    strSaveFilter += "                                <button type=\"button\" class=\"btn btn-default btn-sm editable-cancel close-p\" id=\"FSsimplePopupCloseAjax\">";
    strSaveFilter += "                                    <img src=\"\/images\/not-allowed.png\">";
    strSaveFilter += "                                <\/button>";
    strSaveFilter += "                            <\/div>";
    strSaveFilter += "                        <\/div>";
    strSaveFilter += "                    <\/div>";

    strSaveFilter += "                    <div class=\"row\" id=\"edit-fs-length-alert\" style=\"display:none;\">";
    strSaveFilter += "                          <div class=\"col-xs-12\" style=\"padding-top:10px;\">";
    strSaveFilter += "                                <div class=\"v-msg-p\">" + sfAjaxNameValdMsg1 + "<\/div>";
    strSaveFilter += "                          <\/div>";
    strSaveFilter += "                    <\/div>";

    strSaveFilter += "                    <div class=\"row\" id=\"edit-fs-spChr-alert\" style=\"display:none;\">";
    strSaveFilter += "                          <div class=\"col-xs-12\" style=\"padding-top:10px;\">";
    strSaveFilter += "                                <div class=\"v-msg-p\">" + sfAjaxNameValdMsg2 + "<\/div>";
    strSaveFilter += "                          <\/div>";
    strSaveFilter += "                    <\/div>";

    strSaveFilter += "                    <div class=\"row\" id=\"edit-fs-name-alert\" style=\"display:none;\">";
    strSaveFilter += "                          <div class=\"col-xs-12\" style=\"padding-top:10px;\">";
    strSaveFilter += "                                <div class=\"v-msg-p\">" + sfAjaxNameValdMsg3 + "<\/div>";
    strSaveFilter += "                          <\/div>";
    strSaveFilter += "                    <\/div>";

    strSaveFilter += "                    <div class=\"row\" id=\"edit-fs-empty-name-alert\" style=\"display:none;\">";
    strSaveFilter += "                          <div class=\"col-xs-12\" style=\"padding-top:10px;\">";
    strSaveFilter += "                                <div class=\"v-msg-p\">" + sfAjaxNameValdMsg4 + "<\/div>";
    strSaveFilter += "                          <\/div>";
    strSaveFilter += "                    <\/div>";

    strSaveFilter += "                <\/div>";
    strSaveFilter += "                <span class=\"sct\">&#8680;<\/span>";
    strSaveFilter += "            <\/span>";
    strSaveFilter += "            ";
    strSaveFilter += "        <\/div>";
    strSaveFilter += "    <\/div>";
    return strSaveFilter;
}


var arrNameValue;

function CheckSaveFilter() {
    SaveFilterLists = $("#strFlid_fvalue").val()
    SaveFilterName = $("#strFilterName").val()

    if (getversion == "bng") {
        sfAjaxNameValdMsg1 = "à¦«à§‡à¦­à¦¾à¦°à¦¿à¦Ÿ à¦¸à¦¾à¦°à§à¦šà§‡à¦° à¦¨à¦¾à¦® à§«à§¦ à¦…à¦•à§à¦·à¦°à§‡à¦° à¦¬à§‡à¦¶à¦¿ à¦¹à¦¬à§‡ à¦¨à¦¾à¥¤";
        sfAjaxNameValdMsg2 = "à¦¶à§à¦§à§à¦®à¦¾à¦¤à§à¦° à¦…à¦•à§à¦·à¦°, à¦¸à¦‚à¦–à§à¦¯à¦¾, à¦à¦‡ à¦¬à¦¿à¦°à¦¾à¦®à¦šà¦¿à¦¹à§à¦¨à¦—à§à¦²à¦¿ (.),(-) à¦à¦¬à¦‚ à¦¸à§à¦ªà§‡à¦¸ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à¦¬à§‡à¦¨à¥¤";
        sfAjaxNameValdMsg3 = "à¦¨à¦¾à¦®à¦Ÿà¦¿ à¦‡à¦¤à§‹à¦®à¦§à§à¦¯à§‡ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à§‡à¦›à§‡à¥¤ à¦¦à¦¯à¦¼à¦¾ à¦•à¦°à§‡ à¦­à¦¿à¦¨à§à¦¨ à¦¨à¦¾à¦® à¦²à¦¿à¦–à§à¦¨à¥¤";
        sfAjaxNameValdMsg4 = "à¦…à¦¨à§à¦—à§à¦°à¦¹ à¦•à¦°à§‡ à¦«à§‡à¦­à¦¾à¦°à¦¿à¦Ÿ à¦¸à¦¾à¦°à§à¦šà§‡à¦° à¦¨à¦¾à¦® à¦²à¦¿à¦–à§à¦¨à¥¤";
    } else {
        sfAjaxNameValdMsg1 = "Favourite Search Name Maximum 50 characters.";
        sfAjaxNameValdMsg2 = "Please use only letters,numbers and punctuations like (.),(-) and space.";
        sfAjaxNameValdMsg3 = "This name is already in use. Please type another name.";
        sfAjaxNameValdMsg4 = "Please enter your Favourite Search name.";
    }

    if (SaveFilterLists.trim() != "") {
        $("#filterList").html(saveFilterHtml(SaveFilterName, sfAjaxNameValdMsg1, sfAjaxNameValdMsg2, sfAjaxNameValdMsg3, sfAjaxNameValdMsg4));
        arrFilters = SaveFilterLists.split("#*")
            //alert(arrFilters.length)
        for (index = 0; index < arrFilters.length; index++) {
            arrNameValue = arrFilters[index].split("__")
            SaveFilterID = arrNameValue[0]
            SaveFilterValue = arrNameValue[1]
                //alert(1)
                //alert(SaveFilterID)
                //alert(SaveFilterValue)

            //alert(SaveFilterID)
            ElementName = getElementID(SaveFilterID)
                //alert(ElementName)
                //alert(SaveFilterValue)
            ElementID = $("input[name='" + ElementName + "'][value='" + SaveFilterValue + "']").attr("id")
                //alert(ElementID)
            ElementType = $("input[name='" + ElementName + "'][value='" + SaveFilterValue + "']").attr("type")
            if (ElementID == undefined) {
                ElementID = $("[name='" + ElementName + "']").attr("id")
                ElementType = "select-one"
            }

            //alert(ElementID+"--"+ElementName+"--"+ElementType)
            //fcat,Newspaper, qJobSpecialSkill
            ElementDefaultValue = 0
            if (ElementName == "fcat" || ElementName == "Newspaper" || ElementName == "qJobSpecialSkill") {
                ElementDefaultValue = -1
            }
            ElementInsValue = 0;
            // if (ElementName == "fcat")
            // {
            // 	ElementInsValue = 1
            // }
            //alert(ElementID +"---"+ElementType)
            console.log(ElementID + "---" + ElementDefaultValue + "---" + ElementName + "---" + ElementType + "---" + ElementInsValue);
            createContent(ElementID, ElementDefaultValue, ElementName, ElementType, ElementInsValue, "mft")
                //alert(1)
        }
    }

}

function IsLoadFilter(vNameFilter, SelectedVal) {

    if (SaveFilterLists.trim() != "") {
        for (i = 0; i < arrFilters.length; i++) {
            arrNameValue = arrFilters[i].split("__")
            SaveFilterID = arrNameValue[0]
            SaveFilterValue = arrNameValue[1]
            ElementName = getElementID(SaveFilterID)

            if (vNameFilter == ElementName && SelectedVal == SaveFilterValue) {
                return false
            }
        }
    }
    return true
}

function getElementID(SFID) {
    tmpVal = parseInt(SFID)
    switch (tmpVal) {
        case 1:
            SelectItemName = "txtsearch";
            break;
        case 2:
            SelectItemName = "fcat";
            break;
        case 3:
            SelectItemName = "iCat";
            break;
        case 4:
            SelectItemName = "qOT";
            break;
        case 5:
            SelectItemName = "District";
            break;
        case 6:
            SelectItemName = "LcationList";
            break;
        case 7:
            SelectItemName = "qPosted";
            break;
        case 8:
            SelectItemName = "qDeadline";
            break;
        case 9:
            SelectItemName = "Newspaper";
            break;
        case 10:
            SelectItemName = "qGender";
            break;
        case 11:
            SelectItemName = "qJobNature";
            break;
        case 12:
            SelectItemName = "qJobLevel";
            break;
        case 13:
            SelectItemName = "qJobSpecialSkill";
            break;
        case 14:
            SelectItemName = "qExp";
            break;
        case 15:
            SelectItemName = "qAge";
            break;
        case 16:
            SelectItemName = "qRetiredArmy";
            break;
        case 17:
            SelectItemName = "qJobSpecialSkill";
            break;
        case 20:
            SelectItemName = "qWorkstation";
            break;
        case 19:
            SelectItemName = "qPWD";
            break;
        default:
            SelectItemName = "";
            break;

    }
    return SelectItemName
}

function SaveFilterEnable() {
    isShow = false

    WellDefaultValue = 1

    if (document.getElementById("mf")) {
        WellDefaultValue = 2
    }

    alldata = $("#filterList").html()

    WellCount = (alldata.match(/well/g) || []).length
    WellCountEmpty = (alldata.match(/well_empty/g) || []).length

    // alert(WellCount)
    // alert(document.getElementById("mf"))

    if (document.getElementById("mf")) {
        if (WellCount == 1 || WellCount == 2 || WellCountEmpty == 1) {
            if (WellCount == 1) {
                isShow = true
            }
            if (WellCount == 2) {
                allCategoryCount = (alldata.match(/Category/g) || []).length
                if (allCategoryCount == 1) {
                    isShow = true
                }
                allBNCategoryCount = (alldata.match(/à¦•à§à¦¯à¦¾à¦Ÿà¦¾à¦—à¦°à¦¿/g) || []).length
                if (allBNCategoryCount == 1) {
                    isShow = true
                }
            }

            if (WellCountEmpty == 1) {
                isShow = true
            }
        }
        // alert(isShow)
    } else {
        if (WellCount == 1 || WellCountEmpty == 1) {
            if (WellCount == 1) {
                allCategoryCount = (alldata.match(/Category/g) || []).length
                if (allCategoryCount == 1) {
                    isShow = true
                }
                allBNCategoryCount = (alldata.match(/à¦•à§à¦¯à¦¾à¦Ÿà¦¾à¦—à¦°à¦¿/g) || []).length
                if (allBNCategoryCount == 1) {
                    isShow = true
                }

            }

            if (WellCountEmpty == 1) {
                isShow = true
            }
        }
    }



    if (alldata.trim() == "") {
        isShow = true
    }

    if (isShow == true) {
        $("#FScfss").addClass("ia-disable")
        $("#FScfss").find("img").attr("src", "/images/Save-Filters-icon-disable.svg")


    } else {
        $("#FScfss").removeClass("ia-disable")
        $("#FScfss").find("img").attr("src", "/images//Save-Filters-icon.svg")
    }
}