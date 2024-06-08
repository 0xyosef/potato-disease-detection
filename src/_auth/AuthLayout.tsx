import NavBar from "@/components/nav-bar";
import {Navigation} from "lucide-react";
import {Outlet} from "react-router-dom";

export default function AuthLayout() {

    return (
        <>
                    <section className="flex justify-center items-center py-10">
                        <Outlet />
                    </section>
        </>
    );
}