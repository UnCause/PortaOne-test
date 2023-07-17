const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const urlencodedParser = express.urlencoded({ extended: false });
const Result = require("./Result.js")

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));

app.post("/", urlencodedParser, function(req, res) {
    if(!req.body) {
        res.send("Something went wrong")
    } else{
        const result = new Result (req.body.data)
        result.save()
    }
})

app.get("/result", urlencodedParser, function(req, res) {
    const UniqueL = Result.getAns()
    res.json({data: UniqueL})
})

app.listen(5000, function() {
   console.log("Сервер очікує на підключення...");
});