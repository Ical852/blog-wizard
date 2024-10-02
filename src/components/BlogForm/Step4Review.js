import { useSelector, useDispatch } from 'react-redux';
import { submitBlog } from '../../redux/blogSlice';

const Step4Review = ({ prevStep }) => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.currentBlog);

  const handleSubmit = () => {
    dispatch(submitBlog());
    alert('Blog berhasil disubmit!');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 4: Review & Submit</h2>
      <div className="mb-4">
        <h3 className="font-bold">Title:</h3>
        <p>{blog.title}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Author:</h3>
        <p>{blog.author}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Summary:</h3>
        <p>{blog.summary}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Category:</h3>
        <p>{blog.category}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Content:</h3>
        <p>{blog.content}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4Review;
