function saf_Pop() {
    $('body,html').animate({
        scrollTop: '+=1px'
    });
    $(".Afilter-tag").slideToggle(200);
}

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var footer_top = $("#footer").offset().top;
    var div_top = $('#sticky-anchor').offset().top;
    var div_height = $("#sticky").height();
    var div_heightas = $("#stickyl").height();
    var active_filter_height = $(".active-filter").height();

    var padding = 1; // tweak here or get from margins etc

    if (window_top + active_filter_height + div_heightas > footer_top - padding) {
        $('#sticky').css({ top: (window_top + active_filter_height + div_heightas - footer_top + padding) * -1 });
    } else if (window_top > div_top) {
        $('#sticky').addClass('stick').css({ top: 0 });
        $('#sticky-anchor').css({ height: div_height + 'px' });
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').css({ height: 0 });
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

function stickyl_relocate() {
    var window_top = $(window).scrollTop();
    var footer_top = $("#footer").offset().top;
    var div_top = $('#sticky-anchorl').offset().top;
    var div_height = $("#stickyl").height();
    var active_filter_height = $(".active-filter").height();

    var padding = 1; // tweak here or get from margins etc

    if (window_top + div_height + active_filter_height > footer_top - padding)
        $('#stickyl').css({ top: (window_top + div_height - footer_top + padding) * -1 })
    else if (window_top > div_top - active_filter_height) {
        $('#stickyl').addClass('stickl').css({ top: active_filter_height + 'px' });
    } else {
        $('#stickyl').removeClass('stickl').css({ top: 0 });
    }
}

$(function() {
    $(window).scroll(stickyl_relocate);
    stickyl_relocate();
});

// Message Window 
(function($) {
    $.fn.simplePopup = function(options) {
        var defaults = $.extend({
            centerPopup: true,
            open: function() {},
            closed: function() {}
        }, options);

        var object = $(this);
        var settings = $.extend(defaults, options);
        var methods = {

            init: function() {
                return this.each(function() {
                    methods.appendHTML();
                    methods.setEventHandlers();
                    methods.showPopup();
                });
            },
            appendHTML: function() {
                if ($('.simplePopupBackground').length === 0) {
                    var background = '<div class="simplePopupBackground"></div>';
                    $('body').prepend(background);
                }

                if (object.find('.simplePopupClose').length === 0) {
                    var close = '<div class="simplePopupClose" id="FSsimplePopupClose">X</div>';
                    object.prepend(close);
                }
            },
            setEventHandlers: function() {

                //$(".simplePopupClose, .simplePopupBackground").on("click", function (event) {
                $(".simplePopupClose").on("click", function(event) {
                    methods.hidePopup();
                    $('body').css('overflow', 'auto');
                });

                $(window).on("resize", function(event) {

                    if (settings.centerPopup) {
                        methods.positionPopup();
                    }
                });

            },

            removeEventListners: function() {
                $(".simplePopupClose, .simplePopupBackground").off("click");
            },

            showPopup: function() {
                $(".simplePopupBackground").css({
                    "opacity": "0.7"
                });

                $(".simplePopupBackground").fadeIn("fast");

                object.fadeIn("slow", function() {
                    settings.open();
                });

                if (settings.centerPopup) {
                    methods.positionPopup();
                }
                $('body').css('overflow', 'hidden');
            },

            hidePopup: function() {
                $(".simplePopupBackground").fadeOut("fast");
                object.fadeOut("fast", function() {
                    methods.removeEventListners();
                    settings.closed();
                });
            },

            positionPopup: function() {
                var windowWidth = $(window).width();
                var windowHeight = $(window).height();
                var popupWidth = object.width();
                var popupHeight = object.height();

                var topPos = (windowHeight / 2) - (popupHeight / 2);
                var leftPos = (windowWidth / 2) - (popupWidth / 2);
                if (topPos < 30) topPos = 30;

                object.css({
                    "position": "absolute",
                    "top": topPos,
                    "left": leftPos
                });
            },

        };

        if (methods[options]) { // $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { // $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);
        } else {
            $.error('Method "' + method + '" does not exist in simple popup plugin!');
        }
    };

})(jQuery);

//<!--Pop over --> 
$(function() {
    $("[data-toggle=popover]").popover({
        container: 'body',
        html: true,
        content: function() {
            return $('#popover-content').html();
        }
    });

    $(document).on("click", ".close-p", function() {
        $('[data-toggle="popover"]').popover('hide');
    });

    $('html').on('click', function(e) {
        if (!$(e.target).is('[data-toggle="popover"]') && $(e.target).closest('.popover').length == 0) {
            $('[data-toggle="popover"]').popover('hide');
        }
    });
});

//For favourite search name update using ajax 
function editableFilterName() {

    var svfilterName = $('.popover #txtEditFilterName').val();
    var svfilterId = $('input[name=SaveFilterList]:checked').val();

    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            filterValue = xhttp.responseText;
            if (filterValue == 1) {

                var txtCurrentName = $('#editable-sf-name').html();
                var txtUpdatedName = $('.popover #txtEditFilterName').val();
                var index = arrSaveFilters.indexOf(txtCurrentName);
                if (index !== -1) {
                    arrSaveFilters[index] = txtUpdatedName;
                }

                $('.popover.fade.bottom.in').removeClass('in').fadeOut();
                $("#editable-sf-name").html(svfilterName);
                $("#userfiltername1").val(svfilterName);

                for (ifilterjsId = 0; ifilterjsId < arrSaveFilters.length; ifilterjsId++) {
                    if (svfilterId == arrSaveFiltersId[ifilterjsId]) {

                        $('.filter.radios input[name=SaveFilterList]:checked').each(function() {
                            $(this).parents('.label_radio').find('span').html(svfilterName);
                        });
                    }
                }
            }
        }
    };
    xhttp.open("GET", "/update-sfName-ajax.asp?svfilterName=" + svfilterName + "&svfilterId=" + svfilterId, true);
    xhttp.send();
}

