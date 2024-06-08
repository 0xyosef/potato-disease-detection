import NavBar from "@/components/nav-bar";
import {Outlet} from "react-router-dom";


export default function RootLayout() {
    return (
        <div className="">
            <section className=" scroll-smooth">
                <NavBar />
                <Outlet />
            </section>
        </div>
    );
}