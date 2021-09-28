import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import {
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  DISABLED_OPACITY,
} from '../utils/styles';
import { ButtonProps } from './Button';

const colorStyles = (p: ButtonProps) => {
  let color = PRIMARY_TEXT_COLOR,
    backgroundColor = PRIMARY_COLOR;

  if (p.variant === 'secondary') {
    color = SECONDARY_TEXT_COLOR;
    backgroundColor = SECONDARY_COLOR;
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${backgroundColor};
    border-radius: 8px;
    height: 40px;
    filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.23999999463558197px;
    text-align: center;

    &:focus-visible {
      border-color: ${color};
      box-shadow: 0 0 0 0.2rem ${transparentize(0.45, backgroundColor)};
    }
  `;
};

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  display: block;
  width: 100%;
  font-weight: 400;
  text-align: center;
  user-select: none;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  ${colorStyles}

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: inherit;
    opacity: ${DISABLED_OPACITY};
  }
  &:hover {
    background-color: #1389cd;
  }
  &:active {
    background-color: #117dbb;
  }
`;
