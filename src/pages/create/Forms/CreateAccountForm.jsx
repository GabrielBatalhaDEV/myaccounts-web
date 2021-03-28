import React from 'react'
import './CreateAccountForm.css'


function CreateAccountForm(){
    return(
        <>
            <form action="">
                <div className="group-form">
                    Titulo: <input type="text"  required id="txtTitle" placeholder="Linkedin" autoComplete="off" />
                </div>
                <div className="group-form">
                    Login: <input type="text" required id="txtUsername" placeholder="user"  autoComplete="off"/>
                </div>  
                <div className="group-form">
                    Senha: <input type="text" required id="txtPassword" placeholder="pas123"  autoComplete="off"/>
                </div>
                <div className="group-form">
                    Email: <input type="text" required id="txtEmail" placeholder="example@email.com" autoComplete="off" />
                </div>
                
            </form>
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