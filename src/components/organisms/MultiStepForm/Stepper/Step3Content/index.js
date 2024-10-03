import { connect } from 'react-redux';
import { BottomStepper, TextAreaInput } from '@/components/atoms';
import { setBlogContent } from '@/redux/blogSlice';
import { useStep3 } from './useStep3';

const Step3Content = (props) => {
  const step3 = useStep3(props);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: Blog Content</h2>
      <TextAreaInput
        title={"Content"}
        value={step3.formData.content}
        onChange={(e) => step3.setFormData({ 
          ...step3.formData, 
          content: e.target.value
        })}
      />
      <BottomStepper 
        onPrev={step3.handlePrev}
        onNext={step3.handleNext}
      />
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
