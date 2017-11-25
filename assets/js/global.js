"use strict";

var kings = kings || {};

kings.global = (function () {
    var classNames, mainNav, mainNavHeight;

    function initialize() {
        classNames = {
            "stickyNav": "sticky-nav"
        };

        mainNav = $("#main-navigation");
        mainNavHeight = mainNav.height();

        setUpScrollHeader();
    }

    function setUpScrollHeader() {
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > mainNavHeight) {
                mainNav.addClass(classNames.stickyNav);
            } else {
                mainNav.removeClass(classNames.stickyNav);
            }
        });
    }

    return {
        "initialize": initialize
    };
})();