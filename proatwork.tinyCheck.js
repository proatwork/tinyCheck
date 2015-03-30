!function(e) {
    e.fn.tinyCheck = function() {
        this.each(function() {
            var e = jQuery(this),
                a = jQuery(this).attr("class"),
                t, n, d, r = "";
            if (e.hasClass("tinyCheck-done")) return void(e.is(":checked") && e.parent().addClass("checked"));
            e.addClass("tinyCheck-done");
            var c = e.attr("type");
            if (e.attr("name")){
                var s = e.attr("name").replace(/\W/g, "");
            }
            else {
                var s = "YOUR_INPUT_IS_MISSING_A_NAME";
            }
            if (e.data("icon-checked") && e.data("icon-unchecked")) {
                n = e.data("icon-checked");
                d = e.data("icon-unchecked");
                r = " hasIcon", a += r
            }
            if (!a) var a = "";
            if (!n) var n = "";
            if (!d) var d = "";

            if (e.is(":checked")) {
                t = "checked";
                a += " " + n
            } else {
                t = "";
                a += " " + d
            }
            e.wrap('<span class="' + a + " name-" + s + " tinyCheck custom-" + c + " " + t + '" />').after('<ins class="myHelper"></ins>'), "radio" == c ? e.on("change", function() {
                jQuery(".name-" + s).removeClass("checked").removeClass(n).addClass(d), e.parent().addClass("checked").removeClass(d).addClass(n)
            }) : "checkbox" == c && e.on("change", function() {
                e.is(":checked") ? e.parent().addClass("checked").removeClass(d).addClass(n) : e.parent().removeClass("checked").removeClass(n).addClass(d)
            })
        })
    }
}(jQuery);