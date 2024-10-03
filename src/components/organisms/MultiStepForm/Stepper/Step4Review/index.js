import { connect } from 'react-redux';
import { BottomStepper } from '@/components';
import { submitBlog } from '@/redux/blogSlice';
import { useStep4 } from './useStep4';

const Step4Review = (props) => {
  const step4 = useStep4(props);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 4: Review & Submit</h2>
      {step4.summary.map((sum) => (
        <div className="mb-4">
          <h3 className="font-bold">{sum.title}:</h3>
          <p>{sum.value}</p>
        </div>
      ))}
      <BottomStepper
        onPrev={step4.prevStep}
        onSubmit={step4.handleSubmit}
      />
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
