import React from "react";
import styled from "styled-components";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";

const NavbarStyled = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 10000;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 10px 30px;

  div:nth-child(3) {
    margin-left: auto;
  }
`;

function Navbar() {
  return (
    <NavbarStyled>
      <NavbarLogo />
      <NavbarLinks />
      <NavbarMenu />
    </NavbarStyled>
  );
}

export default Navbar;
