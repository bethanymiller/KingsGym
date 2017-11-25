var boot = boot || {};

boot.home = (function(){
    var banner, slideUrls, slideCount = 0;
    
    function initialize(){
        banner = $("#lower-scroll");
        slideUrls = $("#slide-urls li");

        changeCarousel();
    }

    function changeCarousel() {
        if(slideCount >= slideUrls.length){
            slideCount = 0;
        }

        var url = $(slideUrls[slideCount]).text();
        banner.css("background-image", "url(" + url + ")");
        slideCount++;

        setTimeout(changeCarousel, 5000);
    }

    return {
        "initialize": initialize
    };
})();