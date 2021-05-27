import * as React from 'react';
import PageHeader from '../PageHeader';
import { Navigation, Button } from '@/index';
import { action } from '@storybook/addon-actions';

export const withNavigation = () => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Virtual Visits',
    },
    {
      name: 'menu_2',
      label: 'Assesments'
    }
  ];
  const navigation=<Navigation menus={navigationData} onClick={action('menu-clicked')} active={{ name: 'menu_1' }} />;
  const actions=(
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Button className="mr-4">Reorganize</Button>
      <Button icon="get_app">Export to PDF</Button>
    </div>
  )

  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
      <PageHeader
        title="Dashboard"
        separator={true}
        navigation={navigation}
        actions={actions}
      />
    </div>
  );
};

export default {
  title: 'Components/PageHeader/Level 0/With Navigation',
  component: PageHeader
};
