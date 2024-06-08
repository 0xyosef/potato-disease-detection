import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useLoalStorage } from "@/hooks/useLocalStorage";

export default function NavBar() {
    const { isAuth, setIsAuthenticated } = useAuth();
    const { removeItem  } =useLoalStorage("token");
    const handleLogout = () => {
        setIsAuthenticated(false);
        removeItem();
    };

    return (
        <div className="text-md flex w-full items-center justify-between mx-auto max-w-7xl font-bold p-3 z-50">
            <Link to="/">
                Ai.
                <span className="text-primary font-black">Tool</span>
            </Link>
            <div className="flex gap-4">
                {isAuth ? (
                    <Button
                        size="sm"
                        variant="secondary"
                        className="font-bold text-muted"
                        onClick={()=>{
                            setIsAuthenticated(false);
                            removeItem();
                        }}
                    >
                        Logout
                    </Button>
                ) : (
                    <>
                        <Link to="/sign-in">
                            <Button 
                                size="sm"
                                className="font-bold text-muted" 
                            >
                                Sign In
                            </Button>
                        </Link>
                        <Link to="/sign-up">
                            <Button 
                                size="sm"
                                variant="secondary"
                                className="font-bold text-muted" 
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
