import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledPhone, Close } from './styles';
import { FieldContext } from './FieldContext';
import Input from 'react-phone-number-input/input';
import './styles.css';

export interface PhoneProps {
  isClear?: boolean;
}

export const Phone = React.forwardRef<
  HTMLDivElement,
  PhoneProps & React.ComponentPropsWithoutRef<'div'>
>(({ isClear, ...props }, ref) => {
  const id = useContext(FieldContext);
  const [value, setValue] = useState<string | undefined>();

  const handleOnChange = (value: string | undefined) => {
    setValue(value);
  };

  return (
    <StyledPhone ref={ref} id={id} {...props}>
      <Close isClear={isClear} onClick={() => setValue('')}></Close>
      <Input
        country="RU"
        international={true}
        withCountryCallingCode={true}
        value={value}
        onChange={handleOnChange}
        className={'input'}
      />
    </StyledPhone>
  );
});

Phone.displayName = 'Field.Phone';

Phone.defaultProps = {
  isClear: true,
};

Phone.propTypes = {
  isClear: PropTypes.bool,
};
