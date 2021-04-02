import React from 'react'
import './CreateAccountForm.css'
import {Form} from '../../../components/Form'
import {Input} from '../../../components/Input'
import { saveAccount } from '../../../components/Requests/accountsApi'


function getInputs(){
    const title = document.getElementById('txtTitle').value
    const username = document.getElementById('txtLogin').value || null
    const password = document.getElementById('txtPass').value || null
    const email = document.getElementById("txtEmail").value || null

    saveAccount({title, username, password, email})
}

function CreateAccountForm(){
    return(
        <>
            <Form action="">
                <div className="group-form">
                    Titulo: <Input id="txtTitle" placeholder="Linkedin"/>
                </div>
                <div className="group-form">
                    Login: <Input id="txtLogin" placeholder="user" />
                </div>  
                <div className="group-form">
                    Senha: <Input id="txtPass" placeholder="pas123"/>
                </div>
                <div className="group-form">
                    Email: <Input id="txtEmail"  placeholder="example@email.com"  />
                </div>
                
            </Form>
            <div className="buttons">
                <a id="btnBack" className="btn-back" href="/">
                    Voltar
                </a>
                <button id="btnSave" className="btn-save" onClick={()=>{
                    getInputs()
                    window.location.href = "/"
                    }} >
                    Salvar
                </button>
            </div>
            
        </>
    )
}


export {CreateAccountForm}