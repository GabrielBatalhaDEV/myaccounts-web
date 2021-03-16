import React, { useState, useEffect } from 'react'

import { ListContainer } from './listAccounts/listAccounts'
import { PainelContainer } from './painel/painelContainer'
import { fetchAccounts } from './requests/accountsApi'

function Container(){
    const [accounts, setAccounts] = useState([])
    const [title, setTitle] = useState('')

    useEffect(() =>{
       fetchAccounts(title).then(data => setAccounts(data))
    },[title])


    return (
    <div>
        <ListContainer accounts={accounts}></ListContainer>
        <PainelContainer evtSearch={(title)=>setTitle(title)}></PainelContainer>
    </div>)
}

export {Container}