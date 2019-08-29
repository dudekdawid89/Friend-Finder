module.exports=function(app){
    friends=require("../data/friends")
    app.get("/api/friends",function(req,res){
        res.json(friends)
    
    })
    app.post("/api/friends",function(req,res){
         newFriend=req.body;
         for (i=0;i<newFriend.scores.length;i++){
           newFriend.scores[i]=parseInt(newFriend.scores[i]);
     }
         
         
       bestMatch=100;
       matchIndex=0;
       
         for (i=0;i<friends.length;i++){
            matchScore=0;
            for (j=0;j<friends[i].scores.length;j++){
                matchScore+=Math.abs(newFriend.scores[j]-friends[i].scores[j])
            }
            if(matchScore<bestMatch){
                matchIndex=i;
                bestMatch=matchScore;
    
            }
         }
         friends.push(newFriend);
         
    
         res.json(friends[matchIndex]);
       
    })
    
    
    }