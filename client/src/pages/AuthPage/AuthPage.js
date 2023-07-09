import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import style from './style.module.css'
function AuthPage() {
    return (
        
        <>
            <Header />
            <div className={style.wrapper}>
                <div className={style.loginForm}>
                    <h1>Login</h1>
                    <div>
                        <input placeholder='Login' />
                    </div>

                    <div>
                        <input placeholder='Password' />
                    </div>

                    <div className={style.btn}>Login</div>
                </div>


                <div className={style.image}></div>

            </div>

            <Footer />
        </>

    )
}

export default AuthPage