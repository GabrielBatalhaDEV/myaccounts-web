import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { fetchAccountById, updateAccount } from '../../components/Requests/accountsApi'
import './EditForm.css'

function EditForm(){
    const {id} = useParams()
    
    const [oldAccount, setOldAccount] = useState({})
    useEffect(()=>{
        fetchAccountById(id)
        .then(data => data.json())
        .then(data => setOldAccount(data))
    }
    ,[id])

    
    return(
        <>
            <Form action="">
                <div className="group-form">
                    Titulo: <Input id="txtTitle" placeholder={oldAccount.title}/>
                </div>
                <div className="group-form">
                    Login: <Input  id="txtLogin" placeholder={oldAccount.username} />
                </div>  
                <div className="group-form">
                    Senha: <Input id="txtPass" placeholder={oldAccount.password}/>
                </div>
                <div className="group-form">
                    Email: <Input id="txtEmail" placeholder={oldAccount.email}  />
                </div>
                
            </Form>
            <div className="buttons">
                <Link id="btnBack" className="btn-back" to="/">
                    Voltar
                </Link>
                <button id="btnSave" className="btn-save" onClick={()=>{
                    const title = document.getElementById('txtTitle').value || document.getElementById('txtTitle').placeholder
                    const username = document.getElementById('txtLogin').value  || document.getElementById('txtLogin').placeholder
                    const password = document.getElementById('txtPass').value || document.getElementById('txtPass').placeholder
                    const email = document.getElementById('txtEmail').value || document.getElementById('txtEmail').placeholder

                    updateAccount(id, {title, username, password, email})
                    window.location.href = "/"
                }}>
                    Salvar
                </button>
            </div>
            
        </>
    )
}


export {EditForm}