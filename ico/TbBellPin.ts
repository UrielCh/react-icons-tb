import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BellPin icon from Tabler Icons
 * @module
 */
export function TbBellPin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 17h-8a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6"}},{tag:"path",attr:{d:"M9 17v1a3 3 0 0 0 3.64 2.931"},child:[]},{tag:"path",attr:{d:"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"},child:[]},{tag:"path",attr:{d:"M19 18v.01"},child:[]}]})(props);
}
export default TbBellPin;
