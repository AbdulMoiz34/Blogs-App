import Header from "../header/Header";
import { useRef } from "react";
import Heading from "../heading/Heading";
import { useRouter } from "next/router";
const DashBoard = ({ userId }) => {
    const { push } = useRouter();
    // console.log(userId);
    const titleRef = useRef();
    const detailsRef = useRef();
    const onSubmitHandler = async e => {
        e.preventDefault();
        const title = titleRef.current.value;
        const details = detailsRef.current.value;
        const published = new Date().toLocaleDateString();
        try {
            const res = await fetch("/api/blogs", {
                method: "POST",
                body: JSON.stringify({ title, details, published, userId }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (res.ok) {
                alert("Your blog is now published");
                push("/blogs/home");
            }
        } catch (err) {
            alert(err);
        }
    }
    return (
        <>
            <Header toggle={true} />
            <main>
                <div className="flex flex-col justify-start w-[90%] px-10 m-auto mt-10 sm:w-[70%]">
                    <Heading text="Dashboard" />
                    <form className="flex gap-5 flex-col" onSubmit={onSubmitHandler}>
                        <input minLength={10} maxLength={30} ref={titleRef} required type="text" placeholder="Enter title" className="py-1 px-2 border-[1px] outline-2 outline-purple-700 hover:border-purple-600 border-solid border-black rounded" />
                        <textarea required maxLength={200} minLength={30} ref={detailsRef} className='max-h-40 py-1 px-2 border-[1px] outline-2 outline-purple-700 hover:border-purple-600 border-solid border-black rounded' placeholder='Enter Details'></textarea>
                        <input type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700 cursor-pointer" value="Pusblish blog" />
                    </form>
                </div>
            </main>
        </>
    );
}

export default DashBoard;