import { connect } from 'react-redux';
import { BottomStepper, TextInput } from '@/components';
import { setBlogMetadata } from '@/redux/blogSlice';
import { useStep1 } from './useStep1';

const Step1Metadata = (props) => {
  const step1 = useStep1(props);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 1: Blog Metadata</h2>
      <TextInput
        title={"Blog Title"}
        value={step1.formData.title}
        onChange={(e) => step1.setFormData({ 
          ...step1.formData, 
          title: e.target.value 
        })}
      />
      <TextInput
        title={"Author Name"}
        value={step1.formData.author}
        onChange={(e) => step1.setFormData({ 
          ...step1.formData,
          author: e.target.value
        })}
      />
      <BottomStepper onNext={step1.handleNext} />
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
