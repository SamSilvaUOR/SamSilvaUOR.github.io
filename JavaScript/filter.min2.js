


// $(window).load(function() {
//     var a = $(".animate-grid .gallary-thumbs");
//     a.isotope({
//         filter: "*",
//         transitionDuration: "0.2s"
//     }), $(".animate-grid .categories a").click(function() {
//         $(".animate-grid .categories .active").removeClass("active"), $(this).addClass("active");
//         var b = $(this).attr("data-filter");
//         return a.isotope({
//             filter: b
//         }), !1
//     })
// });


// Look at https://isotope.metafizzy.co/v1/docs/layout-modes.html for help!

$(window).load(function() {
    var a = $(".animate-grid .gallary-thumbs");
    a.isotope({
        filter: "*",
        transitionDuration: "0.2s",
         // layoutMode : 'fitRows',
         masonry:{},
    }), $(".animate-grid .categories a").click(function() {
        $(".animate-grid .categories .active").removeClass("active"), $(this).addClass("active");
        var b = $(this).attr("data-filter");
        return a.isotope({
            filter: b
        }), !1
    })
});