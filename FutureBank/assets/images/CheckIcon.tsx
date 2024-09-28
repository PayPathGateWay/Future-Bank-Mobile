import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface CheckIconProps extends SvgProps {
  color?: string; // Allow color prop
  fillOpacity: number
}

const CheckIcon: React.FC<CheckIconProps> = ({ color = "#fff", fillOpacity = 0.1, ...props }) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      fillOpacity={fillOpacity}
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-11.157 5.295 7.42-7.42a.645.645 0 0 0 0-.912l-.913-.912a.645.645 0 0 0-.912 0l-6.05 6.05-2.826-2.824a.645.645 0 0 0-.912 0l-.913.912a.645.645 0 0 0 0 .912l4.194 4.194c.252.252.66.252.912 0Z"
    />
  </Svg>
);

export default CheckIcon;
