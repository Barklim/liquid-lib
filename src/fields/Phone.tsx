import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledPhone, Close } from './styles';
import { FieldContext } from './FieldContext';
import Input from 'react-phone-number-input/input';
// import CSS from 'csstype';
// import * as CSS from 'csstype';

// const inlineStylePhone: CSS.Properties = {
//   display: 'block',
//   width: '100%',
//   padding: '0.5rem 0.4rem ',
//   paddingLeft: '0',
//   fontSize: '1rem !important',
//   lineHeight: '1.5',
//   color: '#2b2a29',
//   // strange effect
//   // backgroundColor: 'transparent',
//   border: 'none',
//   borderBottom: '1px solid #b8c2c7',
//   appearance: 'none',
//   borderRadius: '0',
//   transition: 'all 0.15s ease-in-out',
// };
// const pseudos: { [P in CSS.SimplePseudos]?: CSS.Properties } = {
//   ':hover': {
//     display: 'none',
//   },
// };

export interface PhoneProps {
  isClear?: boolean;
}

export const Phone = React.forwardRef<
  HTMLDivElement,
  PhoneProps & React.ComponentPropsWithoutRef<'div'>
>(({ isClear, ...props }, ref) => {
  const id = useContext(FieldContext);
  const [value, setValue] = useState<string | undefined>('+7 ');

  const [clear, setClear] = useState<boolean>();

  const handleOnChange = (value: string | undefined) => {
    setValue(value);
    value ? setClear(false) : setClear(true);
  };

  const handleClick = () => {
    setValue('');
    setClear(true);
  };

  return (
    <StyledPhone ref={ref} id={id} {...props}>
      <Input
        country="RU"
        international={true}
        withCountryCallingCode={true}
        value={value}
        onChange={handleOnChange}
        className={'input'}
        // style={inlineStylePhone}
      />
      <Close isClear={clear} onClick={handleClick}></Close>
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
