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
}

export const PageHeader = React.forwardRef<HTMLHeadElement, PageHeaderProps>(
  ({ isAuth, userName, ...props }, ref) => {
    return (
      <StyledPageHeader ref={ref} isAuth={isAuth} {...props}>
        <LeftSide>
          <Logo></Logo>
          <Middle>Снимайте заработанные деньги в любой день</Middle>
        </LeftSide>
        <RightSide>
          <Flag></Flag>
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
};

PageHeader.defaultProps = {
  isAuth: false,
  userName: 'Иван Иванов',
};
