import { getSession } from 'next-auth/react';
import Header from '@/components/header/Header';
import Link from 'next/link';
import { getByEmail } from '@/services/users';
import { getBlogsById } from '@/services/blogs';
import BlogList from '@/components/blogList/BlogList';
const Home = ({ blogs }) => {
    return (
        <>
            <Header toggle={false} />
            <main>
                <nav className='flex bg-purple-50'>
                    <h1 className="text-center flex-grow text-3xl mt-2 font-bold mb-4 text-purple-700">Your Blogs</h1>
                    <Link href="/dashboard" className="max-h-10 border-2 border-gray-100 mt-3 bg-purple-600 text-white font-serif block  p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700" >
                        Publish blog&apos;s
                    </Link>
                </nav>
                <BlogList blogs={blogs} myBlogs={true} />
            </main >
        </>
    );
};

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
    // console.log(session);
    if (!session) { //if user not loggedIn he can't access this page.
        return {
            redirect: {
                destination: "/auth/signIn",
                permanent: false
            }
        }
    }
    const email = session.user.email;
    const user = getByEmail(email);
    // console.log(user);
    const { id: userId } = user;
    const blogs = await getBlogsById(userId);
    // console.log(blogs);
    return {
        props: {
            blogs
        }
    }
};
export default Home;