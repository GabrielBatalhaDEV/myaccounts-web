import React, { useState, useEffect } from 'react'
import { fetchAccounts } from '../requests/accountsApi'
import {Card} from './card'


function ListContainer(){
    const [accounts, setAccounts] = useState([])
    
    useEffect(() =>
        fetchAccounts().then(data => setAccounts(data))
    )
    
    
    return(
        
        <div>
            <div>
                <button >+</button>
            </div>
            <div>
                {accounts.map(account => <Card key={account._id} {...account} ></Card>)}
            </div>
           
        </div>
    )
}

export {ListContainer}