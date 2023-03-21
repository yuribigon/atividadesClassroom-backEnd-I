import express, {Express} from 'express';
import cors from 'cors';
import ex2Routes from './exercicio2.routes';
import ex3Routes from './exercicio3.routes';
import ex4Routes from './exercicio4.routes';
import ex5Routes from './exercicio5.routes';
import ex6Routes from './exercicio6.routes';

const api : Express = express(); // utilizando o express
const port = process.env.PORT||8081

api.use(express.json()) // avisa o express que queremos o retorno em json
api.use(cors()) // meu cors é livre

api.use(ex2Routes)
api.use(ex3Routes)
api.use(ex4Routes)
api.use(ex5Routes)
api.use(ex6Routes)

api.listen(port, ()=>console.log(`Autobots vamos rodar on ${port}`))