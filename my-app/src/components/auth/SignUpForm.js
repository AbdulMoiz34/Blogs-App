import Link from "next/link";
import { useRef } from "react";
import Button from "../button/Button";
import { useRouter } from "next/router";
import Heading from "../heading/Heading";
const SignUpForm = () => {
    const { push } = useRouter();
    const firstName = useRef();
    const lastName = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmitHandler = async e => {
        e.preventDefault();
        const fName = firstName.current.value;
        const lName = lastName.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        try {
            const res = await fetch("/api/auth/signUp", {
                method: "POST",
                body: JSON.stringify({ fName, lName, email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (res.ok) {
                alert("signUp successful");
                push("/auth/signIn");
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <section className="min-h-screen flex flex-col">
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg sm:border-2 px-3 lg:px-24 pt-10 lg:max-w-xl sm:max-w-md w-full text-center">
                        <form className="text-center" onSubmit={onSubmitHandler}>
                            <Heading text="Signup" />
                            <div className="py-2 text-left">
                                <input ref={firstName} type="text" minLength="3" maxLength="20" required className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="First Name" />
                            </div>
                            <div className="py-2 text-left">
                                <input ref={lastName} type="text" minLength="1" required maxLength="20" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Last Name" />
                            </div>
                            <div className="py-2 text-left">
                                <input ref={emailRef} type="email" required className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" />
                            </div>
                            <div className="py-2 text-left">
                                <input ref={passwordRef} type="password" required title="password must contain at 8 characters" pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" />
                            </div>
                            <Link href="/auth/signIn" className='text-purple-600 flex justify-start ml-3'>
                                Already have an account? Login
                            </Link>
                            <div className="py-2">
                                <Button text="signup" />
                            </div>
                        </form>
                        <div className="text-center mt-12"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpForm;