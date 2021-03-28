import React from 'react'
import './SearchForm.css'


function AccountForm(props) {


    return (
        <div className="header">

            <div className="header_searchForm">
                    <h1 className="header_searchForm_title">MyAccounts</h1>
                    <input type="text" className="header_searchForm_inputSearch" id="txtTitle" required autoComplete="off" placeholder="Digite o titulo da conta, Ex:League Of Legends" />
                    <button id="btnProcurar" className=" header_searchForm_btnSearch" onClick={() => {
                        const txtTitle = document.getElementById('txtTitle').value
                        props.evtSearch(txtTitle)
                    }}>Procurar</button>
                
            </div>


        </div>

    )
}

export { AccountForm }