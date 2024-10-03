import { connect } from 'react-redux';
import { setBlogMetadata } from '@/redux/blogSlice';
import { useStep1 } from './useStep1';

const Step1Metadata = (props) => {
  const step1 = useStep1(props);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 1: Blog Metadata</h2>
      <div className="mb-4">
        <label className="block mb-2">Blog Title</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={step1.formData.title}
          onChange={(e) => step1.setFormData({ 
            ...formData, 
            title: e.target.value 
          })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Author Name</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={step1.formData.author}
          onChange={(e) => step1.setFormData({ 
            ...formData,
            author: e.target.value
          })}
        />
      </div>
      <button
        onClick={step1.handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentBlog: state.blog.currentBlog,
});

const mapDispatchToProps = (dispatch) => ({
  setBlogMetadata: (payload) => dispatch(setBlogMetadata(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step1Metadata);
