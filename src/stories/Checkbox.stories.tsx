import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkbox } from '../fields/Checkbox';

export default {
  title: 'Library/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story = (args) => <Checkbox {...args}></Checkbox>;

export const Default = Template.bind({});

Default.args = {
  variant: 'primary',
};
