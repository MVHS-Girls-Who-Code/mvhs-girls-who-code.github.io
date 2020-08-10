//nav links load
window.onload = function() {
    var $nav = $('.home-nav');
    window.setTimeout(function() {
        $nav.removeClass('hidden');
        $nav.addClass('show');
    }, 500);
}

//animations
var $hr_elements = $('.animation-hr');
var $c_elements = $('.focus h1');
var $focus_div = $('.focus h1').first();
var $whatwedo = $('.whatwedo');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($hr_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view-hr');
            $element.removeClass('not-in-view-hr');
        }
    });

    $.each($focus_div, function() {
        var $div = $(this);
        var element_height = $div.outerHeight();
        var element_top_position = $div.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $.each($c_elements, function(index) {
                var $element = $(this);
                $element.addClass('in-view-fade');
                $element.removeClass('not-in-view-fade');
                $element.css('transition-delay', `${index * 0.60}s`);
            });
        }
    });


    $.each($whatwedo, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            window.setTimeout(function() {
                $element.addClass('in-view-fade');
                $element.removeClass('not-in-view-fade');
            }, 250);
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
