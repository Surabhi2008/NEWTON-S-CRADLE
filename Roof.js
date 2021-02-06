class Roof
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.roofWidth=200;
		this.roofHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		
		
		
		

		this.roofBody=Bodies.rectangle(this.x+this.roofWidth/2, this.y-this.roofHeight/2, this.wallThickness, this.roofHeight, {isStatic:true})
		Matter.Body.setAngle(this.roofBody, -1*this.angle);
	
		World.add(world, this.roofBody);

		
    }}
    
    display()
	{
			
			var posRoof=this.roofBody.position;

			

			

			push()
			translate(posRoof.x, posRoof.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.roofHeight);
			pop()

			
			
	}

