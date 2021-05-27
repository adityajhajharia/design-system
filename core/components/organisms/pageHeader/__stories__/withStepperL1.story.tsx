import * as React from 'react';
import PageHeader from '../PageHeader';
import { Stepper, Button, Breadcrumbs, Badge, Text, MetaList, Avatar } from '@/index';
import { action } from '@storybook/addon-actions';

export const withStepper = () => {
  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message'
    },
    {
      value: 'step_3',
      label: 'Schedule',
    }
  ];

  const breadcrumbData = [
    {
      label: 'campaigns',
      link: '/campaigns'
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
  const actions= (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Text className="mr-4">few minutes ago</Text>
      <Avatar className="mr-4" firstName="John" lastName="Doe" appearance="accent2"></Avatar>
      <Button className="mr-4" appearance="transparent" icon="more_horiz"></Button>
      <Button className="mr-4">Finish Later</Button>
      <Button className="mr-4" appearance="primary" onClick={onClickHandler}>Next</Button>
    </div>
  );
  const breadcrumbs= (
    <Breadcrumbs
      list={breadcrumbData}
      onClick={link => action(`on-click: ${link}`)}
    />
  );
  const badge= (
    <Badge appearance="secondary">Message</Badge>
  );
  const meta= (
    <MetaList
      list={[{ label: 'Draft' }]}
      seperator={true}
    />
  );

  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
      <PageHeader
        title='Annual Wellness Visit'
        separator = {true}
        navigationPosition = 'center'
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
        badge={badge}
        meta={meta}
      />
    </div>
  );
};

const customCode = `() => {
  const stepperData = [
    {
      value: 'step_1',
      label: 'Recipients',
    },
    {
      value: 'step_2',
      label: 'Message'
    },
    {
      value: 'step_3',
      label: 'Schedule',
    }
  ];

  const breadcrumbData = [
    {
      label: 'campaigns',
      link: '/campaigns'
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
  const actions= (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Text className="mr-4">few minutes ago</Text>
      <Avatar className="mr-4" firstName="John" lastName="Doe" appearance="accent2"></Avatar>
      <Button className="mr-4" appearance="transparent" icon="more_horiz"></Button>
      <Button className="mr-4">Finish Later</Button>
      <Button className="mr-4" appearance="primary" onClick={onClickHandler}>Next</Button>
    </div>
  );
  const breadcrumbs= (
    <Breadcrumbs
      list={breadcrumbData}
      onClick={link => console.log(link)}
    />
  );
  const badge= (
    <Badge appearance="secondary">Message</Badge>
  );
  const meta= (
    <MetaList
      list={[{ label: 'Draft' }]}
      seperator={true}
    />
  );

  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
      <PageHeader
        title='Annual Wellness Visit'
        separator = {true}
        navigationPosition = 'center'
        stepper={stepper}
        actions={actions}
        breadcrumbs={breadcrumbs}
        badge={badge}
        meta={meta}
      />
    </div>
  );
}`;

export default {
  title: 'Components/PageHeader/Level 1/With Stepper',
  component: PageHeader,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
