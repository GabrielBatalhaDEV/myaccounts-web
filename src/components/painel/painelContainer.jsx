import React from 'react'

function PainelContainer(props){
    return (
        <div>
            
                <label htmlFor="search">Procurar conta pelo titulo</label>
                <input type="text" id="txtTitle" placeholder="League Of Legends"/>
                <button id="btnBuscar" onClick={()=>{
                    const txtTitle = document.getElementById('txtTitle').value
                    props.evtSearch(txtTitle)
                }}>Buscar</button>
            
        </div>
    )
}

export {PainelContainer}