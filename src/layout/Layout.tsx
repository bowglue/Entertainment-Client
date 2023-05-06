import styled from "styled-components";
import Footer from "./footer/Footer";
import Main from "./Main";
import Navbar from "./navbar/Navbar";

const LayoutContainer = styled.div(({ theme }) => ({
  // background: "linear-gradient(360deg,#030303 10%,#1f1f1f 100%)",
  background: theme.bgColor.main,
  color: theme.fontColor.light,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));

function Layout({ children }: any) {
  return (
    <LayoutContainer>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
