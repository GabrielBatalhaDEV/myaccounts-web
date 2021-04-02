import React from 'react'



function Input(props){
    return(
        <input type="text" required autoComplete="off"  {...props}></input>
    )
}

export {Input}