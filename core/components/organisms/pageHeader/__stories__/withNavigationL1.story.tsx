import * as React from 'react';
import PageHeader from '../PageHeader';
import { Navigation, Breadcrumbs, Badge, StatusHint, MetaList } from '@/index';
import { action } from '@storybook/addon-actions';

export const withNavigation = () => {
  const navigationData = [
    {
      name: 'menu_1',
      label: 'Perormance',
    },
    {
      name: 'menu_2',
      label: 'Recipients'
    }
  ];

  const breadcrumbData = [
    {
        label: 'Outreach',
        link: '/Outreach'
    }
  ];

  const navigation= (
    <Navigation
      menus={navigationData}
      onClick={action('menu-clicked')}
      active={{ name: 'menu_1' }}
      align='center'
    />
  )
  const actions= (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
    </div>
  )
  const breadcrumbs= (
    <Breadcrumbs
      list={breadcrumbData}
      onClick={link => action(`on-click: ${link}`)}
    />
  )
  const badge= (
    <Badge subtle ={true} appearance="success">Sent</Badge>
  )
  const meta= (
    <MetaList
      list={[{ label: 'Text' },{ label: 'Email'}]}
    />
  )
  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
      <PageHeader
        title='Covid-19'
        separator={true}
        navigationPosition='center'
        navigation={navigation}
        actions={actions}
        breadcrumbs={breadcrumbs}
        badge={badge}
        status={status}
        meta={meta}
      />
    </div>
  );
};

export default {
  title: 'Components/PageHeader/Level 1/With Navigation',
  component: PageHeader,
};
