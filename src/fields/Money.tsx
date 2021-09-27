import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledInput, InnerWrap, InnerEl, Commission } from './styles';
import { FieldContext } from './FieldContext';

export interface MoneyProps {
  isExist?: boolean;
  isCommission?: boolean;
  isError?: boolean;
}

export const Money = React.forwardRef<
  HTMLDivElement,
  MoneyProps & React.ComponentPropsWithoutRef<'div'>
>(({ isExist, isCommission, isError, ...props }, ref) => {
  const id = useContext(FieldContext);

  return (
    <div ref={ref} id={id} {...props}>
      <InnerWrap isExist={isExist}>
        <InnerEl>50 ₽</InnerEl>
        <InnerEl>100 ₽</InnerEl>
        <InnerEl>23 000 ₽</InnerEl>
      </InnerWrap>
      <StyledInput id={id} type="number" isError={isError} />
      <Commission isCommission={isCommission}>Комиссия 10 ₽</Commission>
    </div>
  );
});

Money.displayName = 'Field.Money';

Money.defaultProps = {
  isExist: true,
  isCommission: true,
  isError: false,
};

Money.propTypes = {
  isExist: PropTypes.bool,
  isCommission: PropTypes.bool,
  isError: PropTypes.bool,
};
