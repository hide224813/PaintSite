$(function(){
	draw();
});

function draw(){
	var canvasB = document.getElementById('Bold');
	if(!canvasB || !canvasB.getContext) return false;
	var stctx = canvasB.getContext('2d');

	var hankei = 5;
	var startAngle = 0;
	var endAngle = 360 * Math.PI / 180;
	var borderWidth = 5;
	var isBold = false;

	var penBold = new Image();
	penBold.src = "./penBold01.png"

	penBold.onload = function(){
		stctx.drawImage(penBold,0,0);
	}

	stctx.beginPath();
	stctx.arc(50,50,hankei,startAngle,endAngle,false);
	stctx.fill();

	$('#Bold').on('touchstart mousedown',function(e){
		isBold = true;
	})
	.on('touchmove mousemove',function(e){
		if(!isBold)return;
		hankei=Math.sqrt(Math.pow(50-e.pageX + $(this).offset().left + borderWidth,2)+Math.pow(50-e.pageY + $(this).offset().top + borderWidth,2));
		stctx.clearRect(0,0,canvasB.width,canvasB.height);
		stctx.beginPath();
		stctx.arc(50,50,hankei,startAngle,endAngle,false);
		stctx.fill();
		stctx.drawImage(penBold,0,0);
	})
	.on('touchup mouseup',function(e){
		isBold = false;
	})
	.on('mouseleave mouseleave',function(e){
		isBold = false;
	})

//ここまでが字の太さ

//ここからが色
	var canvasC = document.getElementById('Color');
	if(!canvasC || !canvasC.getContext) return false;
	var cctx = canvasC.getContext('2d');

	var rl = 254, gl = 254, bl = 254 , flag0 = false;

	function R(cctx){

	var g1 = cctx.createLinearGradient(0,0,255,0)
	g1.addColorStop(0.0,"rgb(0,0,0)");
	g1.addColorStop(1.0,"rgb(255,0,0)");
	cctx.fillStyle = g1;

	cctx.fillRect(0,0,255,50);

	cctx.beginPath;
	cctx.moveTo(0,25);
	cctx.lineTo(255,25);
	cctx.stroke();

	}

	function G(cctx){

	var g2 = cctx.createLinearGradient(0,50,255,50)
	g2.addColorStop(0.0,"rgb(0,0,0)");
	g2.addColorStop(1.0,"rgb(0,255,0)");
	cctx.fillStyle = g2;

	cctx.fillRect(0,50,255,50);

	cctx.beginPath;
	cctx.moveTo(0,75);
	cctx.lineTo(255,75);
	cctx.stroke();

	}

	function B(cctx){

	var g3 = cctx.createLinearGradient(0,100,255,100)
	g3.addColorStop(0.0,"rgb(0,0,0)");
	g3.addColorStop(1.0,"rgb(0,0,255)");
	cctx.fillStyle = g3;

	cctx.fillRect(0,100,255,50);

	cctx.beginPath;
	cctx.moveTo(0,125);
	cctx.lineTo(255,125);
	cctx.stroke();

	}

	function RGB(cctx){

	cctx.fillStyle = "rgb(" + rl + "," + gl + "," + bl + ")";
	cctx.fillRect(255,0,25,150);

	}

	R(cctx);
	G(cctx);
	B(cctx);
	RGB(cctx);

	cctx.fillStyle = "gray";

	cctx.beginPath;
	cctx.moveTo(rl,10);
	cctx.lineTo(rl,40);
	cctx.stroke();

	cctx.beginPath;
	cctx.moveTo(gl,60);
	cctx.lineTo(gl,90);
	cctx.stroke();

	cctx.beginPath;
	cctx.moveTo(bl,110);
	cctx.lineTo(bl,140);
	cctx.stroke();



	$('#Color').on('touchstart mousedown',function(e){
		flag0 = true;
	})
	.on('touchmove mousemove',function(e){
	if(!flag0)return;
	if(e.pageX - $(this).offset().left - borderWidth<255 && e.pageY - $(this).offset().top - borderWidth <= 50){

		rl = e.pageX - $(this).offset().left - borderWidth;

		rl = Math.round(rl);

		if(rl < 0)rl = 0;

		cctx.clearRect(0,0,255,canvasC.height/3);
		R(cctx);

		cctx.beginPath();
		cctx.moveTo(rl,10);
		cctx.lineTo(rl,40);
		cctx.stroke();

		RGB(cctx);

	}else if(e.pageX - $(this).offset().left - borderWidth<255 && e.pageY - $(this).offset().top - borderWidth > 50 &&

		 e.pageY - $(this).offset().top - borderWidth <= 100){

		gl = e.pageX - $(this).offset().left - borderWidth;

		gl = Math.round(gl);

		if(gl < 0)gl = 0;

		cctx.clearRect(0,50,255,canvasC.height/3);
		G(cctx);

		cctx.beginPath();
		cctx.moveTo(gl,60);
		cctx.lineTo(gl,90);
		cctx.stroke();

		RGB(cctx);

	}else if(e.pageX - $(this).offset().left - borderWidth<255 && e.pageY - $(this).offset().top - borderWidth > 100){

		bl = e.pageX - $(this).offset().left - borderWidth;

		bl = Math.round(bl);

		if(bl < 0)bl = 0;

		cctx.clearRect(0,100,255,canvasC.height/3);
		B(cctx);

		cctx.beginPath();
		cctx.moveTo(bl,110);
		cctx.lineTo(bl,140);
		cctx.stroke();

		RGB(cctx);

	}else{
		flag0 = false;
	}

//	console.log(rl,gl,bl);

	})
	.on('touchup mouseup',function(e){
	flag0 = false;
	})
	.on('mouseleave mouseleave',function(e){
	flag0 = false;
	})


//ここまでが色

//ここからがテキストの下処理

//ここからが描き方
	var canvas = document.getElementById('mycanvas');
	if(!canvas || !canvas.getContext) return false;
	var ctx = canvas.getContext('2d');
	

	var startX,
	    startY,
	    x,
	    y,
	    widthX,
	    heightY,
	    z,
//	    borderWidth = 5;
	　　isDrawing = false,
	    stack01;




	$('#mycanvas').on('touchstart mousedown',function(e){
		e.preventDefault();
		isDrawing = true;
		ctx.lineWidth = hankei*2;
		ctx.strokeStyle = "rgb(" + rl + "," + gl + "," + bl + ")";
		ctx.fillStyle = "rgb(" + rl + "," + gl + "," + bl + ")";

		startX = e.pageX - $(this).offset().left - borderWidth ||
			 e.originalEvent.changedTouches[0].pageX - $(this).offset().left - borderWidth;
		startY = e.pageY - $(this).offset().top - borderWidth ||
			 e.originalEvent.changedTouches[0].pageY - $(this).offset().top - borderWidth;

		stack01 = ctx.getImageData(0,0,canvas.width,canvas.height);

		if($("#PaintStyle").val() == "rakugaki"){
		ctx.beginPath();
		ctx.arc(startX,startY,hankei,0,360 * Math.PI/180,false);
		ctx.fill();
		}

	})
	.on('touchmove mousemove',function(e){
		if (!isDrawing) return;
		x = e.pageX - $(this).offset().left - borderWidth ||
			 e.originalEvent.changedTouches[0].pageX - $(this).offset().left - borderWidth;
		y = e.pageY - $(this).offset().top - borderWidth ||
			 e.originalEvent.changedTouches[0].pageY - $(this).offset().top - borderWidth;
		if($("#PaintStyle").val() == "rakugaki2"){
		ctx.beginPath();
		ctx.moveTo(startX,startY);
		ctx.lineTo(x,y);
		ctx.stroke();
		startX = x;
		startY = y;
		}
		if($("#PaintStyle").val() == "rakugaki"){
		ctx.beginPath();
		ctx.arc(x,y,hankei,0,360 * Math.PI/180,false);
		ctx.fill();
		}
		if($("#PaintStyle").val() == "line"){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.putImageData(stack01,0,0);
		ctx.beginPath();
		ctx.moveTo(startX,startY);
		ctx.lineTo(x,y);
		ctx.stroke();
		}
		if($("#PaintStyle").val() == "delete"){
		ctx.clearRect(e.pageX - $(this).offset().left - borderWidth -(hankei/2),
			      e.pageY - $(this).offset().top - borderWidth -(hankei/2),hankei,hankei);
		}
		if($("#PaintStyle").val() == "Rect1"){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.putImageData(stack01,0,0);
		ctx.beginPath();
		ctx.strokeRect(startX,startY,x-startX,y-startY);
		}
		if($("#PaintStyle").val() == "Rect2"){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.putImageData(stack01,0,0);
		ctx.beginPath();
		ctx.fillRect(startX,startY,x-startX,y-startY);
		}
		if($("#PaintStyle").val() == "Circle1"){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.putImageData(stack01,0,0);
		widthX = Math.abs(startX-x);
		heightY = Math.abs(startY-y);
		if(widthX > heightY){z =widthX}else{z = heightY};
		ctx.beginPath();
		ctx.arc(startX, startY, z , 0 , 360 * Math.PI/180,false);
		ctx.stroke();
		}
		if($("#PaintStyle").val() == "Circle2"){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.putImageData(stack01,0,0);
		widthX = Math.abs(startX-x);
		heightY = Math.abs(startY-y);
		if(widthX > heightY){z =widthX}else{z = heightY};
		ctx.beginPath();
		ctx.arc(startX, startY, z , 0 , 360 * Math.PI/180,false);
//		ctx.stroke();
		ctx.fill();
		}
	})
	.on('touchup mouseup',function(e){
		isDrawing = false;
		x = e.pageX - $(this).offset().left - borderWidth ||
			 e.originalEvent.changedTouches[0].pageX - $(this).offset().left - borderWidth;
		y = e.pageY - $(this).offset().top - borderWidth ||
			 e.originalEvent.changedTouches[0].pageY - $(this).offset().top - borderWidth;
	})
	.on('mouseleave mouseleave',function(e){
//		if($("input[name='painttype']:checked").val() == "rakugaki"){
		isDrawing = false;
//		}
	});

//マウスのドラッグを使わない描き物

//ここからが後処理

		var capnum = 0;
		var maincap = document.getElementById('main');
		if(!maincap || !maincap.getContext) return false;
		var main = maincap.getContext('2d');

		var tabcap = document.getElementById('tab');
		if(!tabcap || !tabcap.getContext) return false;
		var tab = tabcap.getContext('2d');

		function savename(capnum){
			if(capnum+1 < 10){return '0' + (capnum+1) + '.png'}
			else {return (capnum+1) +'.png'}
		}

	$('#erase').click(function() {
		if(!confirm('本当に消去しますか?')) return;
		ctx.clearRect(0,0,canvas.width,canvas.height);
		$("#clothKind").val("defalt");
	});
	$('#save').click(function() {
		var img = $('<img id="cap' + capnum + '">').attr({
			width: 100,
			height: 100,
			src: canvas.toDataURL()
		});
		var link = $('<a>').attr({
			href: canvas.toDataURL().replace('image/png','application/octet-stream'),
			download:savename(capnum)
		});
		$('#Warning').append("<p>※このファイルはあくまで画像ファイルの元です。"+
			"<br>直接LINEに送らないでください。誤って大量のコードが送られる可能性があります。"+
			"<br>一旦ダウンロードしてからその画像ファイルを正規のLINEスタンプの申請に出してください。</p>");
		$('#gallery').append(link.append(img.addClass('thumbnail')));
	});

}