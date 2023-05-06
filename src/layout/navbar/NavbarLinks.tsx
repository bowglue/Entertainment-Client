import styled from "styled-components";
import ButtonLinks from "../../components/ButtonLinks";
import { routes } from "../../routes";

const NavbarLinksStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

function NavbarLinks() {
  return (
    <NavbarLinksStyled>
      {routes.map((route) => {
        return (
          route.name && (
            <ButtonLinks key={route.path} to={route.path}>
              {route.name}
            </ButtonLinks>
          )
        );
      })}
    </NavbarLinksStyled>
  );
}

export default NavbarLinks;
