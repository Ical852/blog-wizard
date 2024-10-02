import { useSelector } from 'react-redux';
import Link from 'next/link';

const HomePage = () => {
  const blogs = useSelector((state) => state.blog.blogs);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog List</h1>
      <Link href="/create">
        <p className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
          Create New Blog
        </p>
      </Link>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="border-b py-2">
            <Link href={`/blog/${index}`}>
              <p className="text-xl font-semibold">{blog.title}</p>
            </Link>
            <p>{blog.summary}</p>
            <p className="text-sm text-gray-600">
              By {blog.author} in {blog.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
