import { Request, Response, Router } from "express";

const ex3Routes = Router()

let contador : number = 0

ex3Routes.get('/ex3', (req:Request, res:Response)=>{
    while(contador < 9){
        contador++
        return res.status(200).json({contador})
    }
    contador = 0
    return res.status(200).json({message: 'Chegou à 10', contador});
})

export default ex3Routes