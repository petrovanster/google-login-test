import Content from "./Content/Content"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar/Sidebar"


const Main = (props) => {
    return <div className="wrapper">
        {/* <Navbar /> */}
        <Sidebar />
        <Content />
        <Footer title="sample implementation" />
    </div>
}

export default Main