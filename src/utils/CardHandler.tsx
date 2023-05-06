import CoverGradient from "../components/GradientItem";
import PosterCard from "../components/PosterCard";
import WideCard from "../components/WideCard";
import PreviewPoster from "../features/preview-video/components/PreviewPoster";
import PreviewWide from "../features/preview-video/components/PreviewWide";
import { PreviewCardProps } from "../features/preview-video/interface/IPreview";
import { IEntertainmentData } from "../interface/EntertainmentDataInterface";
import { GradientCover } from "./Gradient";

// export const handleCover = (type: string, video: IData) => {
//   if (type === "wide")
//     return (
//       <WideCard video={video}>
//         <CoverGradient isHidden={false} gradient={GradientCover} />
//       </WideCard>
//     );
//   if (type === "poster")
//     return (
//       <PosterCard video={video}>
//         <CoverGradient isHidden={false} gradient={GradientCover} />
//       </PosterCard>
//     );
// };

// export const handlePreview = (type: string, previewProps: PreviewCardProps) => {
//   if (type === "wide") return <PreviewWide {...previewProps} />;
//   if (type === "poster") return <PreviewPoster {...previewProps} />;
// };
