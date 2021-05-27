import * as React from 'react';
import Radio from '../index';

export const OverflowContent = () => (
<<<<<<< HEAD
  <div className="w-50">
=======
  <div className="w-25">
>>>>>>> develop
    <Radio
      label="Share both your healthcare data and some personal information."
      name="options"
      value="Option 1"
    />
  </div>
);

export default {
  title: 'Components/Radio/Overflow Content',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] }
      }
    }
  }
};
