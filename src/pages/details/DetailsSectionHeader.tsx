import React from "react";
import styled from "styled-components";
import DetailsDivider from "./DetailsDivider";

const SectionHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 3rem 0 0.75rem;
  column-gap: 1.5rem;

  h2 {
    margin: 0;
    font-size: 1.75rem;
    min-width: fit-content;
  }
`;

interface SectionHeaderProps {
  children: React.ReactNode;
}
const DetailsSectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <SectionHeader>
      <h2>{children}</h2>
      <DetailsDivider />
    </SectionHeader>
  );
};

export default DetailsSectionHeader;
