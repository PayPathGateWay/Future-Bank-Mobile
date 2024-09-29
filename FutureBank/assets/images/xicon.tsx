import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const Xicon = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={27} height={27} x={0.5} y={0.5} stroke="#4D4D4D" rx={13.5} />
    <Path
      fill="#fff"
      d="m16.527 14 3.79-3.79a1.191 1.191 0 0 0 0-1.685l-.842-.843a1.192 1.192 0 0 0-1.685 0L14 11.472l-3.79-3.79a1.192 1.192 0 0 0-1.685 0l-.843.843a1.192 1.192 0 0 0 0 1.684L11.472 14l-3.79 3.79a1.191 1.191 0 0 0 0 1.685l.843.843c.465.465 1.22.465 1.684 0l3.79-3.79 3.791 3.79c.466.465 1.22.465 1.685 0l.843-.843a1.191 1.191 0 0 0 0-1.684L16.528 14Z"
    />
  </Svg>
)
export default Xicon
