// write your JavaScript here

var my_canvas = document.getElementById("canvas");

if(!my_canvas)
        { console.log('Canvas not found.'); }
    else {
        // if getContext method doesnt exist (old browser)
    	if(!canvas.getContext)
            { console.log('Context not supported.'); }
        else {

		var context = my_canvas.getContext("2d");


		
function drawStar(cx,cy,spikes,outerRadius,innerRadius,colored){
		  var rot=Math.PI/2*3;
		  var x=cx;
		  var y=cy;
		  var step=Math.PI/spikes;

		  context.strokeStyle="#000";
		  context.beginPath();
		  context.moveTo(cx,cy-outerRadius);
		  for(i=0;i<spikes;i++){
			x=cx+Math.cos(rot)*outerRadius;
			y=cy+Math.sin(rot)*outerRadius;
			context.lineTo(x,y);
			rot+=step;

			x=cx+Math.cos(rot)*innerRadius;
			y=cy+Math.sin(rot)*innerRadius;
			context.lineTo(x,y);
			rot+=step;
		  }
		  context.lineTo(cx,cy-outerRadius);
		  if (colored) {
			  context.fillStyle = "#0E9923";
			  context.fill();
			  context.fillStyle = "black";
		  }
		  context.closePath();
		  context.stroke();
		  context.fillStyle = "#D98E25";
		}

        function rateSkill(x, y, n) {
            var Xsep = 25;
            var xtemp = x;
            var ytemp = y;
            var i;
            for(i=0; i<5; i++) {
				if (i>=n) {
					drawStar(xtemp+(i*Xsep),ytemp,5,10,5);
				}
				else drawStar((xtemp+(i*Xsep)),ytemp,5,10,5,true);
            }
        }
		context.fillStyle = "#D98E25";
		context.font = "16px Garamond";
		context.fillText("HTML/CSS", 40, 40);
		rateSkill(135,40,3);
		context.fillText("Javascript", 40, 75);
		rateSkill(135, 75, 2);
		context.fillText("jQuery", 40, 110);
		rateSkill(135, 110, 1);
		context.fillText("Technical ", 40, 145);
		context.fillText("writing", 40, 160);
		rateSkill(135, 145, 2);
		context.fillText("Python", 270, 40);
		rateSkill(350, 40, 3);
		context.fillText("C++", 270, 75);
		rateSkill(350, 75, 3);
		context.fillText("Ruby on ", 270, 110);
		context.fillText("Rails", 270, 125);
		rateSkill(350, 110, 1);
		context.fillText("IT tech", 270, 145);
		context.fillText("support", 270, 160);
		rateSkill(350, 145, 3);
		
		/* var slwidth; 
		var slheight;		
		slwidth = $(".panel").css("width");
		slheight = $(".panel").css("height");
		$("#canvas2").css("width", slwidth);
		$("#canvas2").css("height", slheight);
		
		ctx.fillStyle = "#7BBCD1";
		ctx.font = "24px Garamond";
		ctx.textAlign = "center";
		ctx.fillText("Desolation", slwidth/3, slheight/4);
		ctx.fillText("(Coming Soon)", slwidth/4, slheight/3); */
		
		$("#desolation").hover( function() {
			$("#desolation-text").animate({bottom:'100px'},1000);
		}, function() {
			$("#desolation-text").animate({bottom:'-200px'},1000);
		});
		$("#github").hover( function() {
			$("#github-text").animate({bottom:'100px'},1000);
		}, function() {
			$("#github-text").animate({bottom:'-200px'},1000);
		});
		$("#coilgun").hover( function() {
			$("#coilgun-text").animate({bottom:'100px'},1000);
		}, function() {
			$("#coilgun-text").animate({bottom:'-200px'},1000);
		});
}
}