//Validation For favourite search name update using ajax 
function forJsAjaxNameValidation() {

    var svfilterNameForajaxUpdate = $('.popover #txtEditFilterName').val();
    var isMatchedaj = false;

    svfilterNameForajaxUpdate = svfilterNameForajaxUpdate.replace(/\s+/g, ' ').trim();

    if (svfilterNameForajaxUpdate.length >= 51) {
        $(".popover #edit-fs-name-alert").css("display", "none");
        $(".popover #edit-fs-empty-name-alert").css("display", "none");
        $(".popover #edit-fs-spChr-alert").css("display", "none");
        $(".popover #edit-fs-length-alert").css("display", "block");
        isMatchedaj = true;
    }

    if (/[^a-zA-Z0-9-. ]/.test(svfilterNameForajaxUpdate)) {
        $(".popover #edit-fs-name-alert").css("display", "none");
        $(".popover #edit-fs-empty-name-alert").css("display", "none");
        $(".popover #edit-fs-length-alert").css("display", "none");
        $(".popover #edit-fs-spChr-alert").css("display", "block");
        isMatchedaj = true;
    }

    if (svfilterNameForajaxUpdate == null || svfilterNameForajaxUpdate == '') {
        $(".popover #edit-fs-name-alert").css("display", "none");
        $(".popover #edit-fs-length-alert").css("display", "none");
        $(".popover #edit-fs-spChr-alert").css("display", "none");
        $(".popover #edit-fs-empty-name-alert").css("display", "block");
        isMatchedaj = true;
    }

    for (ifilteraj = 0; ifilteraj < arrSaveFilters.length; ifilteraj++) {
        if (svfilterNameForajaxUpdate == arrSaveFilters[ifilteraj]) {
            $(".popover #edit-fs-empty-name-alert").css("display", "none");
            $(".popover #edit-fs-length-alert").css("display", "none");
            $(".popover #edit-fs-spChr-alert").css("display", "none");
            $(".popover #edit-fs-name-alert").css("display", "block");
            isMatchedaj = true;
        }
    }

    if (!isMatchedaj) {
        editableFilterName();
    }
}

//ajax name input field filled
function changeEditTextValueSf() {
    var txtClickEditValue = $('#editable-sf-name').html();
    $('.popover #txtEditFilterName').val(txtClickEditValue);

}

