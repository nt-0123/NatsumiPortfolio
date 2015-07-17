
var $colorbox = $(".colorbox");
if($colorbox.size() > 0) {
	$colorbox.colorbox({iframe:true, width:"80%", height:"80%"});
}

$('.tab').dataExtend('tab');

$('.toggle').dataExtend('extraToggleClass');


var $content = $('#top, #about, #work, #contact');

//scroll
$content.each(function(i){
	var top = parseInt($(this).offset().top);

	$('[href="#' + $(this).prop('id') + '"]').on('click', function() {
		$('html,body').animate({scrollTop: top}, 2000, 'easeOutQuart');
		return false;
	});
});

//parallax
$content.each(function(i){
	var top = parseInt($(this).offset().top);
	var height = parseInt($(this).height());
	var init = -(top + height);
	$(this).css({
		top: init
	});
	$(window).parallax({
		parallax : $(this),
		type : 'scrollSpeed',
		style : 'top',
		fixPosition : top,
		speed : 0.5,
		adjustment : top
	});
});



// スクロールストップ処理
function scrollStop() {$(window).queue([]).stop();}

// マウスでスクロールした時に実行
if (window.addEventListener) window.addEventListener('DOMMouseScroll', scrollStop, false);
window.onmousewheel = document.onmousewheel = scrollStop;
