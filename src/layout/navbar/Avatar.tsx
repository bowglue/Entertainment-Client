import React from "react";
import styled from "styled-components";
import KratosAvatar from "../../assets/icons/KratosAvatar.jpg";

const AvatarContainer = styled.div`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
`;

function Avatar() {
  return (
    <AvatarContainer>
      <img style={{ width: "100%" }} src={KratosAvatar} alt="Avatar" />
    </AvatarContainer>
  );
}

export default Avatar;
