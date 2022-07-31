$(document).ready(function () {
    // console.log("hello");
    $(".carousel").carousel({
        interval: 500
    });

    $(window).scroll(function () {
        let getsscrolltop = $(this).scrollTop();
        if (getsscrolltop >= 220) {
            $(".infotexts").addClass("fromlefts");
            $(".infotopics").addClass("fromrights");
        } else {
            $(".infotexts").removeClass("fromlefts");
            $(".infotopics").removeClass("fromrights");
        }
    });
});