$(document).on("click", ".edit-tools .edit-btn", function(){
	$(this).parents('div.all-info').find('.edit-tools').hide();
	$(this).parents('div.all-info').find('.btn-form-control').removeClass('hidden');
    $(this).parents('div.all-info').find('.form-group').find('.onclick-hidden').addClass('yes');
    $(this).parents('div.all-info').find('.aria-disabled').removeAttr('disabled');
    $(this).parents('div.all-info').find('form').removeClass('view-mode');
    
    if($('#commonForm_aca input').hasClass("noMajororGroupExistClass")){
		$(this).parents('div.panel-body').find('.noMajororGroupExistClass').attr('disabled', 'disabled');
	}

	//For new date picker
	const getNavigatorLanguage = () => (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
	$('.datepicker')
	.filter(function() {
		return !this.disabled && !this.readOnly;
	}).datepicker({
		gainFocusOnConstruction: false,
		theme: 'bootstrap',
		inputFormat: ["M/d/y"],
		outputFormat: 'MM/dd/yyyy',
		modal:true,
	});
});
$(document).on("click", ".all-info form .btn-cancel", function(){
	$(this).parents('div.all-info').find('form').addClass('view-mode');
	$(this).parents('div.all-info').find('.edit-tools').show();
	$(this).parents('div.all-info').find('.btn-form-control').addClass('hidden');
	$(this).parents('div.all-info').find('.form-group').find('.onclick-hidden').removeClass('yes');
});
$(document).on("click", ".tab-group .btn", function(){
	$(this).parents('div.tab-group').find('.btn').removeClass('active');
	$(this).addClass('active');
});
function toggleIcon(e) {
$(e.target)
    .prev('.panel-heading')
    .find(".indicator")
    .toggleClass('icon-minus icon-plus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon).css('color','#000');
$('.panel-group').on('shown.bs.collapse', toggleIcon);

// EDIT RESUME TAB
$(document).on("click", ".btn-tab-personal", function(){
	$(this).parents('div.big-card').find('.resume-panel-group').hide();
	$('.resume-panel-group.personal').removeClass('hidden');
	$('.resume-panel-group.personal').show();
	// $('.loader').fadeIn();
});
$(document).on("click", ".btn-tab-education", function(){
	$(this).parents('div.big-card').find('.resume-panel-group').hide();
	$('.resume-panel-group.education').removeClass('hidden');
	$('.resume-panel-group.education').show();
});
$(document).on("click", ".btn-tab-employment", function(){
	$(this).parents('div.big-card').find('.resume-panel-group').hide();
	$('.resume-panel-group.employment').removeClass('hidden');
	$('.resume-panel-group.employment').show();
});
$(document).on("click", ".btn-tab-others", function(){
	$(this).parents('div.big-card').find('.resume-panel-group').hide();
	$('.resume-panel-group.others').removeClass('hidden');
	$('.resume-panel-group.others').show();
});
$(document).on("click", ".btn-tab-photograph", function(){
	$(this).parents('div.big-card').find('.resume-panel-group').hide();
	$('.resume-panel-group.photograph').removeClass('hidden');
	$('.resume-panel-group.photograph').show();
});


// Nationality
$(document).on("click", ".onclick", function(){
	$(this).parents('div.btn-form-control').find('.onclick-show').removeClass('hidden');
});
$(document).on("click", ".onclick-o", function(){
	$(this).parents('div.btn-form-control').find('.onclick-show').addClass('hidden');
});



$(document).on("mouseover", ".chips-container a", function(){
	$(this).parents('div.chips-container .well').addClass('hover');
});
$(document).on("mouseout", ".chips-container a", function(){
	$(this).parents('div.chips-container .well').removeClass('hover');
});


// Wells onclick hide
$(document).on("click", ".chips-container a.dismiss", function(){
	$(this).parents('div.well').fadeOut();
});

// $(document).on("click", ".edit-tools .edit-btn", function(){
// 	$(this).parents('div.all-info').find('form').removeClass('view-mode');
// });

$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});


// GOOD AND ORDINARY EXAMPLE
// $(document).on("click", ".edit-tools .edit-btn", function(){
// 	$(this).parents('div.all-info').find('form').removeClass('view-mode');
// });

// PHOTO UPLOAD EDIT RESUME
$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
    $('#userImg').attr('src', e.target.result);
};


$(function(){
    $('.has-spinner').click(function() {
        $(this).toggleClass('active');
    });
});

// UPLOADING
$(document).on("click", ".btn-upload", function(){
	$(this).find('i.icon-upload').removeClass('icon-upload').addClass('spin icon-circle-loader');
	$(this).addClass('uploading');
});
$(document).on("click", ".tab-group .btn", function(){
	$(this).parents('div.big-card').find('.loader').show();
	$(this).find('.panel');
});
// $('.alert.alert-dismissible').fadeIn('fast').delay(2000).fadeOut('slow');
// Applied globally on all textareas with the "autoExpand" class
$(document).one('focus.autoExpand', 'textarea.autoExpand', function(){
    var savedValue = this.value;
    this.value = '';
    this.baseScrollHeight = this.scrollHeight;
    this.value = savedValue;
})
.on('input.autoExpand', 'textarea.autoExpand', function(){
    var minRows = this.getAttribute('data-min-rows')|0, rows;
    this.rows = minRows;
    rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
    this.rows = minRows + rows;
});

$(document).ready(function() {
	$('[data-toggle="popover"]').popover();
		  $('body').on('click', function (e) {
			  $('[data-toggle="popover"]').each(function () {
				  if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                  $(this).popover('hide');
              }
          });
    });
});
										  
$(document).ready(function() {
	$(".feedback-left").delay(2000).fadeIn(500);
});

// ARIA SUPPORTS
// $(document).on("click", ".edit-tools .edit-btn", function(){
// 	$(this).parents('div.panel-body').find('.aria-disabled').removeAttr('disabled');

// 	if($('#commonForm_aca input').hasClass("noMajororGroupExistClass")){
// 		$(this).parents('div.panel-body').find('.noMajororGroupExistClass').attr('disabled', 'disabled');
// 	}
// });

