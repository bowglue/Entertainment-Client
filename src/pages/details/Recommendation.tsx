import { Link } from "react-router-dom";
import styled from "styled-components";
import GradientItem from "../../components/GradientItem";
import WideCard from "../../components/WideCard";
import { IEntertainmentData } from "../../interface/EntertainmentDataInterface";
import { GradientCover } from "../../utils/Gradient";
import { Data } from "../../utils/SliderData";
import DetailsSectionHeader from "./DetailsSectionHeader";

const RecommendationContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
`;

const RecommentdationItem = styled.div`
  width: 20%;
`;

interface RecommendationProps {
  metadata: IEntertainmentData;
}
const Recommendation = ({ metadata }: RecommendationProps) => {
  return (
    <>
      <DetailsSectionHeader>More Like This</DetailsSectionHeader>
      <RecommendationContainer>
        {Data.slice(0, 5).map((metadata, index) => {
          return (
            <RecommentdationItem key={index}>
              <Link to={"/details/" + metadata.title} state={{ metadata }}>
                <WideCard metadata={metadata} style={{ borderRadius: "3px" }}>
                  <GradientItem gradient={GradientCover} />
                </WideCard>
              </Link>
            </RecommentdationItem>
          );
        })}
      </RecommendationContainer>
    </>
  );
};

export default Recommendation;
