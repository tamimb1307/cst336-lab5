const express = require("express");
const app = express();
const request = require("request");

app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.get("/", async function(req, res){
    
    let imageUrlArray = await getRandomImage("", 1);
    res.render("index", {"imageUrlArray": imageUrlArray});

});

//-search route
app.get("/search", async function(req, res){
    
    let keyword = "";
    if (req.query.keyword) {
        keyword = req.query.keyword;
    }
    
    let imageUrlArray = await getRandomImage(keyword, 9);
    res.render("results", {"imageUrlArray": imageUrlArray});

});

async function getRandomImage(keyword, count) {
    
    return new Promise (function (resolve, reject){
    let requestUrl = `https://api.unsplash.com/photos/random/?count=${count}&client_id=t1NKuNnQ3gnELf2v3vVr9TREGipCoIEM9pRV3RiJmYI&featured=true&orientation=landscape&query=${keyword}`;
    
    request(requestUrl, function (error, response, body) {
        if (!error && response.statusCode == 200){
            let parsedData = JSON.parse(body);
            
            let imageUrlArray = [];
            for(let i=0; i < count; i++){
                imageUrlArray.push(parsedData[i]["urls"]["regular"]);
                
            }
            
            resolve (imageUrlArray);
        }
        
        else {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode)
            reject(error)
        }
    });
    });
}


//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});