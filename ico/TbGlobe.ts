import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Globe icon from Tabler Icons
 * @module
 */
export function TbGlobe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}},{tag:"path",attr:{d:"M5.75 15a8.015 8.015 0 1 0 9.25 -13"},child:[]},{tag:"path",attr:{d:"M11 17v4"},child:[]},{tag:"path",attr:{d:"M7 21h8"},child:[]}]})(props);
}
export default TbGlobe;
