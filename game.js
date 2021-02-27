class Game{
    constructor(){

    }
    display(){

    }
    getState(){
        var gamestateref  = database.ref('gameState');
        gamestateref.on("value",function(data){
           gameState = data.val();
        })
    
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      start(){
        player=new Player(1050,300);

        player.getPlayerCount();
        form=new Form()
        form.display()
        ground=new Ground();

        //create the sprites and keep them ready
        player1Sprite = createSprite(100,100,20,20);
        player2Sprite = createSprite(800,100,20,20);
        
      }

      play(){
        console.log("GAME HAS STARTED")
       
        form.hide();
        text("GAME HAS STARTED");
        Player.getPlayersInfo()
        console.log(allplayers)
        

        if(allplayers!=undefined){
          background("green");
          ground.display()
          for(var i in allplayers){
            //create each player sprite as per player1 and player2
            if(i==="player1"){
                player1Sprite.x = allplayers[i].x;
                player1Sprite.y = allplayers[i].y;
              }
              else if(i==="player2"){
                player2Sprite.x = allplayers[i].x;
                player2Sprite.y = allplayers[i].y;
              }
          }
       
          
        }

        drawSprites();

        //changing the position of the player.body with the arrows
        if(keyWentDown(UP_ARROW)){
          player.body.position.y-=10
          console.log(player.body.position.y)
          player.updateLocation(player.body.position.x,player.body.position.y);
        }
        if(keyWentDown(DOWN_ARROW)){
          player.body.position.y+=10
          player.updateLocation(player.body.position.x,player.body.position.y);
        }
        if(keyWentDown(RIGHT_ARROW)){
          player.body.position.x+=10
          player.updateLocation(player.body.position.x,player.body.position.y);
        }
        if(keyWentDown(LEFT_ARROW)){
          player.body.position.x-=10
          player.updateLocation(player.body.position.x,player.body.position.y);
        }


      }

}