class Ball {
    constructor(xVal = 0,yVal = 0,radius = 10, color = "#000000") {
        this.xVal = xVal;
        this.yVal = yVal;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.xVal, this.yVal, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.strokeStyle = this.color;
    }
}

function setUpCanvas(w, h) {
	canvas = document.querySelector("#myCanvas");
	canvas.width = w;
	canvas.height = h;
	canvas.style.border = "1px dotted brown";
	ctx = canvas.getContext("2d");
}

function bounce() {
    var t = Math.floor (new Date().getTime()/10);

    if(t%400 <= 390 && t%400 >= 389) {
        cp = colorPicker();
    }

    ctx.save();
    ctx.clearRect(0, 0, 800, 800);

    for (var i = 1; i <= 5; i++) {
        var delay = t + i * 5;

        var xProjectile = (delay-200)%800;
        var yProjectile = (1/100) * Math.pow(delay%400 -200, 2) + 400; 

        var myBall = new Ball(xProjectile, yProjectile, 5*i, cp);
        myBall.draw();
    }

    requestAnimationFrame(bounce);
}

function colorPicker(){
    var r = Math.floor(Math.random() * 7 );
    return colorsArray[r];
}

var colorsArray = ["#e51414", "#f9a82d", "#fdef69", "#78f048", "#0954f2", "#abf958", "#816dfd"];

setUpCanvas(800, 800);
var cp = '#000';

requestAnimationFrame(bounce);