//For success message shown
function showtosmessage(msg, success) {
    //alert(success);
    $("#MessageText").hide();
    if (success)
        $("#MessageText").append("<div class=\"alert alert-success msg-container\"><button type=\"button\" class=\"cross\" data-dismiss=\"alert\">x</button>" + msg + "</div>");
    else
        $("#MessageText").append("<div class=\"alert alert-danger msg-container-d\"><button type=\"button\" class=\"cross\" data-dismiss=\"alert\">x</button>" + msg + "</div>");

    $("#MessageText").fadeTo(2000, 5000).slideUp(5000, function() {
        $("#MessageText").slideUp(5000);
        $("#MessageText").html("");
    });
}

//when click favourite search set value & submit form 
$("[name='SaveFilterList']").click(function() {
    ClearAllFiltersForSf();
    $("#pg").val("1");
    $("#hClickLog").val("0");
    $("#frmJobSearch").submit();
});

//when click favourite search popup: set css property & value
$("#rc1").click(function() {
    var svfilterName = $('#editable-sf-name').html();
    $("#userfiltername1").val(svfilterName);
    $("#userfiltername1").css({ "opacity": ".6", "pointer-events": "none" });
    $("#spChrCheckMsg").css("display", "none");
    $("#lenCheckMsg").css("display", "none");
    $("#existNameMsg").css("display", "none");
    $("#existEmptyNameMsg").css("display", "none");
    $("#maxSaveMsg").css("display", "none");
});

function forRc2Click(msgPlaceHolder) {
    $("#userfiltername1").attr("placeholder", msgPlaceHolder);
    $("#userfiltername1").val("");
    $("#userfiltername1").removeAttr("style");
    $("#spChrCheckMsg").css("display", "none");
    $("#lenCheckMsg").css("display", "none");
    $("#existNameMsg").css("display", "none");
    $("#existEmptyNameMsg").css("display", "none");
    $("#maxSaveMsg").css("display", "none");
}

function formSubmitAndSetHvalue() {
    $("#hUserfiltername").val("1");
    $("#frmJobSearch").submit();
}

function forJsNameValidation() {

    var inputFilterName = $("[name='userfiltername']").val();
    var isMatched = false;

    inputFilterName = inputFilterName.replace(/\s+/g, ' ').trim();

    if (arrSaveFilters.length > 9) {
        $("#existNameMsg1").css("display", "none");
        $("#existEmptyNameMsg1").css("display", "none");
        $("#spChrCheckMsg1").css("display", "none");
        $("#lenCheckMsg1").css("display", "none");
        $("#maxSaveMsg1").css("display", "block");
        isMatched = true;
    }

    if (inputFilterName.length >= 51) {
        $("#existNameMsg1").css("display", "none");
        $("#existEmptyNameMsg1").css("display", "none");
        $("#spChrCheckMsg1").css("display", "none");
        $("#maxSaveMsg1").css("display", "none");
        $("#lenCheckMsg1").css("display", "block");
        isMatched = true;
    }

    if (/[^a-zA-Z0-9-. ]/.test(inputFilterName)) {
        $("#existNameMsg1").css("display", "none");
        $("#existEmptyNameMsg1").css("display", "none");
        $("#lenCheckMsg1").css("display", "none");
        $("#maxSaveMsg1").css("display", "none");
        $("#spChrCheckMsg1").css("display", "block");
        isMatched = true;
    }

    if (inputFilterName == null || inputFilterName == '') {
        $("#spChrCheckMsg1").css("display", "none");
        $("#existNameMsg1").css("display", "none");
        $("#lenCheckMsg1").css("display", "none");
        $("#maxSaveMsg1").css("display", "none");
        $("#existEmptyNameMsg1").css("display", "block");
        isMatched = true;
    }

    for (ifilterjs = 0; ifilterjs < arrSaveFilters.length; ifilterjs++) {
        if (inputFilterName == arrSaveFilters[ifilterjs]) {
            $("#spChrCheckMsg1").css("display", "none");
            $("#existEmptyNameMsg1").css("display", "none");
            $("#lenCheckMsg1").css("display", "none");
            $("#maxSaveMsg1").css("display", "none");
            $("#existNameMsg1").css("display", "block");
            isMatched = true;
        }
    }

    if (!isMatched) {
        saveFilterAllUnchecked();
        formSubmitAndSetHvalue();
    }
}

