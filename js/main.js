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
