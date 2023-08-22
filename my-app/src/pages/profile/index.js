import Heading from "@/components/heading/Heading";
import Logout from "@/components/logoutButton/LogoutBtn";
import { getByEmail } from "@/services/users";
import { getSession } from "next-auth/react";
import Image from "next/image";
const Profile = ({ user }) => {
    // console.log(user)
    const { fName, lName, email } = user;
    return (
        <>
            <nav className="bg-purple-600 p-4 flex items-center justify-between ">
                <div className="flex items-center space-x-4">
                    <div className="text-white text-lg font-semibold bg-purple-700 px-2 py-1 rounded-md">Blog App</div>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="bg-purple-700 text-white p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700 capitalize text-xs">Hi, {fName + " " + lName}</span>
                    <Logout />
                </div>
            </nav>
            <Heading text="Your Profile" />
            <main className="pl-4">
                <div>
                    <Image src="/defaultProfile.webp" width={80} height={80} className="mb-5" alt="Image not found" />
                </div>
                <div>
                    <p className="text-sm">Name : {fName + " " + lName}</p>
                    <span className="text-xs">logged in as <b>{email}</b></span>

                    <div className="flex flex-col justify-start sm:w-[50%] w-[60%] mt-3">
                        <p className="m-0">Password</p>
                        <form className="flex gap-5 flex-col">
                            <input required type="text" placeholder="old password" className="py-1 px-2 border-[1px] outline-2 outline-purple-700 hover:border-purple-600 border-solid border-black rounded" />
                            <input required type="text" placeholder="New password" className="py-1 px-2 border-[1px] outline-2 outline-purple-700 hover:border-purple-600 border-solid border-black rounded" />
                            <input required type="text" placeholder="confirm password" className="py-1 px-2 border-[1px] outline-2 outline-purple-700 hover:border-purple-600 border-solid border-black rounded" />
                            <input type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700" />
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
};

// if user try to access this page without login he can't
export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }
    const email = session.user.email;
    const user = getByEmail(email);
    // console.log(user)
    return {
        props: {
            user
        }
    }
};
export default Profile;