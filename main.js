var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    scale: 2
});


// $('.img-parallax').each(function () {
//     var img = $(this);
//     var imgParent = $(this).parent();

//     function parallaxImg() {
//         var speed = img.data('speed');
//         var imgY = imgParent.offset().top;
//         var winY = $(this).scrollTop();
//         var winH = $(this).height();
//         var parentH = imgParent.innerHeight();


//         var winBottom = winY + winH;

//         if (winBottom > imgY && winY < imgY + parentH) {
//             var imgBottom = ((winBottom - imgY) * speed);
//             var imgTop = winH + parentH;
//             var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
//         }
//         img.css({
//             top: imgPercent + '%',
//             transform: 'translate(-50%, -' + imgPercent + '%)'
//         });
//     }
//     $(document).on({
//         scroll: function () {
//             parallaxImg();
//         },
//         ready: function () {
//             parallaxImg();
//         }
//     });
// });