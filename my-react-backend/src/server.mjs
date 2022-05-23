import express from 'express';

const app = express();

app.get('/hello', (req, res) => { res.send("hello test")});

app.listen(8000, () => console.log('Listening on port 8000'));

//run server with "node src/server.mjs"