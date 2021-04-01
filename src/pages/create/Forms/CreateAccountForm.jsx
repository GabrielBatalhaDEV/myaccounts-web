import React from 'react'
import './CreateAccountForm.css'
import {Form} from '../../../components/Form'
import {Input} from '../../../components/Input'


function CreateAccountForm(){
    return(
        <>
            <Form action="">
                <div className="group-form">
                    Titulo: <Input placeholder="Linkedin"/>
                </div>
                <div className="group-form">
                    Login: <Input placeholder="user" />
                </div>  
                <div className="group-form">
                    Senha: <Input placeholder="pas123"/>
                </div>
                <div className="group-form">
                    Email: <Input  placeholder="example@email.com"  />
                </div>
                
            </Form>
            <div className="buttons">
                <a id="btnBack" className="btn-back" href="/">
                    Voltar
                </a>
                <button id="btnSave" className="btn-save" >
                    Salvar
                </button>
            </div>
            
        </>
    )
}


export {CreateAccountForm}