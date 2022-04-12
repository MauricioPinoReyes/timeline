
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "0%");
	$(".2011").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "9%");
	$(".2012").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "18.5%");
	$(".2013").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "28.5%");
	$(".2014").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "38.5%");
	$(".2015").addClass("active").siblings().removeClass("active");
});

$(".step06").click( function() {
	$("#line-progress").css("width", "48.5%");
	$(".2016").addClass("active").siblings().removeClass("active");
});

$(".step07").click( function() {
	$("#line-progress").css("width", "58.5%");
	$(".2017").addClass("active").siblings().removeClass("active");
});

$(".step08").click( function() {
	$("#line-progress").css("width", "69.5%");
	$(".2018").addClass("active").siblings().removeClass("active");
});

$(".step09").click( function() {
	$("#line-progress").css("width", "80.5%");
	$(".2019").addClass("active").siblings().removeClass("active");
});

$(".step10").click( function() {
	$("#line-progress").css("width", "89.5%");
	$(".2020").addClass("active").siblings().removeClass("active");
});

$(".step11").click( function() {
	$("#line-progress").css("width", "100%");
	$(".2021").addClass("active").siblings().removeClass("active");
});

