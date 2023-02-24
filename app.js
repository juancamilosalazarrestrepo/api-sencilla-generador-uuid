const express = require("express");
const http = require("http");
const helmet = require("helmet");
let compression = require("compression");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");


const app = express();
app.use(helmet({contentSecurityPolicy:false}));
app.use(compression());

const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT,process.env.IP)

app.use(express.static('./public'));

app.get('/api/get-uuid',function(req,res) {
res.json(uuidv4());
});

app.get('*',function(req,res) {
    res.status(404).send("Error 404 - El recurso no se encontro");
    });
    

