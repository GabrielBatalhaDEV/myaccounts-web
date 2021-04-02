import React, { useState, useEffect, useCallback } from 'react'
import { fetchAccounts } from '../../components/Requests/accountsApi'

import "./AccountContainer.css"
import { AccountForm } from './Forms/SearchForm'
import { AccountsList } from './Lists/AccountsList'

function AccountsContainer(){
    const [accounts, setAccounts] = useState([])
    const [title, setTitle] = useState('')
    const [refresh, setRefresh] = useState(false)

    const Search = useCallback(
        (title) => {
            setTitle(title)
        },
        [],
    )

    const Refresh = useCallback(
        ()=>{
            setRefresh(!refresh)
        },
        [refresh]
    )
    

    useEffect(() =>{
       fetchAccounts(title)
       .then(data => data.json())
       .then(data => setAccounts(data))
    },[title, refresh])


    return (
    <div className="account-container">
        <AccountForm evtSearch={Search} ></AccountForm>
        <AccountsList accounts={accounts} refresh={()=>Refresh()}></AccountsList>
    </div>)
}

export { AccountsContainer }