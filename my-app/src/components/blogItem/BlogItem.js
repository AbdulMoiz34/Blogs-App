import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";

const BlogItem = ({ blog, myBlog }) => {
    const { title, details, published } = blog;
    return (
        <div className="w-[70%] parent bg-white duration-500 max-w-lg mx-auto px-4 py-8 pb-10 mb-4 border hover:bg-purple-100 border-gray-300 rounded-md shadow-md">
            <Link href="/profile" className="inline-block gap-2 items-center">
                <div className="flex gap-2 items-start">
                    <Image alt="image not found" src="/defaultProfile.webp" width={40} height={40} />
                    <div>
                        <p className="text-sm font-mono">Name</p>
                        <p className="text-gray-600 mb-2 text-[10px]">{published}</p>
                    </div>
                </div>
            </Link>
            <h1 className="text-xl font-bold capitalize title">{title}</h1>
            <div>
                <p className="leading-relaxed text-sm break-all">{details}</p>
            </div>
            {myBlog && <div className="absolute mt-1 flex gap-5">
                <button className="bg-purple-400 text-white px-2 rounded py-1 text-[10px] hover:bg-purple-800">Delete</button>
                <button className="bg-purple-400 text-white px-2 rounded py-1 text-[10px] hover:bg-purple-800">Edit</button>
            </div>}
        </div>
    );
};

export default BlogItem;
