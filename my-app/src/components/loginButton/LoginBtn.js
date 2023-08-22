import { signIn } from "next-auth/react";
import Link from "next/link";
const Login = () => <Link href="/auth/signIn" className="bg-white hover:bg-slate-200 duration-500 px-4 py-1 rounded">Login</Link>
export default Login;