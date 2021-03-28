
import React, { useState } from 'react'
import { btn_delete_card__16px } from '../../../assets/index'
import { deleteAccount } from '../../../components/Requests/accountsApi'



import './AccountCard.css'
function AccountCard(props) {
    const [show, setShow] = useState(false)

    function changeCard() {
        setShow(!show)
    }

    return (
        <div className="account-card" onClick={changeCard}>
            {show ?
                (
                    <div className="account-card__open">
                        
                        <div className="account-card__open_header">
                        <h2>{props.title}</h2>
                        </div>
                        
                        <div className="account-card__open_body">
                                <p>User: {props.username}</p>
                                <p>Password: {props.password}</p>
                                <p>Email: {props.email}</p>
                        </div>  
                        <div className="account-card__open_button">
                                <p>button</p>
                        </div>
                    </div>

                ) :
                (
                    <div className="account-card__close">

                        <h2>{props.title}</h2>
                        <span className="account-card__close_underline"></span>
                        <p className="account-card__close_id">
                            #{props._id}
                        </p>

                    </div>

                )}
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