import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SavingsIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 26.833 16" // Set the viewBox to match the SVG's dimensions
    fill="none"
    {...props}
  >
    <Path
      fill="white"
      d="M13.5 3.333c-2.21 0-4 2.09-4 4.667s1.79 4.667 4 4.667c2.208 0 4-2.09 4-4.667s-1.79-4.667-4-4.667Zm1.667 7c0 .184-.15.334-.334.334h-2.666a.333.333 0 0 1-.334-.334v-.666c0-.184.15-.334.334-.334h.666v-2.31l-.02.013a.333.333 0 0 1-.461-.092l-.37-.555a.333.333 0 0 1 .092-.462l.639-.426a1 1 0 0 1 .555-.168h.565c.184 0 .334.15.334.334v3.666h.666c.184 0 .334.15.334.334v.666ZM25.5 0h-24C.764 0 .167.597.167 1.333v13.334C.167 15.403.764 16 1.5 16h24c.736 0 1.333-.597 1.333-1.333V1.333C26.833.597 26.236 0 25.5 0Zm-.667 11.333A2.666 2.666 0 0 0 22.167 14H4.833a2.667 2.667 0 0 0-2.666-2.667V4.667A2.666 2.666 0 0 0 4.833 2h17.334a2.666 2.666 0 0 0 2.666 2.667v6.666Z"
    />
  </Svg>
);

export default SavingsIcon;
