import React from 'react'
import { plus } from '../../../assets'
import { AccountCard } from '../Cards/AccountCard'

import './AccountList.css'

function AccountsList(props) {

    return (
        <div className="AccountList">
            <div className="AccountList__Header">
                <a style={{
                    color:'var(--color-button-letters)',
                    textDecoration: 'none',
            }} className="btn-save" href="/create"><img src={plus} alt="Criar" width="16" height="16" /></a>
                
            </div>
            <div className="AccountList__List">
                {props.accounts.map(account => <AccountCard key={account._id} {...account} refresh={props.refresh} ></AccountCard>)}
            </div>
        </div>
    )
}

export { AccountsList }