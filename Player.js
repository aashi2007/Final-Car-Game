class Player
{
    constructor()
    {
       this.index = null;
       this.name = null;
       this.distance = 0;
       this.rank = 0;
    }
    getCount()
    {
       var playerCountref = database.ref('playerCount');
       //create a listener and read the data through a anonymous function
       playerCountref.on("value",function(data)
       {
           playerCount = data.val();
       });
    }
    updateCount(Count)
    {
        database.ref('/').update
        ({
             playerCount:Count
        });
    }
    update()
    {
        var playerIndex = "players/player" + this.index;
        console.log(playerIndex);
        database.ref(playerIndex).set
        ({
            name : this.name,
            distance : this.distance,
            rank : this.rank
         });
        
    }
    // update, updateCount, getUpdate are dependent upon an object
    // a static function is a member function of a class  that can be called even when object is not initialised 
    // getPlayerInfo is static because we are getting all the players info rather than any 1 player
    static getPlayerInfo()
    {
       var PlayerInforef = database.ref('players');
       PlayerInforef.on("value",(data)=>{
       allPlayers = data.val();
       })
    }
    getFinishedPlayers()
    {
        var finishedPlayerRef = database.ref('finishedPlayers');
        finishedPlayerRef.on("value",(data)=>
        {
            finishedPlayers = data.val();
        })
    }
    static updateFinishedPlayers()
    {
        database.ref('/').update
        ({
             finishedPlayers : finishedPlayers + 1
        });
        this.rank = this.rank + 1;
    }   
}