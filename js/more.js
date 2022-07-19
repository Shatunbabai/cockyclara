$(document).ready(function() {
    var showChar = 112;
    var contentHeight = $('.more').height();
    $('.more').each(function() {
        var content = $(this).html();

        if (content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar - 1, content.length - showChar);

            var html = '<span class="firstText">' + c + '</span><span class="readMore">Читати далі <img src="img/cross.png" alt="" class="rotate" /> </span><span class="secondText">' + h + '</span>';

            $(this).html(html);
        }
    });
    $(".readMore").click(function() {

        if ($(this).next().hasClass("open")) {
            $(this).next().removeClass('open');
        } else {
            $(this).next().addClass('open');
        }
        if ($('.secondText').hasClass('open'))
            {
                $('.rotate')
                .addClass('rotate rot');
            } else {
                $('.rotate')
                .removeClass('rot');
            }

    });
});
