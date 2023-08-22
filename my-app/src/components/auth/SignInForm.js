import Link from 'next/link';
import { signIn } from "next-auth/react";
import { useRef, useState } from 'react';
import Button from '../button/Button';
import { useRouter } from 'next/router';
import Heading from '../heading/Heading';
import { BsEye, BsEyeSlash } from "react-icons/bs";
const SignInForm = () => {
    const [toggle, setToggle] = useState(false);
    const [err, setErr] = useState("");
    const { push } = useRouter();
    const emailRef = useRef();
    const passwordRef = useRef();
    const onSubmitHandler = async e => {
        console.log("called!")
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const data = await signIn('credentials', { redirect: false, email, password });
        const error = data.error;
        setErr(error);
        // console.log(err); //usestate update variable on next render cycle 1st time will undefined
        if (data.ok) {
            alert("Login successful.");
            push("/blogs/home");
        }
    }
    const togglePasswordVisiblity = () => {
        console.log("click")
        const passwordInp = passwordRef.current;
        passwordInp.type === "password" ? passwordInp.type = "text" : passwordInp.type = "password";
    }
    return (
        <section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-3 lg:px-24 pt-10 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center" onSubmit={onSubmitHandler}>
                        <Heading text="Login" />
                        <div className="py-2 text-left">
                            <input ref={emailRef} required type="email" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" />
                        </div>
                        <div className="py-2 text-left relative">
                            <input ref={passwordRef} required type="password" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" />
                            <div className='absolute right-2 top-5 cursor-pointer' onClick={() => setToggle(!toggle)} >
                                {toggle ? <BsEye onClick={togglePasswordVisiblity} /> : <BsEyeSlash onClick={togglePasswordVisiblity} />}
                            </div>
                            <div className='text-xs text-red-500 ml-4'>   {err ? `${err}` : ""}</div>
                        </div>
                        <Link href="/auth/signUp" className='text-purple-600 flex justify-start ml-3'>
                            Do not have an account? signUp
                        </Link>
                        <div className="py-2">
                            <Button text="Login" />
                        </div>
                    </form>
                    <div className="text-center mt-12">
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SignInForm;