class Cannon {
 constructor (x,y,w,height,angle) {
   this.x = x;
   this.y = y;
   this.w = w;
   this.height = height;
   this.angle = angle;
   this.cannon_image = loadImage ("cannoncandy.png");
 }
 display (){
    if (keyIsDown (LEFT_ARROW) && this.angle<70){
        this.angle += 1;
    }
    if (keyIsDown (RIGHT_ARROW) && this.angle>-30){
        this.angle -= 1;
    }

   push ();
   translate (this.x,this.y);
   rotate (this.angle);
   imageMode (CENTER);
   image (this.cannon_image,0,0,this.w,this.height);
   pop ();
 }

}