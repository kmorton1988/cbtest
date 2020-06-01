var FALSE_FUNCTION = new Function("return false");
var key_prefix = "#key";

var keys_pressed = 0;
var keys = new Set();

$(document).bind("keydown", function (b) {
    if ($("#soundSelect").val() != "") {
        var a = new Audio("sounds/" + $("#soundSelect").val());
        a.play();
    }
});

$(document).bind("keyup", function (b) {
    var a = b.keyCode ? b.keyCode : b.which;

    if (a == 186 || a == 59) {
        a = "colon";
    }
    if (a == 189) {
        a = 173;
    }
    if (a == 187) {
        a = 61;
    }
    if ($(key_prefix + a)) {
        key_highlight(a);
    }
    if ($(key_prefix + a + "b")) {
        key_highlight(a + "b");
    }

    if(!keys.has(a)) {
        keys.add(a);
        keys_pressed++;
        document.getElementById("loading_percent").innerHTML = Math.floor((keys_pressed / 60) * 100) + '%';
        console.log(keys_pressed / 60);
    }
});

$(document).ready(function () {
    disableShortcuts();
    reset_keyboard();
});

function key_highlight(a) {
    key_clear(a);

    // when pressing down super key (91), highlight caps lock (20) instead
    if (a == 91) {
        $(key_prefix + 20).addClass("key_highlight");
        setTimeout("key_pressed('" + 20 + "')", 300);
    }

    else {
        $(key_prefix + a).addClass("key_highlight");
        setTimeout("key_pressed('" + a + "')", 300);
    }
}

function key_pressed(a) {
    key_clear(a);
    
    // when pressing down super key (91), highlight caps lock (20) instead
    if (a == 91) {
        new_class = "key_pressed";
        $(key_prefix + 20).addClass(new_class);
        
        return;
    }

    // changed a == 13 (enter) to key_pressed instead of key_pressed_m    
    if (a == 16 || a == 17 || a == 18 || a.match(/b$/)) {
        new_class = "key_pressed_m";        
    }
    else {
        new_class = "key_pressed";       
    }

    $(key_prefix + a).addClass(new_class);
}

function key_clear(a) {
    $(key_prefix + a).removeClass("key_un key_pressed key_pressed_m key_highlight");
}

function reset_keyboard() {
    var a = $(".key_pressed");
    a.each(function (b, c) {
        c.className = "key_un";
    });
    a = $(".key_highlight");
    a.each(function (b, c) {
        c.className = "key_un";
    });
    $("#testarea").attr("value", "");
    $("#testarea").focus();
}

function go_testarea() {
    $("#testarea").focus();
}

function disableShortcuts() {
    document.onhelp = FALSE_FUNCTION;
    window.onhelp = FALSE_FUNCTION;
    document.onkeydown = function b() {
        if (typeof event != "undefined") {
            if (event.keyCode >= 112 && event.keyCode <= 123) {
                event.keyCode = 0;
                return false;
            }
        }
    };
    for (var a = 1; a < 13; a++) {
        shortcut.add("f" + a, FALSE_FUNCTION);
    }
    shortcut.add("'", FALSE_FUNCTION);
}
