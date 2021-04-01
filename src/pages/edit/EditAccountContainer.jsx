import React from 'react'
import { EditForm } from './EditForm'
import "./EditAccountContainer.css"

function EditAccountContainer(){
    return(
        <div className="container">
            <h1>Editar</h1>
            <EditForm></EditForm>
        </div>
    )
}

export {EditAccountContainer}