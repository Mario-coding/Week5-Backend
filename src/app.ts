import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import http from 'http';
import config from "./environment";
import routes from './routes';

const app = express();

app.use(cors({origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/app/index', (req,res) => {
    console.log ("req: ", req);
    res.send("Method GET jalan!");
    return res.status(200).json({message:"success!"});
})

app.post('/app/create', (req,res) => {
    console.log ("req: ", req);
    res.send("Method POST jalan!");
    return res.status(200).json({message:"success!"});
})

app.delete('/app/remove', (req,res) => {
    console.log ("req: ", req);
    res.send("Method DELETE jalan!");
    return res.status(200).json({message:"success!"});
})

app.put('/app/update', (req,res) => {
    console.log ("req: ", req);
    res.send("Method PUT jalan!");
    return res.status(200).json({message:"success!"});
})

const server = http.createServer(app);
function startServer(){
    server.listen(config.port, parseInt(config.host), function(){
        console.log('Express server listening on %d, in %s mode %s', config.port, config.host, config.env);
    })
}

setImmediate(startServer);

export default app