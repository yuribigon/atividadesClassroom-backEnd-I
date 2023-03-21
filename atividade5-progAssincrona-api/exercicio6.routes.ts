import { Request, Response, Router } from "express";

const ex6Routes = Router()

const allValores : Array<string> = []

function removeVogais(string : string){
    return string.replace(/[aeiouà-ú]/gi,'');
}

ex6Routes.get(
    '/remover-vogais',
    (req:Request, res:Response) => {
        const { valor } = req.query
        const valorFilter = valor as string;

        if (typeof valorFilter !== 'string' ) return res.sendStatus(400)

        const valorSemVogais = removeVogais(valorFilter);
            
        allValores.push(valorSemVogais)

        return res.status(200).json(allValores);
    }
)

export default ex6Routes