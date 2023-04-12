import Navbar from "./Navbar";


const Content = ({ children }: any) => {
    return (
        <div className="">
             <Navbar />
                {children}
            {/* <Footer /> */}
        </div>
    )
}
export default Content;