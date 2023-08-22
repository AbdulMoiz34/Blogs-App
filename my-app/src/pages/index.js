import Header from '@/components/header/Header';
import { useState } from "react";
import { getAllBlogsData } from "@/services/blogs";
import BlogList from "@/components/blogList/BlogList";
import Heading from '@/components/heading/Heading';
const Home = ({ blogs }) => {
  const [data, setData] = useState(blogs);
  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Header toggle={true} />
      <main className='bg-purple-200 overflow-hidden'>
        <Heading text="All Blogs" />
        <ul className=''>
          <BlogList blogs={data} myBlogs={false} />
        </ul >
      </main>
    </>
  )
}
export const getStaticProps = async () => {
  const blogs = await getAllBlogsData();
  // console.log(blogs);
  return {
    props: {
      blogs
    },
    revalidate: 30 //after 10s another req its make build again and then give
  };
}
export default Home;