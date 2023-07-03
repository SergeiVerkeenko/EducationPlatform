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
            <div className={style.wrapperNiz}>
                <nav>
                    <div className={style.kotik}></div>
                    <div className={style.gt}></div>
                    <div className={style.yuotobe}></div>
                </nav>
                <p>©2021 Hschool. Project for Hschool.</p>
            </div>
        </>
    )
}

export default Footer