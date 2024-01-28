function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

$(document).ready(function () {
    // Check if the user has visited the site before using jQuery Cookie
    // var hasVisited = $.cookie("hasVisited");
    if (getCookie("hasVisited") != null) {
        console.log('not first time');
    } else {
        console.log('first time');
        var popup = $("<div>").addClass("popup").html("Welcome to our website! This is your first visit.");
        var closeButton = $("<span>").addClass("close-button").html("&times;");

        closeButton.on("click", function () {
            popup.remove();
        });

        popup.append(closeButton);
        $("body").append(popup);
        setCookie("hasVisited", new Date(), 365);
    }
});
