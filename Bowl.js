class Bowl{
    constructor(MonkeyX,MonkeyY,MonkeyFrameX,MonkeyXFrameY,color){
        this.MonkeyX=MonkeyX;
        this.MonkeyFrameX=MonkeyFrameX;
        this.MonkeyFrameY=MonkeyXFrameY;
        this.MonkeyY=MonkeyY;
        this.color=color;
        this.BowlX=0;
        this.BowlY=0;
        this.BowlWidth=0;
        this.BowlHeight=0;
    }
    draw(ctx){
        if(this.MonkeyFrameX==0 && this.MonkeyFrameY==0){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+22;
                this.BowlY=this.MonkeyY-10;
             }
            else{
                this.BowlX=this.MonkeyX+28;
                this.BowlY=this.MonkeyY-8;
             }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==1 && this.MonkeyFrameY==0){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+28;
                this.BowlY=this.MonkeyY-10;
            }
        else{
            this.BowlX=this.MonkeyX+35;
            this.BowlY=this.MonkeyY-8;
        }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
           // ctx.moveTo(this.BowlX,150); 
            //ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==2 && this.MonkeyFrameY==0){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+41;
                this.BowlY=this.MonkeyY-12;
            }
            else{
                this.BowlX=this.MonkeyX+46;
                this.BowlY=this.MonkeyY-12;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            //ctx.moveTo(this.BowlX,150); 
            //ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==3 && this.MonkeyFrameY==0){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+28;
                this.BowlY=this.MonkeyY+2;
            }
            else{
                this.BowlX=this.MonkeyX+32;
                this.BowlY=this.MonkeyY+5;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            //ctx.moveTo(this.BowlX,150); 
           // ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==4 && this.MonkeyFrameY==0){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+17;
                this.BowlY=this.MonkeyY+5;
            }
            else{
                this.BowlX=this.MonkeyX+12;
                this.BowlY=this.MonkeyY+5;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            //ctx.moveTo(this.BowlX,150); 
            //ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==5 && this.MonkeyFrameY==0){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+15;
                this.BowlY=this.MonkeyY+10;
            }
            else{
                this.BowlX=this.MonkeyX+3;
                this.BowlY=this.MonkeyY+4;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
           // ctx.moveTo(this.BowlX,150); 
           // ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==6 && this.MonkeyFrameY==0){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+13;
                this.BowlY=this.MonkeyY+7;
            }
            else{
                this.BowlX=this.MonkeyX+6;
                this.BowlY=this.MonkeyY+6;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
           // ctx.moveTo(this.BowlX,150); 
           // ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==7 && this.MonkeyFrameY==0){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+25;
                this.BowlY=this.MonkeyY-5;
            }
            else{
                this.BowlX=this.MonkeyX+15;
                this.BowlY=this.MonkeyY-3;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
           // ctx.moveTo(this.BowlX,150); 
           // ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==8 && this.MonkeyFrameY==0){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+35;
                this.BowlY=this.MonkeyY-5;
            }
            else{
                this.BowlX=this.MonkeyX+25;
                this.BowlY=this.MonkeyY-5;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
          //  ctx.moveTo(this.BowlX,150); 
          //  ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
    }
        if(this.MonkeyFrameX==0 && this.MonkeyFrameY==1){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+97;
                this.BowlY=this.MonkeyY-10;
            }
            else{
                this.BowlX=this.MonkeyX+91;
                this.BowlY=this.MonkeyY-10;
                }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            //ctx.moveTo(this.BowlX,150); 
            //ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==1 && this.MonkeyFrameY==1){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+89;
                this.BowlY=this.MonkeyY-2;
            }
            else{
                this.BowlX=this.MonkeyX+83;
                this.BowlY=this.MonkeyY-8;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            //ctx.moveTo(this.BowlX,150); 
            //ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==2 && this.MonkeyFrameY==1){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+78;
                this.BowlY=this.MonkeyY-10;
            }
            else{
                this.BowlX=this.MonkeyX+68;
                 this.BowlY=this.MonkeyY-10;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            //ctx.moveTo(this.BowlX,150); 
            //ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==3 && this.MonkeyFrameY==1){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+90;
                this.BowlY=this.MonkeyY;
            }
            else{
                this.BowlX=this.MonkeyX+90;
                this.BowlY=this.MonkeyY;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
           // ctx.moveTo(this.BowlX,150); 
            //ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==4 && this.MonkeyFrameY==1){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+102;
                this.BowlY=this.MonkeyY+4;
            }
            else{
                this.BowlX=this.MonkeyX+102;
                this.BowlY=this.MonkeyY+4;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            //ctx.moveTo(this.BowlX,150); 
            //ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==5 && this.MonkeyFrameY==1){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+102;
                this.BowlY=this.MonkeyY+6;
            }
            else{
                this.BowlX=this.MonkeyX+102;
                this.BowlY=this.MonkeyY+6;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            //ctx.moveTo(this.BowlX,150); 
           // ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==6 && this.MonkeyFrameY==1){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+105;
                this.BowlY=this.MonkeyY+5;
            }
            else{
                this.BowlX=this.MonkeyX+108;
                this.BowlY=this.MonkeyY+9;
            }
            ctx.beginPath();
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            //ctx.moveTo(this.BowlX,150); 
           // ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==7 && this.MonkeyFrameY==1){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+95;
                this.BowlY=this.MonkeyY-5;
            }
            else{
                this.BowlX=this.MonkeyX+96;
                this.BowlY=this.MonkeyY-7;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
            //ctx.moveTo(this.BowlX,150); 
            //ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
        else if(this.MonkeyFrameX==8 && this.MonkeyFrameY==1){
            if(this.color=="Black"){
                this.BowlX=this.MonkeyX+83;
                this.BowlY=this.MonkeyY-5;
            }
            else{
                this.BowlX=this.MonkeyX+89;
                this.BowlY=this.MonkeyY-6;
            }
            ctx.beginPath()
            ctx.arc(this.BowlX,this.BowlY,20,0,2*Math.PI/2,false);
           // ctx.moveTo(this.BowlX,150); 
           // ctx.lineTo(this.BowlY,150);
            ctx.fill();
            ctx.closePath();
        }
    }
}