var $toggle = $('.toggle')
var $nav = $('.navigation')

$toggle.on('click', function () {
    $nav.toggleClass('js-nav-open');
});