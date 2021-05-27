import * as React from 'react';
import PageHeader from '../PageHeader';
import { Button, Breadcrumbs, Text, StatusHint, Navigation, AvatarGroup } from '@/index';
import { action } from '@storybook/addon-actions';

export const Responsiveness = () => {
const navigationData = [
    {
      name: 'menu_1',
      label: 'Interventions',
    },
    {
      name: 'menu_2',
      label: 'No Linked Activites'
    }
  ];

  const breadcrumbData = [
    {
      label: 'care potential',
      link: '/care potential'
    }
  ];

    const actions= (
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Text className="mr-4">Updated 1 day ago</Text>
        <AvatarGroup className="mr-4" list={[ { firstName: 'John' , lastName: 'Doe' ,appearance: "accent2" }, { firstName: 'Steven' , lastName: 'Packton', appearance: "accent3" } ]} appearance="accent2"></AvatarGroup>
        <Button className="mr-4" appearance="transparent" icon="more_horiz"></Button>
        <Button className="mr-4" icon="print"></Button>
        <Button className="mr-4" icon="assignment_turned_in">Complete</Button>
      </div>
    );
    const breadcrumbs=(
      <Breadcrumbs
        list={breadcrumbData}
        onClick={link => action(`on-click: ${link}`)}
      />
    );
    const status=(
      <StatusHint appearance="info">Ongoing</StatusHint>
    );

  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
      <PageHeader 
        navigationPosition="center"
        title="Pac Follow-Up Protocol"
        separator={true}
        navigation={<Navigation menus={navigationData} onClick={action('menu-clicked')} active={{ name: 'menu_1' }} />}
        actions={actions}
        breadcrumbs={breadcrumbs}
        status={status}
      />
    </div>
  );
};

export default {
  title: 'Components/PageHeader/Responsiveness',
  component: PageHeader
};
