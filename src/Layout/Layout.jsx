import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Nav/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Layout = () => {
    return (
        <>
            <NavBar />

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;