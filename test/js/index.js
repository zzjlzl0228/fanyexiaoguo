$(function() {
	var srcList = ["./img/1.png", "./img/2.png", "./img/3.png", "./img/4.png", "./img/5.png", "./img/6.png"];
	var index = 0;
	$("#preBtn").click(function(evt) {
		index--;
		if (index <= 0) index = 0;
		$("#mypic").attr("src", srcList[index]);
		// console.log(srcList[index]);
		$("#mypic").load();
		$(this).addClass('left');

	});
	$("#nextBtn").click(function(evt) {
		index++;
		if (index + 1 > 6) index = 5;
		$("#mypic").attr('src',srcList[index]);
		// console.log(srcList[index]);
		$("#mypic").load();
		$(this).removeClass('left').addClass('right');
	});
	
	
});
