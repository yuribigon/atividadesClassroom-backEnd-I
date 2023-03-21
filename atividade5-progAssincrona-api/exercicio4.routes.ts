import { Request, Response, Router } from "express";

const ex4Routes = Router()

let contador : number = 0

ex4Routes.get(
    '/numeral', // ?num=5&operacao=anterior
    (req:Request, res:Response) => {
        const { num, operacao} = req.query
        const numFilter = Number(num && parseInt(num as string));
        const operacaoFilter = operacao as string;

        if(operacaoFilter === 'anterior'){
            const result = numFilter - 1
            return res.json(result)
        } else if(operacaoFilter === 'proximo'){
            const result = numFilter + 1
            return res.json(result)
        } else {
            return res.sendStatus(400);
        }
    }
)

export default ex4Routes