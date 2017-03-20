$(function() {
    var prev_class = '';
    
    $('.round').click(function(e) {
        // disallow the boring hash in the url
        e.preventDefault();

        // figure out which class to apply - and apply it
        var css_class = $(this).data('class');
        $('body').addClass(css_class);

        // remove previous class
        if ( $('body').hasClass(prev_class) ) $('body').removeClass(prev_class);

        // take note of this class
        prev_class = css_class;
    });
});
