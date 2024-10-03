import { connect } from 'react-redux';
import { setBlogSummary } from '@/redux/blogSlice';
import { useStep2 } from './useStep2';

const Step2SummaryCategory = (props) => {
  const step2 = useStep2(props);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 2: Summary & Category</h2>
      <div className="mb-4">
        <label className="block mb-2">Blog Summary</label>
        <textarea
          className="border p-2 w-full"
          value={step2.formData.summary}
          onChange={(e) => step2.setFormData({ 
            ...formData,
            summary: e.target.value 
          })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Blog Category</label>
        <select
          className="border p-2 w-full"
          value={step2.formData.category}
          onChange={(e) => step2.setFormData({ 
            ...formData,
            category: e.target.value
          })}>
          <option value="">Choose Category</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button
          onClick={step2.prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button
          onClick={step2.handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentBlog: state.blog.currentBlog,
});

const mapDispatchToProps = (dispatch) => ({
  setBlogSummary: (payload) => dispatch(setBlogSummary(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step2SummaryCategory);
