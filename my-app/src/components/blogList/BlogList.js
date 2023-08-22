import { useState } from "react";
import BlogItem from "../blogItem/BlogItem";

const BlogList = ({ blogs, myBlogs }) => {
    const [toggle, setToggle] = useState(false);
    const clickHandler = () => setToggle(!toggle);
    const blogsLength = blogs?.length;
    let combinedBlogList;
    if (blogsLength) {
        const blogList1 = blogs.slice(0, 5).map(blog => <BlogItem blog={blog} key={blog.id} myBlog={myBlogs} />);
        const blogList2 = blogs.slice(5).map(blog => <BlogItem blog={blog} key={blog.id} myBlog={myBlogs} />);
        combinedBlogList = (toggle && blogsLength > 5) ? [...blogList1, ...blogList2] : blogList1;
    }

    // Display both lists when toggle is true
    // console.log(combinedBlogList);
    return (
        <>
            {combinedBlogList}
            {(blogsLength > 5) ?
                <div className="flex justify-center">
                    <button onClick={clickHandler} className='bg-purple-700 rounded-md text-white px-4 py-2 mb-10'>
                        {toggle ? "less..." : "more..."}
                    </button>
                </div>
                : (blogsLength) ?
                    <div className="flex justify-center">
                        <button className='bg-purple-700 rounded-md text-white px-4 py-2 mb-10'>
                            Finished!
                        </button>
                    </div> :
                    <div className="p-10 w-fit m-auto">
                        <p className="bg-blue-100 text-gray-800 rounded-md px-4 py-2 text-sm">
                            Currently, no blogs are available.
                        </p>
                    </div>

            }
        </>
    );
}

export default BlogList;