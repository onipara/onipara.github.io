/*
Smart Drawer
Author: KEITA HIRAI
URL: keitahirai.net
*/

$(function(){
	// Browser, UserAgent
	var scrollY,
		touch = ("ontouchstart" in document) ? "touchstart" : "click",
		ua = navigator.userAgent.toLowerCase(),
		android = ua.indexOf("android") >= 0,
		ie10 = ua.indexOf("msie 10") >= 0;

	if (android) {
		$("body").append('<span id="sd-overlay-android"></span>');
	}
	else {
		$("body").append('<span id="sd-overlay"></span>');
	}

	// Overlay, Drawer
	var overlay = $("#sd-overlay"),
		overlayAndroid = $("#sd-overlay-android"),
		sd = $("#sd");

	// Open
	$(".sd-trigger").on(touch, function(e) {
		scrollY = $(window).scrollTop();

		$("body").css({
			position: "fixed",
			top: -scrollY
		});

		if (ie10) {
			sd.addClass("block-ie10");
		}
		else {
			sd.addClass("block");
		}

		overlay.addClass("block");
		overlayAndroid.show();
		e.preventDefault();
		return false;
	});

	// Close
	$("#sd .close, #sd-overlay, #sd-overlay-android").on(touch, function(e) {
		$("body").attr("style", "");
		$("html, body").prop({scrollTop: scrollY});

		sd.removeClass("block block-ie10");
		overlay.removeClass("block");
		overlayAndroid.hide();
		e.preventDefault();
		return false;
	});
});
