import { Request, Response, Router } from "express";

const ex5Routes = Router()

function reverseString(string : string) {
    return string.split("").reverse().join("");
}

ex5Routes.get(
    '/inverter-string',
    (req:Request, res:Response) => {
        const { valor } = req.query
        const valorFilter = valor as string;
        
        if (typeof valorFilter !== 'string' ) return res.sendStatus(400)

        return res.status(200).json(reverseString(valorFilter));
    }
)

export default ex5Routes