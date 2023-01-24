class Blackhole{
    constructor(){
        this.x=750;
        this.y=50;
    };
    show(){
        
        hole=createSprite(this.x,this.y);
        hole.addImage(holeImg);
         hole.scale=0.05;
    };
    hide(){
        hole.hide();
    }
}


