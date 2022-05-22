import { Request,Response } from "express";
import { palindromo } from "../models/Palindromo";


export const home = (req:Request,res:Response) =>{
    let de:string = req.query.de as string;
    let ate:string = req.query.ate as string;
    let show:boolean = false;
    let palindromos = palindromo(de,ate);

    if(palindromos!=''){
        show=true;
    }

    res.render('pages/home',{
        show,
        palindromos
    });

}