import { connect } from 'react-redux';
import { submitBlog } from '@/redux/blogSlice';
import { useStep4 } from './useStep4';

const Step4Review = (props) => {
  const step4 = useStep4(props);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 4: Review & Submit</h2>
      <div className="mb-4">
        <h3 className="font-bold">Title:</h3>
        <p>{step4.blog.title}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Author:</h3>
        <p>{step4.blog.author}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Summary:</h3>
        <p>{step4.blog.summary}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Category:</h3>
        <p>{step4.blog.category}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">Content:</h3>
        <p>{step4.blog.content}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={step4.prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button
          onClick={step4.handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentBlog: state.blog.currentBlog,
});

const mapDispatchToProps = (dispatch) => ({
  submitBlog: () => dispatch(submitBlog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step4Review);
