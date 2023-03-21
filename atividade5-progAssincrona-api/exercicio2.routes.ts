import { Request, Response, Router } from "express";

const ex2Routes = Router()

ex2Routes.get('/ex2', (req:Request, res:Response)=>{
    return res.status(200).json({id: 1, message: 'Deu certo'});
})

ex2Routes.get(
    '/calculadora', // 
    (req:Request, res:Response) => {
        const { operacao, valorA, valorB} = req.query
        const num1Filter = Number(valorA && parseInt(valorA as string));
        const num2Filter = Number(valorB && parseInt(valorB as string));
        const operacaoFilter = operacao as string;
        let result
        switch (operacaoFilter) {
            case 'somar':
                result = num1Filter + num2Filter
                return res.status(200).json(result);
            case 'subtrair':
                result = num1Filter - num2Filter
                return res.status(200).json(result);
            case 'multiplicar':
                result = num1Filter * num2Filter
                return res.status(200).json(result);
            case 'dividir':
                result = num1Filter / num2Filter
                return res.status(200).json(result);
            default:
                return res.sendStatus(400);
        }
    }
)

export default ex2Routes