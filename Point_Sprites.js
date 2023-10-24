class Point_Sprites{

	constructor(img, x,speed){
		this.img=img;
		this.x=x;
		this.speed=speed;
		this.y=0-img.height;
	}
	move(){
		this.y+=this.speed;
	}
	
	draw(ctx){
		ctx.beginPath();
		ctx.drawImage(this.img, this.x, this.y);
		ctx.closePath();
	}
}