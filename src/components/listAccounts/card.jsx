import React from 'react'

function Card(props){
    return(
        <div>
            <div>
                {props.title}
                <div>
                    {props._id}
                </div>
            </div>
            <div>
                {props.username},
                {props.password}
                {props.email}
                {props.extras}
            </div>
        </div>
    )
}

export { Card }