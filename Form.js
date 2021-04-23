class Form {
    constructor(){
        this.title = createElement('h2')
        this.input=createInput('Name');
        this.button = createButton("Play");
        this.greeting= createElement('h3');
    }
     hide(){
this.greeting.hide()
this.button.hide()
this.title.hide()
this.input.hide()

    }

    display(){
       // var title = createElement('h2')
        //title.html("CAR RACING GAME")
        
        this.title.html("CAR RACING GAME")
        this.title.position(displayWidth/2,displayHeight/2-200)
   
        this.input.position(displayWidth/2,displayHeight/2-100);

     
        this.button.position(displayWidth/2,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2,displayHeight/2+100);
            player.updateCount(playerCount)
            
        }) 
    }
    
}