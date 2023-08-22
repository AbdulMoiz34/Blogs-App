import Link from "next/link";
import { useSession } from "next-auth/react";
import Login from "../loginButton/LoginBtn";
import Logout from "../logoutButton/LogoutBtn";
import { useEffect, useRef } from "react";
const Header = ({ toggle }) => {
    const navRef = useRef();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log(window.scrollY);
            const navElem = navRef.current;
            (window.scrollY > 60) ? navElem?.classList.add("opacity-80") : navElem?.classList.remove("opacity-80");
        });
    }, []);
    // console.log(toggle);
    const { data: session } = useSession();
    // console.log(session);
    if (session) {
        return (
            <nav ref={navRef} className="bg-purple-600 p-4 flex items-center justify-between sticky top-0">
                <div className="flex items-center space-x-4">
                    <div className="text-white text-lg font-semibold bg-purple-700 px-2 py-1 rounded-md">Blog App</div>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href={toggle ? "/blogs/home" : "/"} className="bg-white  px-4 py-1 rounded text-green">
                        {toggle ? "Home" : "All blogs"}
                    </Link>
                    <Link href={`/profile`} className="bg-white  px-4 py-1 rounded">
                        Profile
                    </Link>
                    <Logout />

                </div>
            </nav>
        );
    }
    return (
        <>
            <nav ref={navRef} className="bg-purple-600 p-4 flex items-center justify-between sticky top-0">
                <div className="flex items-center space-x-4">
                    <div className="text-white text-lg font-semibold bg-purple-700 px-2 py-1 rounded-md">Blog App</div>
                </div>
                <div className="flex items-center space-x-4">
                    <Login />
                </div>
            </nav>
        </>
    );
}

export default Header;