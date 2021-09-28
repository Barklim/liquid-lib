import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PageHeader } from '../pageHeader/PageHeader';

export default {
  title: 'Library/PageHeader',
  component: PageHeader,
} as Meta;

const Template: Story = (args) => (
  <PageHeader {...args}>my header component</PageHeader>
);

export const Default = Template.bind({});

Default.args = {
  isAuth: false,
  userName: 'Иван Иванов',
  iFlag: './rus.svg',
  iLogo: './logo.png',
};
