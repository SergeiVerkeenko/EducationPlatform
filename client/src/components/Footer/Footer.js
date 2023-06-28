import style from './style.module.css'
function Footer() {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.navigLeft}>
                    <nav>
                        <p>Home</p>
                        <p>Textbook</p>
                        <p>Statistic</p>
                        <p>Sprint</p>

                    </nav>
                </div>
                <div className={style.navigLeft}>
                    <nav>
                        <p>Alex</p>
                        <p>Gabriel</p>
                        <p>Marcus</p>

                    </nav>
                </div>
            </div>
            <div className={style.polosa}></div>
        </>
    )
}

export default Footer