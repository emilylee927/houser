require("dotenv").config({path:'../.env'});
const massive = require("massive");
const express = require("express");
const {getHouses, createHouse, deleteHouse} = require("./controller.js");



const app = express();
const { CONNECTION_STRING } = process.env;



app.use(express.json());

massive(CONNECTION_STRING, {scripts: '../db'}).then(dbInstance =>{
    app.set('db', dbInstance);
    console.log("Connected to Database");
})

app.get('/api/house', getHouses)
app.post('/api/house', createHouse)
app.delete('/api/house/:house_id', deleteHouse)


app.listen(4000, () => {
    console.log('Houser project on port 4000')
})