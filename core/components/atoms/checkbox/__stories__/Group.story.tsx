import * as React from 'react';
import { Checkbox, Label } from '@/index';

export const CheckboxGroup = () => (
  <div>
    <Label>
      Problems
    </Label>
    <Checkbox
      label="Cardiovascular"
      defaultChecked={true}
    />
    <Checkbox
      label="Obesity"
      defaultChecked={true}
<<<<<<< HEAD
    />
    <Checkbox
      label="Patient has language barriers"
    />
    <Checkbox
      label="Mental and behavioral health conditions"
=======
      className="mt-5"
    />
    <Checkbox
      label="Patient has language barriers"
      className="mt-5"
    />
    <Checkbox
      label="Mental and behavioral health conditions"
      className="mt-5"
>>>>>>> develop
    />
  </div>
);

export default {
  title: 'Components/Checkbox/Checkbox Group',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
