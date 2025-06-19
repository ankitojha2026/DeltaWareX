import { Outlet } from "react-router-dom";
import NavBar from "../UI/NavBar";
// import NavBar2 from "../UI/NavBar2";
import Footer from "../UI/Footer";

const AppLayout = () => {
    return <>
    {/* <NavBar2/> */}
   <NavBar/>
  

            <Outlet/>
        

        <Footer/>
        </>
}
export default AppLayout;