import React from 'react'



function Input(props){
    return(
        <input type="text" required id="txtEmail" autoComplete="off"  {...props}></input>
    )
}

export {Input}