import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BlogCard } from '@/components';
import Link from 'next/link';

const HomePage = () => {
  const blogs = useSelector((state) => state.blog.blogs);

  const _renderBlogs = useMemo(() => {
    if (blogs?.length < 1) {
      return <h5>No Blogs Yet</h5>
    }

    return blogs.map((blog, index) => (
      <BlogCard blog={blog} index={index} />
    ));
  }, [blogs]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog List</h1>
      <Link href="/create">
        <p className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
          Create New Blog
        </p>
      </Link>
      {_renderBlogs}
    </div>
  );
};

export default HomePage;
