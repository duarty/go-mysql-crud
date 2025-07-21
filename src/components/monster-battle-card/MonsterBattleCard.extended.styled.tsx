import styled, { CSSObject } from "@emotion/styled";
// Import Material-UI base components that will be styled
import {
  Box, // For flexible containers
  Card, // For card-like appearance with elevation
  LinearProgress, // For progress bars showing monster stats
  linearProgressClasses, // For accessing MUI LinearProgress CSS classes
  Typography, // For text elements with proper typography
} from "@mui/material";
// Import centralized color constants to maintain design system consistency
import { colors } from "../../constants/colors";

export const BattleMonsterCard = styled(Card, {
  // Prevent 'centralized' prop from being forwarded to DOM element
  shouldForwardProp: (prop) => prop !== "centralized",
})<{ centralized?: boolean }>(({ centralized }) => ({
  padding: "13px 11px", // Internal padding for content
  width: "calc(307px - 22px)", // Fixed width minus padding (responsive calculation)
  height: "415px", // Fixed height for consistent card sizing
  background: colors.white, // White background from design system
  boxShadow: "-2px 3px 10px rgba(0, 0, 0, 0.25)", // Subtle shadow for depth
  borderRadius: "7px", // Rounded corners matching design system
  // Conditional flex layout for empty state centering
  display: centralized ? "flex" : "auto",
  alignItems: centralized ? "center" : "auto",
  justifyContent: centralized ? "center" : "auto",
}));

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: "Roboto", // Consistent with design system
  fontWeight: "400", // Normal weight for readability
  fontSize: "36px", // Large size for prominence
  lineHeight: "42px", // Proper line height for legibility
  color: colors.black, // High contrast text color
}));

export const MonsterName = styled(Typography)(() => ({
  fontFamily: "Roboto", // Consistent typography
  fontStyle: "normal", // Standard font style
  fontWeight: "400", // Normal weight
  fontSize: "22px", // Medium size for secondary prominence
  color: colors.black, // Consistent text color
  marginTop: "14px", // Spacing between image and name
}));

export const Line = styled.div(() => ({
  borderBottom: "2px solid rgba(0, 0, 0, 0.1)", // Subtle semi-transparent border
  width: "283px", // Matches card content width
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8, // Thicker than default for better visibility
  borderRadius: 15, // Fully rounded corners for modern look
  // Override MUI default background color
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  // Override MUI default progress color
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15, // Rounded progress fill
    backgroundColor: colors.progressColor,
  },
}));

export const MonsterContainer = styled(Box)(
  (): CSSObject => ({
    display: "flex", // Enable flexbox layout
    flexDirection: "column", // Stack elements vertically
  }),
);

export const MonsterImage = styled.img(() => ({
  borderRadius: "7px", // Rounded corners matching card style
  width: "283px", // Fixed width for consistent layout
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)", // Shadow for depth and focus
  height: "178px", // Fixed height with proper aspect ratio
}));

export const StatsContainer = styled(Box)(
  (): CSSObject => ({
    width: "100%", // Use full available width
    display: "flex", // Enable flexbox layout
    marginTop: "11px", // Space from separator line
    flexDirection: "column", // Stack stats vertically
    gap: 11, // Consistent spacing between stat items
  }),
);

export const StatBox = styled(Box)(
  (): CSSObject => ({
    display: "flex", // Enable flexbox layout
    flexDirection: "column", // Stack label above progress bar
    gap: 5, // Small gap between label and progress bar
  }),
);

export const StatLabel = styled(Typography)(() => ({
  fontFamily: "Roboto", // Consistent typography
  fontStyle: "normal", // Standard font style
  fontWeight: "400", // Normal weight for supporting text
  fontSize: "12px", // Small size for hierarchy
  color: colors.black, // Consistent text color
}));
