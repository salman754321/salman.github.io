$(function () {
    var inwrap = $('.slides');

    $('.prev').on('click', function () {
        inwrap.animate({
                left: '0%'
            }, 300, function ()

            {
                inwrap.css('left', '-100%');

                $('.slide').first().before($('.slide').last());
            });



    });



    $('.next').on('click', function () {
        inwrap.animate({
                left: '-200%'
            }, 300, function ()

            {
                inwrap.css('left', '-100%');

                $('.slide').last().before($('.slide').first());
            });



    });
})
