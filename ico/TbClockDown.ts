import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClockDown icon from Tabler Icons
 * @module
 */
export function TbClockDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.984 12.535a9 9 0 1 0 -8.431 8.448"}},{tag:"path",attr:{d:"M12 7v5l3 3"},child:[]},{tag:"path",attr:{d:"M19 16v6"},child:[]},{tag:"path",attr:{d:"M22 19l-3 3l-3 -3"},child:[]}]})(props);
}
export default TbClockDown;
