$(document).ready(function () {
    function initBgCover(context) {
        if (!context) context = $('body');
        context.find('.bg-cover').each(function () {
            var holder = $(this);
            var image = holder.find('> img').hide();
            var imageSrc = image.prop('src');
            holder.css({
                backgroundImage: 'url(' + imageSrc + ')',
            });
        });
    }

    initBgCover();

    //   fancybox
    $('.fancybox').fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

     //aos
     AOS.init({
        duration: 1000
    });

});