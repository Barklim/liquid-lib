import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox, CheckboxInput, CheckboxSpan } from './styles';

export interface CheckboxProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: 'primary' | 'secondary';
}

export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  ({ children, variant, ...props }, ref) => {
    return (
      <StyledCheckbox ref={ref} variant={variant} {...props}>
        {children}
        <CheckboxInput className={'input'}></CheckboxInput>
        <CheckboxSpan className={'span'}></CheckboxSpan>
      </StyledCheckbox>
    );
  }
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Checkbox.defaultProps = {
  variant: 'primary',
};
