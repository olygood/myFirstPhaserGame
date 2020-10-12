/**
 * this est égale au jeux en lui même faire un console.log(this); //pour voir ce qu'est this------------------
 */
const config = {
   type : Phaser.AUTO,
   width : 800,
   height : 600,
   scene : {
    preload,
    create,
    update    
} 
}

/**
 * variables Global---------------------------------------------------------------------------------
 */

let player = null;
let clickButtonUp = false;
let clickButtonDown = false;
let cursor = null;
let Vkey;
const game = new Phaser.Game(config);
/**
 * function preload: ---------------------------------------------------------------------------------
 */
function preload(){
    console.log("hello preload");
    this.load.image("player","./assets/player_idle.png");
    this.load.image("buttonUp", "./assets/up.png");
    this.load.image("buttonDown", "./assets/down.png");
    this.load.image("buttonLeft", "./assets/left.png");
    this.load.image("buttonRight", "./assets/right.png");
    this.load.image("player_kick_R","./assets/player_kick.png" );
}
/**
 * function create:---------------------------------------------------------------------------------------
 */
function create(){
    /*this.add.sprite(100,100,"player");*/ 
   const positionCameraCenterX = this.cameras.main.centerX;
   const positionCameraCenterY = this.cameras.main.centerY;
   player = this.add.sprite(positionCameraCenterX, positionCameraCenterY,"player");
   /*player.setScale(3);*/
   /*player.setAngle(45);*/
   
   /**
    * sprite up,down,left,right
    */
   const buttonUp = this.add.sprite(100,50,"buttonUp").setInteractive();
   const buttonDown = this.add.sprite(100,100,"buttonDown").setInteractive();
   const buttonLeft = this.add.sprite(50,75,"buttonLeft").setInteractive();
   const buttonRight = this.add.sprite(150,75,"buttonRight").setInteractive();
/**click sur ui button orange */
/*down */
buttonDown.on("pointerdown", function(){
    console.log(" BD pointer down");
    clickButtonDown = true;
});
buttonDown.on("pointerup", function(){
    console.log("BD pointer up ");
    clickButtonDown = false;
});
buttonDown.on("pointerout", function(){
    console.log("BD pointer out");
    clickButtonDown = false;
});

/*up */
buttonUp.on("pointerdown", function(){
    console.log("BU pointer down");
    clickButtonUp = true;
});
 buttonUp.on("pointerup", function(){
     console.log(" BU pointer up ");
     clickButtonUp = false;
 });
 buttonUp.on("pointerout", function(){
     console.log(" BU pointer out");
     clickButtonUp = false;
 });
 /*left */
 buttonLeft.on("pointerdown", function(){
    console.log("pointer down");
});
 buttonLeft.on("pointerup", function(){
     console.log("pointer up ");
 });
 buttonLeft.on("pointerout", function(){
     console.log("pointer out");
 });
  /*right pointeright pas la bonne ecriture */
  buttonRight.on("pointeright", function(){
    console.log("pointer down");
});
 buttonRight.on("pointeright", function(){
     console.log("pointer up ");
 });
 buttonRight.on("pointeright", function(){
     console.log("pointer out");
 });
 /**
  * cursor = createCursorKeys(); // contient les 6valeur, up, down, left, right, shift, space
  */
cursor = this.input.keyboard.createCursorKeys();
this.input.keyboard.on("keydown_B", function(){
    console.log("coucou");
})
Vkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);


}
/**
 * function update:------------------------------------------------------------------------------
 */
function update(time, delta){
    if(clickButtonUp){
        player.setScale(player.scaleX +0.1, player.scaleY +0.1);
}
    if(clickButtonDown){
        player.setScale(player.scaleX -0.1, player.scaleY -0.1);
    }
    /**
     * deplacement player elever les else et laisser que les if pour aller en diagonal
     */
    if(cursor.left.isDown){
        player.x -= 5;
    }else if(cursor.right.isDown){
        player.x += 5;
    }else if(cursor.up.isDown){
        player.y -=5;
    }else if(cursor.down.isDown){
        player.y += 5;
    }
    if(Vkey.isDown){
        player.setTexture("player_kick_R");
    }
    if(Vkey.isUp){
        player.setTexture("player");
    }
 
}