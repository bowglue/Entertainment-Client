import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonLinks = styled(Link)(({ theme }) => ({
  padding: "15px 16px",
  textDecoration: "none",
  color: theme.fontColor.light,
  borderRadius: theme.brRadius.medium,
  fontSize: "large",
  transition: "transform 200ms ease",
  textAlign: "center",
  fontFamily: "Noto Sans, sans-serif",

  "&:hover": {
    background: "white",
    color: theme.fontColor.dark,
    transform: " translateY(10px)",
  },
}));

export default ButtonLinks;
