// write JavaScript here

console.log($('p').text());

$(document).ready(function(){
	console.log($('h1').text());
	$('h1').lettering();

});

$('.video').hover(function(){
	$('h1').addClass("fade-in");
	$('.video').addClass("colorize");
});