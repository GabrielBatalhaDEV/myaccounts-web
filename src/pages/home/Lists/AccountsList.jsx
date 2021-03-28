import React from 'react'
import { AccountCard } from '../Cards/AccountCard'

import './AccountList.css'

function AccountsList(props) {

    return (
        <div className="AccountList">
            <div className="AccountList__Header">
                <a style={{
                    color:'var(--color-button-letters)',
                    textDecoration: 'none',
            }} href="/create">+</a>
                
            </div>
            <div className="AccountList__List">
                {props.accounts.map(account => <AccountCard key={account._id} {...account} 
                evtRefresh={props.evtRefresh}></AccountCard>)}
            </div>
        </div>
    )
}

export { AccountsList }