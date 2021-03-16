import React, { useState } from 'react'

function PainelContainer(){


    const [search, setSearch] = useState(0)
    return (
        <div>
            <form>
                <label htmlFor="">Procurar conta pelo titulo</label>
                <input type="text" id="txtTitle" placeholder="League Of Legends"/>
                <button onClick={()=>{
                    const value = document.getElementById('txtTitle').value
                    alert(value)
                }}>Buscar</button>
            </form>
        </div>
    )
}

export {PainelContainer}