import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import style from "./style.module.css"

function CoursePage() {
    return (
        <>
            <Header></Header>
            <div className='style.wrapper'>
                <div className="style.img"> <p>Courses</p> </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default CoursePage