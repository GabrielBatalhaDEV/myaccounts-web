import React from 'react'
import './app.css'
import { ListContainer } from './components/listAccounts/listContainer'
import { PainelContainer } from './components/painel/painelContainer'



function App(){
    return (
    <div>
        <ListContainer></ListContainer>
        <PainelContainer></PainelContainer>
    </div>)
}

export {App}