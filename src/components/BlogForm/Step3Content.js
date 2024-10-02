import { useDispatch, useSelector } from 'react-redux';
import { setBlogContent } from '../../redux/blogSlice';
import { useState } from 'react';

const Step3Content = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.blog.currentBlog);
  const [formData, setFormData] = useState({ content });

  const handleNext = () => {
    if (formData.content) {
      dispatch(setBlogContent(formData));
      nextStep();
    } else {
      alert('Konten tidak boleh kosong.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: Blog Content</h2>
      <div className="mb-4">
        <label className="block mb-2">Content</label>
        <textarea
          className="border p-2 w-full"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3Content;
