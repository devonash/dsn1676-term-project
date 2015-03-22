var $toggle = $('.toggle')
var $nav = $('.navigation')

var $btnStir = $('.button-stir');
var $spoon = $('.spoon');

var $showHide = $('.button-show-hide');
var $steam = $('.steam');

$toggle.on('click', function () {
    $nav.toggleClass('js-nav-open');
});

$btnStir.on('click', function () {
    $spoon.addClass('js-spoon-stir');
});

$spoon.on('webktiAnimationEnd animationend', function () {
    $spoon.removeClass('js-spoon-stir');
});

$showHide.on('click', function () {
    $steam.toggleClass('js-steam-show-hide');
});

$btnFry.on('click', function () {
    $egg.addClass('js-egg-fry');
});
