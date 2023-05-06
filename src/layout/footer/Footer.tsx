import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

function Footer() {
  return <FooterStyled>© All Rights Reserved by My Footer</FooterStyled>;
}

export default Footer;
