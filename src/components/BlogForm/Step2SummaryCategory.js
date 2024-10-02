import { useDispatch, useSelector } from 'react-redux';
import { setBlogSummary } from '../../redux/blogSlice';
import { useState } from 'react';

const Step2SummaryCategory = ({ nextStep, prevStep }) => {
  const dispatch = useDispatch();
  const { summary, category } = useSelector((state) => state.blog.currentBlog);
  const [formData, setFormData] = useState({ summary, category });

  const handleNext = () => {
    if (formData.summary && formData.category) {
      dispatch(setBlogSummary(formData));
      nextStep();
    } else {
      alert('Semua field harus diisi.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 2: Summary & Category</h2>
      <div className="mb-4">
        <label className="block mb-2">Blog Summary</label>
        <textarea
          className="border p-2 w-full"
          value={formData.summary}
          onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Blog Category</label>
        <select
          className="border p-2 w-full"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="">Pilih Kategori</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Business">Business</option>
        </select>
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

export default Step2SummaryCategory;
