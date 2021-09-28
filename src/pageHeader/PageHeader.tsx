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
  iLogoComp?: JSX.Element;
  iFlagComp?: JSX.Element;
  iAvatarComp?: JSX.Element;
}

export const PageHeader = React.forwardRef<HTMLHeadElement, PageHeaderProps>(
  ({ isAuth, userName, iLogoComp, iFlagComp, iAvatarComp, ...props }, ref) => {
    return (
      <StyledPageHeader ref={ref} isAuth={isAuth} {...props}>
        <LeftSide>
          <Logo>{iLogoComp}</Logo>
          <Middle>Снимайте заработанные деньги в любой день</Middle>
        </LeftSide>
        <RightSide>
          <Flag>{iFlagComp}</Flag>
          <WrapLogin>
            <Separator></Separator>
            {isAuth && <UserName>👋 &nbsp; Привет, {userName}</UserName>}
            {isAuth && <Avatar>{iAvatarComp}</Avatar>}
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
  iLogoComp: PropTypes.any,
  iFlagComp: PropTypes.any,
  iAvatarComp: PropTypes.any,
};

PageHeader.defaultProps = {
  isAuth: false,
  userName: 'Иван Иванов',
  iLogoComp: <img src={'./logo.png'} />,
  iFlagComp: <img src={'./rus.svg'} />,
  iAvatarComp: <img src={'./avatar.jpg'} />,
};
