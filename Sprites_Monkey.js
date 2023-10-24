class Sprites_Monkey{
    constructor(x,y,speed,img,imgWidth,imgHeight,totalFrames){
        this.x=x;
        this.y=y;
        this.speed=speed;
        this.img=img;
        this.imgWidth=imgWidth;
        this.imgHeight=imgHeight;
        this.frameX=0;
        this.frameY=0;
        this.totalFrames=totalFrames;
    }
    movment(canvas,keys,time,speed,timeCheck){
        if(keys.right && this.x<739){
			this.frameY=0;
			if(speed==1 && timeCheck==true){
                this.x+=6;
            }
           else if(speed==-1 && timeCheck==true){
                this.x+=2;
            }
            else{
            this.x+=4
            }
		}	
		if(keys.left && this.x>10){
			this.frameY=1;
            if(speed==1 && timeCheck==true){
			this.x-=6;
            }
           else if(speed==-1 && timeCheck==true){
                this.x-=2;
            }
            else{
            this.x-=4;
            }
		}
		if(keys.left || keys.right){
			if(time%3==0){
				this.frameX++;
				    if(this.frameX==this.totalFrames) this.frameX=0;
			}
		}
    }
    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.img, this.frameX*this.imgWidth, this.frameY*this.imgHeight, this.imgWidth, this.imgHeight, this.x, this.y, this.imgWidth, this.imgHeight);
        ctx.closePath();
    }
}