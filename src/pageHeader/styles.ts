import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { PRIMARY_COLOR, IMG_LOGO, IMG_FLAG, IMG_AVATAR } from '../utils/styles';
import { PageHeaderProps } from './PageHeader';

const colorStyles = () => {
  const color = '#000',
    backgroundColor = '#fff';

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${backgroundColor};

    &:focus-visible {
      border-color: ${color};
      box-shadow: 0 0 0 0.2rem ${transparentize(0.45, backgroundColor)};
    }
  `;
};

export const StyledPageHeader = styled.header<PageHeaderProps>`
  cursor: auto;
  display: flex;
  justify-content: space-between;
  height: 64px;
  width: '100%';
  font-weight: 400;
  text-align: center;
  user-select: none;
  border: 1px solid transparent;
  border-bottom: 2px solid #f4f6f8 !important;
  padding: 0;
  line-height: 1.5;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  ${colorStyles}

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: inherit;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #b8c2c7;
`;

export const Logo = styled.div`
  width: 122px;
  margin: 0 28px 0 50px;
  bottom: 5px;
  position: relative;
  &::after {
    content: '';
    background-image: url(${IMG_LOGO});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: block;
    position: absolute;
    top: 0;
    width: 122px;
    height: 100%;
  }
  @media (max-width: 768px) {
    margin: 0 28px 0 20px;
  }
`;

export const Middle = styled.div<PageHeaderProps>`
  display: flex;
  align-items: center;
  margin-right: 4px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const Flag = styled.div`
  margin-right: 16px;
  background-blend-mode: overlay;
  &::after {
    content: '';
    background-image: url(${IMG_FLAG});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: block;
    width: 20px;
    height: 15px;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
`;

export const WrapLogin = styled.div`
  width: 236px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 32px;
  top: 32px;

  background: linear-gradient(
    180deg,
    rgba(185, 194, 200, 0) 0%,
    #b9c2c8 51.04%,
    rgba(185, 194, 200, 0) 100%
  );
`;

export const Login = styled.div<PageHeaderProps>`
  display: flex;
  align-items: center;
  margin-right: 50px;
  color: ${PRIMARY_COLOR};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  @media (max-width: 768px) {
    margin-right: 15px;
  }
`;

export const UserName = styled.div<PageHeaderProps>`
  position: absolute;
  float: left;
  margin-left: 10px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.23999999463558197px;
  text-align: right;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Avatar = styled.div<PageHeaderProps>`
  position: absolute;
  float: left;
  margin-left: 16px;
  &::after {
    content: '';
    background-image: url(${IMG_AVATAR});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
