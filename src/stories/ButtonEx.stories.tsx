import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonEx } from '../buttonsEx/ButtonEx';

export default {
  title: 'Example/ButtonEx',
  component: ButtonEx,
} as Meta;

const Template: Story = (args) => (
  <ButtonEx {...args}>my button component</ButtonEx>
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
};
