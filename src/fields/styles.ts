import styled, { css } from 'styled-components';
import { PRIMARY_COLOR } from '../utils/styles';
import { PhoneProps } from './Phone';
import { TextareaProps } from './Textarea';
import { LabelProps } from './Label';
import { MoneyProps } from './Money';

const sizeStyles = (p: LabelProps) => {
  let size, color, height, lineHeight, letterSpacing;

  if (p.size === 'small') {
    size = '12px';
    color = '#807c7c';
    height = '16px';
    lineHeight = '18px';
    letterSpacing = '';
  } else if (p.size === 'medium') {
    size = '16px';
    color = '#2B2A29';
    lineHeight = '25px';
    letterSpacing = '-0.24px';
  }

  return css`
    font-size: ${size};
    color: ${color};
    height: ${height};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `;
};

export const StyledLabel = styled.label<LabelProps>`
  ${sizeStyles}

  color: ${(props) => props.isError && '#f50100'};

  /* margin-bottom: 0.4rem; */
  font-style: normal;
  font-weight: normal;
  text-indent: 0.5px;
`;

export const StyledPhone = styled.div``;

export const Close = styled.div<PhoneProps>`
  position: absolute;
  right: 18px;
  top: 53px;
  width: 15px;
  height: 15px;
  /* opacity: 0.3; */
  background-color: #b8b5b5;
  border-radius: 10px;

  display: ${(props) => props.isClear && 'none'};

  &:hover {
    background-color: #a09c9c;
  }
  &:before,
  &:after {
    position: absolute;
    top: 2px;
    left: 7px;
    content: ' ';
    height: 10px;
    width: 1px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const StyledInput = styled.input<MoneyProps>`
  display: block;
  width: 100%;
  padding: 0.5rem 0.4rem;
  padding-left: 0;

  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;

  color: ${PRIMARY_COLOR};
  color: ${(props) => props.isError && '#f50100'};

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #b8c2c7;
  appearance: none;
  border-radius: 0;
  transition: all 0.15s ease-in-out;
  -moz-appearance: textfield;

  ::placeholder {
    color: #d2d1d1;
  }

  &:focus {
    /* hack for border-bottom */
    margin-bottom: -1px;
    outline: none;
    border-color: ${PRIMARY_COLOR};
    border-bottom: 2px solid ${PRIMARY_COLOR};
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InnerWrap = styled.div<MoneyProps>`
  display: flex;
  position: absolute;
  right: 14px;
  top: 50px;
  height: 28px;

  display: ${(props) => !props.isExist && 'none'};
`;
export const InnerEl = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 8px;
  margin: 2px;
  border-radius: 4px;

  color: #807c7c;
  background-color: #f4f6f8;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.23999999463558197px;
  text-align: left;
`;

export const Commission = styled.div<MoneyProps>`
  height: 20px;

  color: ${PRIMARY_COLOR};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.24px;

  display: ${(props) => !props.isCommission && 'none'};
`;

export const StyledTextarea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})<TextareaProps>`
  resize: ${(props) => !props.isResizable && 'none'};
`;
