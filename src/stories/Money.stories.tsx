import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Library/Money',
  component: Field.Money,
  subcomponents: { Field, label: Field.Label },
} as Meta;

const Template: Story = (args) => (
  <Field>
    <Field.Label size={'medium'}>MoneyLabel</Field.Label>
    <Field.Money placeholder="00,00 ₽" {...args} />
  </Field>
);

export const Default = Template.bind({});

Default.args = {
  isExist: true,
  isCommission: true,
  isError: false,
};
