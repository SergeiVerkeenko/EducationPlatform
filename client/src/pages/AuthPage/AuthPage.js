import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useGetUserMutation } from '../../services/user'
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'
import React, { useState } from 'react';

function AuthPage() {
    const navigate = useNavigate();
    const [getUser] = useGetUserMutation();
    const [value, setValue] = useState({ email: '', pwd: '' });
    const [isAuth, setAuth] = useState(false);


    function changeInputValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }
    function sendRequest() {
        getUser(value)
            .then(() => {
                alert('Регистраыия пройдена');
                setAuth(true);
                navigate('/course');
            })
            .catch((error) => {
                alert('Регистраыия не пройдена');
                setAuth(false);
            });
    }
    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <div className={style.loginForm}>
                    <h1>Login</h1>
                    <div>
                        <input onChange={changeInputValue} name='email' placeholder='Login' />
                    </div>

                    <div>
                        <input onChange={changeInputValue} name='pwd' placeholder='Password' />
                    </div>

                    <div onClick={sendRequest} className={style.btn}>Login</div>
                </div>


                <div className={style.image}></div>

            </div>

            <Footer />
        </>

    )
}

export default AuthPage