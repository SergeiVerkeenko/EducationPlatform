import { Link } from "react-router-dom";
import style from './style.module.css'

function Header() {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>

                <h1>Hschool</h1>

                <nav>
                    <Link to='/auth'>
                        <div cla ssName={style.login}>
                            Login →

                        </div>
                    </Link>
                    <Link to='/reg'>
                        <div className={style.sign}>
                            Sign Up
                        </div>
                    </Link>
                </nav>


            </div>
        </div>
    )
}

export default Header