import { connect } from 'react-redux';
import { setBlogContent } from '@/redux/blogSlice';
import { useStep3 } from './useStep3';

const Step3Content = (props) => {
  const step3 = useStep3(props);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: Blog Content</h2>
      <div className="mb-4">
        <label className="block mb-2">Content</label>
        <textarea
          className="border p-2 w-full"
          value={step3.formData.content}
          onChange={(e) => step3.setFormData({ 
            ...formData, 
            content: e.target.value
          })}
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={step3.prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button
          onClick={step3.handleNext}
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
  setBlogContent: (payload) => dispatch(setBlogContent(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step3Content);
