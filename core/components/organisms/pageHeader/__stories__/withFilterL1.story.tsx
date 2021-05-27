import * as React from 'react';
import PageHeader from '../PageHeader';
import { Text, Tab, TabsWrapper, Badge } from '@/index';
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
              <Badge appearance="secondary">32</Badge>
            </div>
            <Text appearance='subtle'>New</Text>
          </>
        )}
      >
        {null}
      </Tab>
      <Tab
        label={(
          <>
            <div className="Tab-count">
              <Badge appearance="secondary">4</Badge>
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
              <Badge appearance="secondary">2</Badge>
            </div>
            <Text>Duplicate</Text>
          </>
        )}
      >
        {null}
      </Tab>
    </TabsWrapper>
  );

  return (
    <div className="w-100 p-6" style={{ background: '#f4f4f4' }}>
      <PageHeader 
        title="Sender creation report"
        separator={true}
        tabs={tabs}
      />
    </div>
  );
};

export default {
  title: 'Components/PageHeader/Level 1/With Filter',
  component: PageHeader
};
