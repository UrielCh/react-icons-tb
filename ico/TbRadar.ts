import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Radar icon from Tabler Icons
 * @module
 */
export function TbRadar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9"}},{tag:"path",attr:{d:"M16 9a5 5 0 1 0 -7 7"},child:[]},{tag:"path",attr:{d:"M20.486 9a9 9 0 1 0 -11.482 11.495"},child:[]}]})(props);
}
export default TbRadar;
