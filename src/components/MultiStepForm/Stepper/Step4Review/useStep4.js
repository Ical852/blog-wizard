import { useRouter } from "next/router";

export const useStep4 = (props) => {
  const {
    currentBlog,
    submitBlog,
    prevStep,
  } = props;
  const router = useRouter();

  const handleSubmit = () => {
    submitBlog();
    alert('Blog submitted successfully!');
    router.push('/');
  };

  return {
    blog: currentBlog,
    prevStep,
    handleSubmit,
  }
}