function forJsNameValidation1() {
    if ($('#rc1').is(':checked')) {
        formSubmitAndSetHvalue();
    } else {
        var inputFilterName = $("[name='userfiltername1']").val();
        var isMatched = false;

        inputFilterName = inputFilterName.replace(/\s+/g, ' ').trim();

        if (arrSaveFilters.length > 9) {
            $("#existNameMsg").css("display", "none");
            $("#existEmptyNameMsg").css("display", "none");
            $("#spChrCheckMsg").css("display", "none");
            $("#lenCheckMsg").css("display", "none");
            $("#maxSaveMsg").css("display", "block");
            isMatched = true;
        }

        if (inputFilterName.length >= 51) {
            $("#existNameMsg").css("display", "none");
            $("#existEmptyNameMsg").css("display", "none");
            $("#spChrCheckMsg").css("display", "none");
            $("#maxSaveMsg").css("display", "none");
            $("#lenCheckMsg").css("display", "block");
            isMatched = true;
        }

        if (/[^a-zA-Z0-9-. ]/.test(inputFilterName)) {
            $("#existNameMsg").css("display", "none");
            $("#existEmptyNameMsg").css("display", "none");
            $("#lenCheckMsg").css("display", "none");
            $("#maxSaveMsg").css("display", "none");
            $("#spChrCheckMsg").css("display", "block");
            isMatched = true;
        }

        if (inputFilterName == null || inputFilterName == '') {
            $("#spChrCheckMsg").css("display", "none");
            $("#existNameMsg").css("display", "none");
            $("#lenCheckMsg").css("display", "none");
            $("#maxSaveMsg").css("display", "none");
            $("#existEmptyNameMsg").css("display", "block");
            isMatched = true;
        }

        for (ifilterjs = 0; ifilterjs < arrSaveFilters.length; ifilterjs++) {
            if (inputFilterName == arrSaveFilters[ifilterjs]) {
                $("#spChrCheckMsg").css("display", "none");
                $("#existEmptyNameMsg").css("display", "none");
                $("#lenCheckMsg").css("display", "none");
                $("#maxSaveMsg").css("display", "none");
                $("#existNameMsg").css("display", "block");
                isMatched = true;
            }
        }

        if (!isMatched) {
            saveFilterAllUnchecked();
            formSubmitAndSetHvalue();
        }
    }
}

function saveFilterAllUnchecked() {
    saveFilterUnCheck = $("input[name='SaveFilterList']").length;
    for (i = 0; i < saveFilterUnCheck; i++) {
        ti = i;
        //document.getElementById("lbSaveFilterList" + ti).className = "label_radio r_off";
        document.getElementById("SaveFilterList" + ti).checked = false;
    }
}

$('.cfss').click(function() {
    if ($(".cfss").hasClass("ia-disable")) {
        return false;
    }
    var isPopUpVal = $("#hPopUpVal").val();
    if (isPopUpVal == '0') {
        $('.pop1').simplePopup();
    } else {
        $('.pop2').simplePopup();
    }
});

$("#FScfss").click(function() {
    if ($(".cfss").hasClass("ia-disable")) {
        return false;
    }

    if ($('#rc2').is(':checked')) {
        $("#userfiltername1").val("");
    }

    $("#userfiltername").val("");

    $("#existNameMsg").css("display", "none");
    $("#existEmptyNameMsg").css("display", "none");
    $("#spChrCheckMsg").css("display", "none");
    $("#maxSaveMsg").css("display", "none");
    $("#lenCheckMsg").css("display", "none");

    $("#existNameMsg1").css("display", "none");
    $("#existEmptyNameMsg1").css("display", "none");
    $("#spChrCheckMsg1").css("display", "none");
    $("#maxSaveMsg1").css("display", "none");
    $("#lenCheckMsg1").css("display", "none");
});

// $("#FSsimplePopupCloseAjax").click(function() {

//     $('.popover #txtEditFilterName').val("");
//     $(".popover #edit-fs-name-alert").css("display", "none");
//     $(".popover #edit-fs-empty-name-alert").css("display", "none");
//     $(".popover #edit-fs-spChr-alert").css("display", "none");
//     $(".popover #edit-fs-length-alert").css("display", "none");
// });