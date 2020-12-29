import React, { FC } from "react";
import { IconButton } from "ui-neumorphism";
import { Menu } from "react-feather";
import styled from "styled-components";

type Props = {
  handleOpen: () => void;
};

const Header: FC<Props> = ({ handleOpen }) => {
  return (
    <HeaderWrapper>
      <IconButton rounded size="medium" onClick={handleOpen}>
        <Menu />
      </IconButton>
      <LogoWrapper>Logo here</LogoWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 60px;
  margin-bottom: 16px;
  padding: 0 16px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const LogoWrapper = styled.div`
  padding: 0 12px;
`;

export default Header;
