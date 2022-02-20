class secadora {
 constructor (x,y,width,heigth){
  this.width = width;
  this.y = y;
  this.x = x;
  this.heigth = heigth;
  this.secadora_image = loadImage ("secadora.png");
 }
 display (){
     push ();
     translate (this.x,this.y);
     imageMode (CENTER);
     image (this.secadora_image,0,0,this.width,this.heigth);
     pop ();
 }

}