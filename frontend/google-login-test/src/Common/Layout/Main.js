
import Footer from "./Footer/Footer"



const Main = (props) => {
    return <div className="wrapper">
        {props.navbar}
        {props.sidebar}
        {/* <Content /> */}
        {props.children}
        <Footer title="sample implementation" />
    </div>
}

export default Main