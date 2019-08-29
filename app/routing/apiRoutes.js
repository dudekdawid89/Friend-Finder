module.exports=function(app){
    friends=require("../data/friends")
    app.get("/api/friends",function(req,res){
        res.json(friends)
    
    })
    app.post("/api/friends",function(req,res){
         let friend=req.body;
         let bestScores = 50;
         let matchIndex=0;

         for (i=0; i < friend.scores.length; i++){
           friend.scores[i]=parseInt(friend.scores[i]);
     }
       console.log(`friend${friend}`) 
         for (i=0; i < friends.length; i++){
              matchScore=0;
            for (j=0;j < friends[i].scores.length; j++){
                matchScore+=Math.abs(friend.scores[j]-friends[i].scores[j])
            }
            if(matchScore < bestScores){
                matchIndex = i;
                bestScores = matchScore;
            }
         }
         friends.push(friend);
         res.json(friends[matchIndex]);
    })
    }