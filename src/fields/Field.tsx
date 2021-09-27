import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueID } from '../utils/useUniqueID';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { Phone } from './Phone';
import { Money } from './Money';
import { FieldContext } from './FieldContext';

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
  Phone: typeof Phone;
  Money: typeof Money;
}

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueID();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;
Field.Phone = Phone;
Field.Money = Money;

Field.propTypes = {
  children: PropTypes.node,
};
