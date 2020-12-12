class Form
{
    constructor()
    {
        this.title = createElement('h2');
        this.Input = createInput("");
        this.Button = createButton("READY");
        this.Greeting = createElement('h3');
        this.Reset = createButton("RESET");
    }
 hide(){
     this.Input.hide();
     this.Button.hide();
     this.Greeting.hide();
 }
    display()
    {
           this.title.html("CAR CHASE");
           this.title.position(displayWidth/2 - 50, 0);    
           this.Input.position(displayWidth/2 - 40, displayHeight/2 - 80);
           this.Button.position(displayWidth/2 + 30, displayHeight/2);
           this.Reset.position(displayWidth-100, 20)
          
           this.Button.mousePressed(()=>
           {
           this.Input.hide();
           this.Button.hide();
           player.name = this.Input.value();          
           playerCount = playerCount+1;
           player.index = playerCount;
           player.update()
           player.updateCount(playerCount);
           this.Greeting.html("Hello"+player.name);
           this.Greeting.position(displayWidth/2 - 60, displayHeight/4);
        })
        this.Reset.mousePressed(()=>
        {
            player.updateCount(0);       
            game.update(0);
            database.ref('/').update
            ({
               finishedPlayers: 0,
               players: null
            })
        })
    }
}
//to give heading createElement headings: h1 to h6
// to create textbox createInput
//to create button createButton