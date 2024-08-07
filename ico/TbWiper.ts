import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Wiper icon from Tabler Icons
 * @module
 */
export function TbWiper(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 18m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}},{tag:"path",attr:{d:"M3 9l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0"},child:[]},{tag:"path",attr:{d:"M12 18l-2.2 -12.8"},child:[]}]})(props);
}
export default TbWiper;
