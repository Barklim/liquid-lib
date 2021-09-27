import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FieldContext } from './FieldContext';
import { StyledLabel } from './styles';

export interface LabelProps {
  size?: 'small' | 'medium';
  isError?: boolean;
}

export const Label = React.forwardRef<
  HTMLLabelElement,
  LabelProps & React.ComponentPropsWithoutRef<'label'>
>(({ size, isError, ...props }, ref) => {
  const id = useContext(FieldContext);

  return (
    <StyledLabel
      ref={ref}
      size={size}
      isError={isError}
      htmlFor={id}
      {...props}
    />
  );
});

Label.displayName = 'Field.Label';

Label.defaultProps = {
  size: 'small',
  isError: false,
};

Label.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium']),
  isError: PropTypes.bool,
};
