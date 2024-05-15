
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).send({"msg":"This is the home page"})
});

app.get("/search", (req, res)=>{
    const {q} = req.query;
    if(q){
        res.status(200).send({"msg":`this is the result :${q}`})
    } else {
        console.log("query is need")
    }
})

const PORT = 8080;
app.listen(PORT, async()=>{
    console.log(`server is running ${PORT}`)
});
