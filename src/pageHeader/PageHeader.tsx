import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledPageHeader,
  LeftSide,
  Logo,
  Middle,
  RightSide,
  Flag,
  WrapLogin,
  Separator,
  UserName,
  Avatar,
  Login,
} from './styles';

export interface PageHeaderProps
  extends React.ComponentPropsWithoutRef<'header'> {
  isAuth?: boolean;
  userName?: string;
  iFlag?: string;
  iLogo?: string;
}

export const PageHeader = React.forwardRef<HTMLHeadElement, PageHeaderProps>(
  ({ isAuth, userName, iFlag, iLogo, ...props }, ref) => {
    return (
      <StyledPageHeader ref={ref} isAuth={isAuth} {...props}>
        <LeftSide>
          <Logo iLogo={iLogo}></Logo>
          <Middle>Снимайте заработанные деньги в любой день</Middle>
        </LeftSide>
        <RightSide>
          <Flag iFlag={iFlag}></Flag>
          <WrapLogin>
            <Separator></Separator>
            {isAuth && <UserName>👋 &nbsp; Привет, {userName}</UserName>}
            {isAuth && <Avatar></Avatar>}
            {!isAuth && <Login>Войти</Login>}
          </WrapLogin>
        </RightSide>
      </StyledPageHeader>
    );
  }
);

PageHeader.displayName = 'PageHeader';

PageHeader.propTypes = {
  children: PropTypes.node,
  isAuth: PropTypes.bool,
  userName: PropTypes.string,
  iFlag: PropTypes.string,
  iLogo: PropTypes.string,
};

PageHeader.defaultProps = {
  isAuth: false,
  userName: 'Иван Иванов',
  iFlag: './rus.svg',
  iLogo: './logo.png',
};
