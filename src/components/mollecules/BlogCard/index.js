import React from 'react';
import Link from 'next/link';

const BlogCard = (props) => {
  const { blog, index } = props;

  return (
    <Link
      key={index}
      href={`/blog/${index}`}
      className="block max-w p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-5">
      <p className="text-gray-300 mb-2">{new Date(blog.date).toLocaleDateString('id-ID')}</p>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {blog.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
        {blog.summary}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
        {blog.content}
      </p>
      <p className="text-sm text-gray-500">
        By : {blog.author} in {blog.category}
      </p>
    </Link>
  )
}

export default BlogCard;
