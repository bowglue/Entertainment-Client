import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import NavbarBookmark from "./NavbarBookmark";
import Search from "./Search";

const NavbarMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function NavbarMenu() {
  return (
    <NavbarMenuContainer>
      <Search />
      <NavbarBookmark />
      <Avatar />
    </NavbarMenuContainer>
  );
}

export default NavbarMenu;
