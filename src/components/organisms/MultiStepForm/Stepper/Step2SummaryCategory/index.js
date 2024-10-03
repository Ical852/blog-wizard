import { connect } from 'react-redux';
import {
  BottomStepper,
  SelectInput,
  TextAreaInput
} from '@/components';
import { setBlogSummary } from '@/redux/blogSlice';
import { useStep2 } from './useStep2';

const Step2SummaryCategory = (props) => {
  const step2 = useStep2(props);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 2: Summary & Category</h2>
      <TextAreaInput
        title={"Blog Summary"}
        value={step2.formData.summary}
        onChange={(e) => step2.setFormData({ 
          ...step2.formData,
          summary: e.target.value 
        })}
      />
      <SelectInput
        title={"Blog Category"}
        value={step2.formData.category}
        onChange={(e) => step2.setFormData({ 
          ...step2.formData,
          category: e.target.value
        })}
        placeholder={"Choose Category"}
        options={step2.options}
      />
      <BottomStepper
        onPrev={step2.handlePrev}
        onNext={step2.handleNext}
      />
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
