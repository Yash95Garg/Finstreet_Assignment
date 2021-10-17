const { json } = require("body-parser");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const pool = require("./db");
const apiCallFromRequest = require("./request");

app.set('view engine','ejs');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",async function(req,res){
    apiCallFromRequest.callApi(function(response){
        const empty = pool.query(
            "TRUNCATE TABLE wazirx"
        );
        //console.log(response);
        //console.log(typeof(response));
        let i=0;
        for (const property in response) {
            //console.log(`${i} : ${property}: ${response[property]}`);
            //for(const pp in response[property]){
            //    console.log(`${i} : ${pp}: ${response[property][pp]}`);
            //}
            const name = response[property]['name'];
            const last = response[property]['last'];
            const buy = response[property]['buy'];
            const sell = response[property]['sell'];
            const volume = response[property]['volume'];
            const base_unit = response[property]['base_unit'];
            const createquery = pool.query(
                "INSERT INTO wazirx (name, last, buy, sell, volume, base_unit) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
                [name, last, buy, sell, volume, base_unit]
            )
            if(i==9){
                break;
            }
            i = i+1;
        }
    })
    pool.query('SELECT * FROM wazirx', (error, results) => {
        if (error) {
          throw error;
        }
        data = (results.rows);
        res.render("index",{data:data});
    })
});


app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
});