import express from 'express';
import {MongoClient} from 'mongodb';

//run server with "node src/server.mjs"
//run nodemon with "npx nodemon src/server.mjs"
//run mongo with "mongosh"
//"show dbs"
//"use movies"

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => { res.send("hello test")});
app.post('/hello', (req, res) => { res.send(`Hello ${req.body.name}!`)});
app.post('/hello/:name'), (req, res) => { res.send(`Hello ${req.params.name}`)}

app.listen(8000, () => console.log('Listening on port 8000'));

const client = new MongoClient('mongodb://localhost:27017');

app.post('/api/addMovie', async (req, res) => {
    try{
        await client.connect();

        const db = client.db('movies');

        const movieInfo = await db.collection('mymovies').insertOne(req.body);

        res.sendStatus(200);

        client.close();
    }
    catch (error){
        res.sendStatus(500);
    }
})

app.get('/api/data', async (req, res) => {
    try{
        await client.connect();

        const db = client.db('movies')

        const movieInfo = await db.collection('mymovies').find({}).toArray();

        res.status(200).json(movieInfo);

        client.close();

    }
    catch (error){
        res.sendStatus(500);
    }
})