import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const IconBack = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={27} height={27} x={0.5} y={0.5} stroke="#4D4D4D" rx={13.5} />
    <Path
      fill="#fff"
      d="m14.998 19.627-.661.661a.711.711 0 0 1-1.009 0l-5.785-5.782a.711.711 0 0 1 0-1.009l5.785-5.785a.711.711 0 0 1 1.009 0l.66.66a.715.715 0 0 1-.011 1.021L11.4 12.81h8.553c.395 0 .714.318.714.714v.952a.713.713 0 0 1-.715.714H11.4l3.586 3.417a.71.71 0 0 1 .012 1.02Z"
    />
  </Svg>
)
export default IconBack
