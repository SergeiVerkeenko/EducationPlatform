import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import style from './style.module.css'
import { useCreateUserMutation } from '../../services/user'
import React, { useState } from 'react';

function RegistrationPage() {
    const [createCourse] = useCreateUserMutation()
    const [value, setValue] = useState({ name: '', surname: '', email: '' , pwd: '' , role: '' })

    function sendRequest() {
        createCourse(value)
    }

    function changeInputValue(event) {
        setValue({ ...value, [event.target.name]: event.target.value })
    }
    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <div className={style.loginForm}>
                    <h1>Sign Up</h1>
                    <div>
                        <input name='name' onChange={changeInputValue} placeholder='Name' />
                    </div>

                    <div>
                        <input name='surname' onChange={changeInputValue} placeholder='Surname' />
                    </div>

                    <div>
                        <input name='email' onChange={changeInputValue} placeholder='E-mail' />
                    </div>

                    <div>
                        <input name='pwd' type='password' onChange={changeInputValue} placeholder='Password' />
                    </div>

                    <div>
                        <input name='role' onChange={changeInputValue} placeholder='Rolle ' />
                    </div>

                    <div onClick={sendRequest} className={style.btn}>Login</div>
                </div>


                <div className={style.image}></div>

            </div>

            <Footer />
        </>

    )
}

export default RegistrationPage