import React from 'react'


import {Card} from './accountItem'


function ListContainer(props){

    return(
        <div>
            <div>
                <button >+</button>
            </div>
            <div>
                {props.accounts.map(account => <Card key={account._id} {...account} ></Card>)}
            </div>
           
        </div>
    )
}

export {ListContainer}