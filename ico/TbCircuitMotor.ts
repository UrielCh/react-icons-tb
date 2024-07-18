import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircuitMotor icon from Tabler Icons
 * @module
 */
export function TbCircuitMotor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}},{tag:"path",attr:{d:"M5 12h-3"},child:[]},{tag:"path",attr:{d:"M19 12h3"},child:[]},{tag:"path",attr:{d:"M10 14v-4l2 2l2 -2v4"},child:[]}]})(props);
}
export default TbCircuitMotor;
