$(document).ready(function() {
    featured_job();
    $(window).on('resize', function() {
        featured_job();
        $('.featured-Job-wrapper .featured-job .featured-wrap').css("height", "auto");
        $('.featured-Job-wrapper .featured-job .requires').addClass('hide');
        $('.featured-Job-wrapper .featured-job .down-arrow').removeClass('hide');
    })

    function featured_job() {
        if (window.innerWidth < 767) {
            $('.featured-wrap').parent().css("margin-bottom", "10px");
        }
        $('.featured-job').each(function() {
            if (window.innerWidth > 991) {
                $(this).children('.featured-wrap').css("height", ($(this).outerHeight()) + "px");
            } else {
                $(this).children('.featured-wrap').css("height", "auto");
            }
        })
        $('body').on('mouseenter', '.featured-Job-wrapper .featured-job .featured-wrap', function() {
            if (window.innerWidth > 767) {
                $(this).parents('.featured-Job-wrapper').css("height", ($(this).parents('.featured-Job-wrapper').outerHeight()) + "px");
                $(this).parent().addClass('hovered');
                $(this).find('.requires').removeClass('hide');
            }
            if (window.innerWidth > 991) {
                $(this).css("height", "auto");
            }
        })
        $('body').on('mouseleave', '.featured-Job-wrapper .featured-job .featured-wrap', function() {
            if (window.innerWidth > 767) {
                $(this).parents('.featured-Job-wrapper').css("height", "auto");
                $(this).parent().removeClass('hovered');
                $(this).find('.requires').addClass('hide');
            }
            if (window.innerWidth > 991) {
                $(this).css("height", ($(this).parent().outerHeight()) + "px");
            }
        })
        $('body').on('click', '.featured-Job-wrapper .featured-job .down-arrow', function() {
            $(this).addClass('hide');
            $(this).parents('.featured-job').find('.featured-job').addClass('hovered');
            $(this).parents('.featured-job').find('.requires').removeClass('hide');
        })
    }
})