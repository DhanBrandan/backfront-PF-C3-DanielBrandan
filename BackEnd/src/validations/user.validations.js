import {body} from "express-validator"
import  bcrypt  from "bcrypt"
import { UserModel } from "../models/user.models.js"

const validatorRegister = [
    body('username')
    .notEmpty().withMessage("El USERN es un campo Obligatorio")
    .isString().withMessage("El USERN deber ser un String")
    .isLength({min:4}).withMessage("El USERN debe contener minimo 4 caracteres")
    .custom( async (value) => {
        const user = await UserModel.findOne({username:value })
        if (user) throw new Error( 'El USERN ya existe')
        return true
    }),
    
    body('password')
    .notEmpty().withMessage("El Password es un campo Obligatorio")
    .isLength({min:8}).withMessage("El Password debe contener minimo 8 caracteres"),
        
    body('email')
    .notEmpty().withMessage("El E-mail es un campo Obligatorio")
    .isEmail().withMessage("El formato del E-mail ingresado es invalido")
    .custom( async (value) => {
        const email = await UserModel.findOne(({email:value}))
        if (email) throw new Error('El E-mail ya esta registrado')
        return true
    }),
    body('avatarURL')
    .notEmpty().withMessage("El Avatar es un campo Obligatorio")
    .isURL().withMessage("El Avatar debe una URL valida")
]

const validatorLogin = [
    body('email')
    .notEmpty().withMessage("El E-mail es un campo Obligatorio")
    .isEmail().withMessage("El formato del E-mail ingresado es invalido")
    .custom( async (value) => {
        const email = await UserModel.findOne(({email:value}))
        if (!email) throw new Error('El E-mail ingresado no esta registrado, registrate te esperamos pronto !')
        return true
    }),
    body('password')
    .notEmpty().withMessage("El Password es un campo Obligatorio")

]

export {
    validatorRegister,
    validatorLogin,
}