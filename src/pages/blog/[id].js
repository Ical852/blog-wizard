import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const BlogDetail = () => {
  const router = useRouter();
  
  const { id } = router.query;
  const blog = useSelector((state) => state.blog.blogs[id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h5 className="text-sm text-gray-500 font-bold mb-2">
        {new Date(blog.date).toLocaleDateString('id-ID')}
      </h5>
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        By {blog.author} in {blog.category}
      </p>
      <p className="mb-4">{blog.summary}</p>
      <div>{blog.content}</div>
    </div>
  );
};

export default BlogDetail;
