const express =require("express");
const app = express();

//console.dir(app);

let port =3000;//8080

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})

app.use((req,res)=>{
    console.log("request recived");
    //console.log(req);
    //res.send("this is string");
    res.send({
        name:"apple",
        color:"red",
    });
    
});