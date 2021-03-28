import { CreateAccountForm } from "./Forms/CreateAccountForm.jsx"
import './CreateAccountContainer.css'

function CreateAccountContainer() {
    return (
        
        <div className="container">
            <h1>Salvar Conta</h1>
            <CreateAccountForm/>
        </div>
        
    )
}

export { CreateAccountContainer }