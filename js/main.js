$( "#mce-EMAIL" ).on('input', function() {
    if ($("#mce-EMAIL").val() != "") {
        $("#mce-EMAIL-required").hide();
    }
    else {
        $("#mce-EMAIL-required").show();
    }
});

$( "#mce-FNAME" ).on('input', function() {
    if ($("#mce-FNAME").val() != "") {
        $("#mce-FNAME-required").hide();
    }
    else {
        $("#mce-FNAME-required").show();
    }
});

$( "#mce-LNAME" ).on('input', function() {
    if ($("#mce-LNAME").val() != "") {
        $("#mce-LNAME-required").hide();
    }
    else {
        $("#mce-LNAME-required").show();
    }
});
$(document).ready(function() {
    function scrollTo(div) {
        $('html, body').animate({
            scrollTop: $("#" + div).offset().top
        }, 250);
        window.location.hash = $("#" + div).attr("id");
    };

    $( "#sign_up_button" ).on('click', function() {
        scrollTo("signup");
    });
    $( "a.scrollable" ).on('click', function(event) {
        scrollTo($(this).attr("href").substring(1));
    });

    $( "#go_back" ).on('click', function() {
        document.location.href= "/";
    });

});