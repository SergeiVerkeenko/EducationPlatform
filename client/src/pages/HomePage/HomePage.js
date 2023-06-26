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
        </>
    )
}

export default HomePage