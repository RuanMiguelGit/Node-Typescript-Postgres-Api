import express from 'express'
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 3000;


import IndexRouter from './routes/index'

app.use(IndexRouter)

app.listen(PORT, () => {
    console.log('Servidor Ativo');
  });