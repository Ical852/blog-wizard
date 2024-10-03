import { useCallback, useMemo } from 'react';
import { useRouter } from "next/router";

export const useStep4 = (props) => {
  const {
    currentBlog,
    submitBlog,
    prevStep,
  } = props;
  const router = useRouter();
  const summary = useMemo(() => [
    {
      title: 'Title',
      value: currentBlog.title
    },
    {
      title: 'Author',
      value: currentBlog.author
    },
    {
      title: 'Summary',
      value: currentBlog.summary
    },
    {
      title: 'Category',
      value: currentBlog.category
    },
    {
      title: 'Content',
      value: currentBlog.content
    },
  ], []);

  const handleSubmit = useCallback(() => {
    submitBlog();
    alert('Blog submitted successfully!');
    router.push('/');
  }, [router]);

  return {
    summary,
    prevStep,
    handleSubmit,
  }
}