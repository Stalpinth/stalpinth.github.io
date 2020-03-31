function getWidth() {
	return Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}

function getHeight() {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.documentElement.clientHeight
	);
}
	
function checkNavTrans() {
	if (scrollY > 0) {
		document.getElementById("navbar").classList.remove("navTrans");
		document.documentElement.style.setProperty('--nav-col', '#1FB2CC');
	} else {
		document.getElementById("navbar").classList.add("navTrans");
		document.documentElement.style.setProperty('--nav-col', '#ffffff');
	}
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
	  // Prevent default anchor click behavior
	  event.preventDefault();

	  // Store hash
	  var hash = this.hash;

	  // Using jQuery's animate() method to add smooth page scroll
	  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 800, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
	  });
	} // End if
  });
});

var isInViewport = function (elem) {
	var bounding = elem.getBoundingClientRect();
	return (
		/*bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)*/
		bounding.bottom >= 60 &&
		bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
	);
};

var isInViewportOld = function (elem) {
	var bounding = elem.getBoundingClientRect();
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

function getInnerWidth() {
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	return w;
}

function getInnerHeight() {
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	
	return h;
}

function getPercentage(num, per)
{
  return (num/100)*per;
}

/*function resize() {
	document.getElementById("setheight").style.height = getHeight() + "px";
}

window.onresize = resize;

$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});*/

function openNav() {
	width = document.getElementById("sidenav").style.width;
	if (width == "0px") {
		width = "200px";
	} else {
		width = "0px";
	}
	document.getElementById("sidenav").style.width = width;
}

function alertmsg(type, msg) {
	if (type == "danger") {
		elem = document.getElementById("danger-alert");
		document.getElementById("alert-msg-danger").innerHTML = msg;
	}
	
	elem.style.opacity = "1";
}

function closealertdanger() {
	document.getElementById("danger-alert").style.opacity = "0";
}