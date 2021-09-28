import styled, { css } from 'styled-components';
import { PRIMARY_COLOR } from '../utils/styles';
import { PhoneProps } from './Phone';
import { TextareaProps } from './Textarea';
import { LabelProps } from './Label';
import { MoneyProps } from './Money';
import { CheckboxProps } from './Checkbox';

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

export const StyledCheckbox = styled.div<CheckboxProps>`
  // https://itchief.ru/html-and-css/styling-checkbox-and-radio
  // https://styled-components.com/docs/basics#coming-from-css
  top: 6px;
  left: 6px;
  position: relative;
  .input:not(:disabled):not(:checked) + .span:hover::before {
    border-color: #b3d7ff;
  }
  .input:not(:disabled):active + .span::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  .input:focus + .span::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  .input:focus:not(:checked) + .span::before {
    border-color: #80bdff;
  }
  .input:checked + .span::before {
    border-color: #28a5eb;
    background-color: #28a5eb;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  .input:disabled + .span::before {
    background-color: #e9ecef;
  }
`;
export const CheckboxInput = styled.input`
  margin-right: 10px;
  margin-bottom: 0.2em;
  //
  position: absolute;
  z-index: -1;
  opacity: 0;
  /* &:not(:disabled) {
    border-color: #b3d7ff;
    //
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  &:not(:checked) {
    border-color: #b3d7ff;
    //
    border-color: #80bdff;
  }
  &:active {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    //
    border-color: #80bdff;
  }
  &:checked {
    border-color: #28a5eb;
    background-color: #28a5eb;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  } */

  /* &:not(:disabled):not(:checked) {
    border-color: #b3d7ff;
  }
  &:not(:disabled):active {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  &:focus:not(:checked) {
    border-color: #80bdff;
  }
  &:checked {
    border-color: #28a5eb;
    background-color: #28a5eb;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  &:disabled {
    background-color: #e9ecef;
  } */
`;
export const CheckboxSpan = styled.span`
  display: inline-flex;
  align-items: center;
  user-select: none;
  /* &:before {
    content: '';
    display: inline-blck;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 1.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    //
    border-color: #b3d7ff;
    //
    background-color: #b3d7ff;
    border-color: #b3d7ff;
    //
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    //
    border-color: #80bdff;
    //
    border-color: #28a5eb;
    background-color: #28a5eb;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  &:hover {
    border-color: #b3d7ff;
  } */

  /* &:before {
    content: '';
    display: inline-blck;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 1.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    //
    background-color: #b3d7ff;
    border-color: #b3d7ff;
    //
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    //
    border-color: #80bdff;
    //
    border-color: #28a5eb;
    background-color: #28a5eb;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    //
    background-color: #e9ecef;
  }
  &:hover::before {
    border-color: #b3d7ff;
  } */
  &:before {
    content: '';
    display: inline-blck;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 1.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
`;

export const StyledLabel = styled.label<LabelProps>`
  ${sizeStyles}

  color: ${(props) => props.isError && '#f50100'};

  /* margin-bottom: 0.4rem; */
  font-style: normal;
  font-weight: normal;
  text-indent: 0.5px;
`;

export const StyledPhone = styled.div`
  display: flex;
  justify-content: space-between;

  .input {
    display: block;
    width: 100%;
    padding: 0.5rem 0.4rem;
    padding-left: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #2b2a29;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #b8c2c7;
    appearance: none;
    border-radius: 0;
    transition: all 0.15s ease-in-out;
  }
  .input:focus {
    outline: none;
    border-color: #28a5eb;
    border-bottom: 2px solid #28a5eb;
  }
`;

export const Close = styled.div<PhoneProps>`
  position: relative;
  /* float: right; */
  /* top: 28px; */
  /* hack */
  margin-left: -15px;
  top: 13px;
  width: 15px;
  height: 15px;
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
  position: relative;
  float: right;
  top: 36px;
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
