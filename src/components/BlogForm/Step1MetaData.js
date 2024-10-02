import { useDispatch, useSelector } from 'react-redux';
import { setBlogMetadata } from '../../redux/blogSlice';
import { useState } from 'react';

const Step1Metadata = ({ nextStep }) => {
  const dispatch = useDispatch();
  const { title, author } = useSelector((state) => state.blog.currentBlog);
  const [formData, setFormData] = useState({ title, author });

  const handleNext = () => {
    if (formData.title && formData.author) {
      dispatch(setBlogMetadata(formData));
      nextStep();
    } else {
      alert('Semua field harus diisi.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 1: Blog Metadata</h2>
      <div className="mb-4">
        <label className="block mb-2">Blog Title</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Author Name</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Step1Metadata;
