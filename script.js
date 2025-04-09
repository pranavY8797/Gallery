// script.js
$(document).ready(function() {
    // Filter functionality
    $('.filter-button').click(function() {
        var filterValue = $(this).attr('data-filter');

        if (filterValue === 'all') {
            $('.filter').fadeIn(300);
        } else {
            $('.filter').hide();
            $('.' + filterValue).fadeIn(300);
        }
    });

    // Optional: Add slide effect on image hover
    $('.gallery-item').hover(
        function() {
            $(this).find('img').stop().fadeTo(300, 0.7);
        },
        function() {
            $(this).find('img').stop().fadeTo(300, 1);
        }
    );
});