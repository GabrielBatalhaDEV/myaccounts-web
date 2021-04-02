
import React, { useState} from 'react'
import { deleteAccount } from '../../../components/Requests/accountsApi'
import {x, edit} from '../../../assets/index'

import './AccountCard.css'
import { Link } from 'react-router-dom'
function AccountCard(props) {
    const [show, setShow] = useState(false)

    function changeCard() {
        setShow(!show)
    }

    const {_id, title, username, password, email} = props
    console.log(username);
    return (
        <div className="account-card" onClick={changeCard}>
            {show ?
                (
                    <div className="account-card__open">

                        <div className="account-card__open_header">
                            <h2>{title}</h2>
                        </div>

                        <div className="account-card__open_body">
                            {username && <p>User: {username}</p>}
                            {password &&<p>Password: {password}</p>}
                            {email && <p>Email: {email}</p>}
                        </div>
                        <div className="account-card__open_button">
                            <Link to={`/edit/${_id}`} className="btn-edit"><img src={edit} alt="editar" width="16" height="16"/></Link>
                            <button className="btn-back" onClick={()=>{
                                deleteAccount(_id).then(props.refresh())
                            }}>
                                <img src={x} alt="deletar" height="16" width="16" />
                                </button>
                        </div>
                    </div>

                ) :
                (
                    <div className="account-card__close">

                        <h2>{props.title}</h2>
                        <span className="account-card__close_underline"></span>
                        <p className="account-card__close_id">
                            #{_id}
                        </p>
                    </div>

                )
            }

        </div>
    )
}

export { AccountCard }


/*<div className="account-card">
            <div className="account-card__header">

                <div className="account-card__header_header">
                    <h1 style={{ fontSize: "large" }}>
                        {props.title}
                    </h1>
                </div>


                <div style={{ paddingRight: "10px" }}>
                    <p className="account-card__header_id">#{props._id}</p>
                </div>
                {show && (
                <div className="account-card__absolutebody">
                    <div className="account-card__body">
                        {(!!props.username) && (
                            <p className="account-card__body_text" >username: {props.username}</p>
                        )}
                        {(!!props.password) && (
                            <p className="account-card__body_text" > password: {props.password}</p>
                        )}
                        {(!!props.email) && (
                            <p className="account-card__body_text">email: {props.email}</p>
                        )}
                        {(!!props.extras) && (
                            <p className="account-card__body_text">extras: {props.extras}</p>
                        )}

                    </div>
                    <div>
                    <button onClick={() =>
                        deleteAccount(props._id).then(() => props.evtRefresh())

                    }>
                        <img src={btn_delete_card__16px} alt="">
                        </img>
                    </button>
                </div>

                </div>

            )}
                <div className="account-card__footer">
                    <button className="account-card__footer_button" onClick={
                        () => setShow(!show)}>{show ? <p style={{margin:"0px"}}>&#9650;</p> : <p style={{margin:"0px"}}>&#9660;</p>}</button>
                </div>
            </div>


        </div>*/