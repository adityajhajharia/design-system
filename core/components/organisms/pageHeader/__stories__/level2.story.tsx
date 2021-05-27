import * as React from 'react';
import PageHeader from '../PageHeader';
import { Stepper, Button, Breadcrumbs } from '@/index';
import { action } from '@storybook/addon-actions';

export const level2AndBeyond = () => {
  const stepperData = [
    {
      value: 'Upload',
      label: 'Upload',
    },
    {
      value: 'configure',
      label: 'configure'
    },
  ];

  const breadcrumbData = [
    {
      label: 'care Management',
      link: '/care Management'
    },
    {
      label: 'care Potential',
      link: '/care Potential'
    }
  ];

  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(-1);

  const onChangeHandler = (activeStep: number) => {
    setActive(activeStep);
  };

  const onClickHandler = () => {
    if (active > completed) setCompleted(active);
    active > completed ? setActive(active + 1) : setActive(completed + 1);
  };

 
  const stepper= <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={completed} />;
  const actions=(
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Button className="mr-4" appearance="transparent" icon="more_horiz"></Button>
      <Button className="mr-4" onClick={onClickHandler}>Cancel</Button>
      <Button className="mr-4" appearance="primary" onClick={onClickHandler}>Next</Button>
    </div>
  );
  const breadcrumbs= (
    <Breadcrumbs
      list={breadcrumbData}
      onClick={link => action(`on-click: ${link}`)}
    />
  )

  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
      <PageHeader
        title='Upload'
        navigationPosition='center'
        separator={false}
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
      />
    </div>
  );
};

const customCode = `() => {
  const stepperData = [
    {
      value: 'Upload',
      label: 'Upload',
    },
    {
      value: 'configure',
      label: 'configure'
    },
  ];

  const breadcrumbData = [
    {
      label: 'care Management',
      link: '/care Management'
    },
    {
      label: 'care Potential',
      link: '/care Potential'
    }
  ];

  const [active, setActive] = React.useState(0);
  const [completed, setCompleted] = React.useState(-1);

  const onChangeHandler = (activeStep) => {
    setActive(activeStep);
  };

  const onClickHandler = () => {
    if (active > completed) setCompleted(active);
    active > completed ? setActive(active + 1) : setActive(completed + 1);
  };

 
  const stepper= <Stepper steps={stepperData} onChange={onChangeHandler} active={active} completed={completed} />;
  const actions=(
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Button className="mr-4" appearance="transparent" icon="more_horiz"></Button>
      <Button className="mr-4" onClick={onClickHandler}>Cancel</Button>
      <Button className="mr-4" appearance="primary" onClick={onClickHandler}>Next</Button>
    </div>
  );
  const breadcrumbs= (
    <Breadcrumbs
      list={breadcrumbData}
      onClick={link => console.log(link)}
    />
  )

  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
      <PageHeader
        title='Upload'
        navigationPosition='center'
        separator={false}
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
      />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 2 And Beyond',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};



