var textObj=[];
var n=20;
function setup() { 
  createCanvas(windowWidth,windowHeight);
	textAlign(CENTER);
	textFont('Book Antiqua');
	noStroke();
	fill(255,50);
	colorMode(HSB,360,100,100);
	var origin="SOGANG UNIVERSITY ART & TECHNOLOGY CREATION BEYOND IMAGINATION";
	var originArr=split(origin,' ');
	for(var i=0;i<50;i++)
	{
		var init=originArr[int(random(originArr.length))];
		textObj.push(new textobject(init));
	}
}

function draw() { 
	var i;
	n=min(map(mouseY,0,height,0,40),40);
	background(frameCount%360,60,70);
	for(i=0;i<n;i++)
	{
		textObj[i].render();
	}
	if(mouseIsPressed)
	{
		for(i=0;i<50;i++)
		{
			textObj[i].rotate();
		}
	}
}

function textobject(initTxt)
{
	this.txt=initTxt;
	this.x=random(width);
	this.y=random(height);
	this.r=random(TWO_PI);
	this.size=random(10,40);
	this.render=function()
	{
		push();
		translate(this.x,this.y);
		rotate(this.r);
		textSize(this.size);
		text(this.txt,0,0);
		pop();
	}
	this.rotate=function()
	{
		this.r+=0.1;
	}
}
