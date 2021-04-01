import React from 'react'
import './SearchForm.css'

import {Input} from '../../../components/Input'

function AccountForm(props) {


    return (
        <div className="header">

            <div className="header_searchForm">
                    <h1 className="header_searchForm_title">MyAccounts</h1>
                    <Input placeholder="Digite o titulo da conta, Ex:League Of Legends" ></Input>
                    <button id="btnProcurar" className=" header_searchForm_btnSearch" onClick={() => {
                        const txtTitle = document.getElementById('txtTitle').value
                        props.evtSearch(txtTitle)
                    }}>Procurar</button>
                
            </div>


        </div>

    )
}

export { AccountForm }