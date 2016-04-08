var t;
var timer_on;

function stoptime() {
	if (timer_on) {
		clearTimeout(t);
		timer_on = false;
	}
}

function starttime() {
	t = setTimeout("hideall();", 500);
	timer_on = true;
}

function show(number) {
	var menu = nav[number];
	var parent = "nav" + number;
	stoptime();
	hideall(menu);
	if (document.layers) {
		document.layers[menu].visibility = "show";
		document.layers[menu].left = document.layers[parent].offsetLeft + "px";
		document.layers[menu].top = document.layers[parent].offsetHeight + "px";
	} else if (document.all) {
		document.all[menu].style.visibility = "visible";
		document.all[menu].style.left = document.all[parent].offsetLeft + "px";
		document.all[menu].style.top = document.all[parent].offsetHeight + "px";
	} else if (document.getElementById) {
		document.getElementById(menu).style.visibility = "visible";
		document.getElementById(menu).style.left = document.getElementById(parent).offsetLeft + "px";
		document.getElementById(menu).style.top = document.getElementById(parent).offsetHeight + "px";
	}
}

function hideall(except) {
	tbool = false;
	for (var i = 0; i < nav.length; i++) {
		if (nav[i] != except) {
			if (document.layers) {
				document.layers[nav[i]].visibility = "hide";
			} else if (document.all) {
				document.all[nav[i]].style.visibility = "hidden";
			} else if (document.getElementById) {
				document.getElementById(nav[i]).style.visibility = "hidden";
			}
		}
	}
}

function readStyle(element, property) {
	if (element.style[property]) {
		return element.style[property];
	} else if (element.currentStyle) {
		return element.currentStyle[property];
	} else if (document.defaultView && document.defaultView.getComputedStyle) {
		var style = document.defaultView.getComputedStyle(element, null);
		return style.getPropertyValue(property);
	} else {
		return null;
	}
}