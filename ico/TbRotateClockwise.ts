import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * RotateClockwise icon from Tabler Icons
 * @module
 */
export function TbRotateClockwise(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5"}}]})(props);
}
export default TbRotateClockwise;
