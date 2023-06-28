import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import style from "./style.module.css"

function HomePage() {
    return (
        <>
            <Header></Header>
            <div className={style.preview}>
                <div className={style.content}>
                    <p className={style.textPlatform}>E-COURSE PLATFORM</p>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p className={style.textAdditional}>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.btn}>About platform</div>
                    <div className={style.statistic}>
                        <p className={style.studentsCount}><span className={style.lightning}></span> 600 <span className={style.plus}>+</span></p>
                        <p className={style.studentsText}>Students</p>
                    </div>
                </div>
                <div className={style.img}></div>
            </div>
            <div className={style.centr}>
                <div className={style.iog}></div>
                <div className={style.contentRight}>
                    <h1>Learn a language in a playful way</h1>
                    <p className={style.textAdditional}>Make learning programming languages more fun with mini-games</p>
                    <div className={style.blockcentr}>
                        <div className={style.crossovka}></div>
                        <div className={style.rupor}></div>
                    </div>
                </div>
            </div>
            <div className={style.preview}>
                <div className={style.content}>
                    <h1>Increase your knowledge</h1>
                    <p className={style.textAdditional}>Traditional and new effective approaches to learning languages</p>
                    <div className={style.btn}>Textbook →</div>
                </div>
                <div className={style.gerl}></div>
            </div>
            <div className={style.centr}>
                <div className={style.parochka}></div>
                <div className={style.contentRight}>
                    <h1>Watch your progress every day</h1>
                    <p className={style.textAdditional}>Save statistics on your achievements and mistakes</p>
                    <div className={style.btn}>Statistics →</div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default HomePage