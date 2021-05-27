import * as React from 'react';
import PageHeader from '../PageHeader';
import { Button, Text, Tab, TabsWrapper, Badge } from '@/index';
import { action } from '@storybook/addon-actions';

export const withFilter = () => {
  const active = 0;

  const onTabChangeHandler = (tabIndex: number) => {
    return action(`tab-change: ${tabIndex}`)();
  };
  const tabs=(
    <TabsWrapper
      active={active}
      onTabChange={onTabChangeHandler}
    >
      <Tab
        label={(
          <>
            <div className="Tab-count">
              <Badge appearance="secondary">04</Badge>
            </div>
            <Text appearance='subtle'>Current</Text>
          </>
        )}
      >
        {null}
      </Tab>
      <Tab
        label={(
          <>
            <div className="Tab-count">
              <Badge appearance="secondary">04</Badge>
            </div>
            <Text>Invited</Text>
          </>
        )}
      >
        {null}
      </Tab>
      <Tab
        label={(
          <>
            <div className="Tab-count">
              <Badge appearance="secondary">04</Badge>
            </div>
            <Text>Inactive</Text>
          </>
        )}
      >
        {null}
      </Tab>
    </TabsWrapper>
  )
  const actions=(
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Button icon="get_app" className="mr-4">Download Records</Button>
      <Button appearance="primary">Invite users</Button>
    </div>
  )

  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
      <PageHeader 
        title="Users"
        separator={true}
        tabs={tabs}
        actions={actions}
      />
    </div>
  );
};

export default {
  title: 'Components/PageHeader/Level 0/With Filter',
  component: PageHeader
};
