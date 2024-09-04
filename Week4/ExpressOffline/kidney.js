const express = require("express");
const app = express();
app.use(express.json())

let users = [
    {
      name: "manik",
      kidney: [
        {
          healthy: true,
        },
        {
          healthy: false,
        },
      ],
    },
  ];


  app.get("/", (req, res) => {

    // to get the data using query perameter
    const name = req.query.name;
    const userData = users.find(user => user.name == name);
    const totalNoKedneys = userData.kidney.length;
    const totalNoOfHealthyKidney = userData.kidney.filter(kidney => kidney.healthy).length;
    const totalNoOfUnhealthyKidney = totalNoKedneys - totalNoOfHealthyKidney;
    res.json({
        name,
        totalNoKedneys,
        totalNoOfHealthyKidney,
        totalNoOfUnhealthyKidney
    })
  })


app.post("/", function (req, res) {
    const username  = req.body.name;
    const isHealthy = req.body.isHealthy;
    users.forEach(user => {
        if (user.name == username){
            if(isHealthy){
                user.kidney.push({healthy : true});
            }
            else{
                user.kidney.push({healthy : false});
            }
        }
    });
    const userData = users.find(user => user.name == username);
    res.json(userData)
})

app.put("/", (req, res) => {
    const username = req.body.name;
    const alleastOneUnhealthyKidney = isAtleastOneUnhealthyKidney(username);
    if (alleastOneUnhealthyKidney){
        const userData = users.find(user => user.name == username);
    userData.kidney.forEach(kidney => {kidney.healthy = true});
    res.json({
        "message" : "All kidney is healthy now"
    })
    }
    else{
        res.status(411).json({
            "message" : "No unhealthy kidney found"
        })
    }
    
})

app.delete("/", (req, res) => {
    const username = req.body.name;
    const userData = users.find(user => user.name == username);
    if (isAtleastOneUnhealthyKidney(username)){
        const healthyKidney = userData.kidney.filter(kidney => kidney.healthy);
        userData.kidney = healthyKidney;
    
        res.json({
            "message" : "Deleted unhealthy kidney"
        })
    }
    else{
        res.status(411).json({
            "message" : "You dont have unhealthy kidney to delete"
        })
    }
   
})


function isAtleastOneUnhealthyKidney (username){
    const userData = users.find(user => user.name == username);
    for (let i = 0; i < userData.kidney.length; i++){
        if (userData.kidney[i].healthy == false){
            return true;
        }
    }
    return false;

}

  app.listen(3100);