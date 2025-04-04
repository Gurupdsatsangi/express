const express =require("express");
const app = express();

//console.dir(app);

let port =3000;//8080

app.listen(port,()=>{
    console.log(`app listening on ports ${port}`);
})

/*app.use((req,res)=>{
    console.log("request recived");
    //console.log(req);
    //res.send("this is string");
    res.send({
        name:"apple",
        color:"red",
    });
    
});*/
app.get("/", (req, res) => {
    res.send("You connected to the root path");
  });
  
  app.get("/search", (req, res) => {
    res.send("You connected to the search path");
  });
  
  app.get("/home", (req, res) => {
    res.send("You connected to the home page");
  });
  

  /*app.get("*", (req, res) => {
    res.send("You're connected to a non-existent path");
  });*/