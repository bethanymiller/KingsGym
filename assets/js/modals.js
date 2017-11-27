"use strict";

var kings = kings || {};

kings.modals = (function () {
    var modalImages, modalDialog, modalImage, modalCaption, modalClose, modalBack, modalForward, body;

    function initialize() {
        modalImages = $("img.popup-image")
        modalDialog = $("#modal-dialog");
        modalImage = $("#modal-image");
        modalCaption = $("#modal-caption");
        modalClose = $("#modal-close");
        modalBack = $("#modal-back");
        modalForward = $("#modal-forward");
        body = $("body");

        initModals();
    }

    function initModals() {
        modalImages.on("click", function () {
            var originalImage = $(this);

            modalImage.attr("src", originalImage.attr("src"));
            modalCaption.html(originalImage.data("caption"));

            setUpBackForwardLinks(originalImage);

            body.addClass("modal-open");
            modalDialog.show();
        });

        modalClose.on("click", function () {
            modalDialog.hide();
            body.removeClass("modal-open");
        });
    }

    function setUpBackForwardLinks(originalImage) {
        if (modalImages.length == 1) {
            return;
        }

        var clickedImageIndex = modalImages.index(originalImage);

        if (clickedImageIndex < 0) {
            return;
        }

        if (clickedImageIndex > 0) {
            modalBack.off("click").on("click", function () { modalImages[clickedImageIndex - 1].click(); });

            var nextIndex = (clickedImageIndex == modalImages.length - 1) ? 0 : clickedImageIndex + 1;
            modalForward.off("click").on("click", function () { modalImages[nextIndex].click(); });
        }
        else if (clickedImageIndex == 0) {
            modalBack.off("click").on("click", function () { modalImages[modalImages.length - 1].click(); });
            modalForward.off("click").on("click", function () { modalImages[1].click(); });
        }

        modalBack.show();
        modalForward.show();
    }

    return {
        "initialize": initialize
    };
})();