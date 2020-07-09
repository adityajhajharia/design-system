import * as React from 'react';
import Input from '../Input';
import { action } from '@storybook/addon-actions';

export const searchInput = () => {
  const icon = 'search';
  return (
    <div className="Row">
      <div className="mr-9 mb-8 w-25">
        <Input
          name="input"
          value="Value"
          onChange={action('on-change')}
          onClear={action('on-clear')}
          icon={icon}
        />
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Input',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input'
      }
    }
  }
};
