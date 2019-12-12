$(document).ready(function () {
    var $dropdown = $('.dropdown');

    $dropdown.on('click', function () {
        $(this).toggleClass('dropdown--active');
    });

});