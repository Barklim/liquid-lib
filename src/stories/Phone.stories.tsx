import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Library/Phone',
  component: Field.Phone,
  subcomponents: { Field, label: Field.Label },
} as Meta;

const Template: Story = (args) => (
  <Field>
    <Field.Label>PhoneInput</Field.Label>
    <Field.Phone placeholder="Custom PhoneInput" {...args} />
  </Field>
);

export const Default = Template.bind({});

Default.args = {
  isClear: true,
};
