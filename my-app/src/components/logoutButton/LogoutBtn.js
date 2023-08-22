import { signOut } from "next-auth/react";

const Logout = () => <button onClick={signOut} className="bg-white  px-4 py-1 rounded">Logout</button>
export default Logout;