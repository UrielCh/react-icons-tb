import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Disabled icon from Tabler Icons
 * @module
 */
export function TbDisabled(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}},{tag:"path",attr:{d:"M11 7l0 8l4 0l4 5"},child:[]},{tag:"path",attr:{d:"M11 11l5 0"},child:[]},{tag:"path",attr:{d:"M7 11.5a5 5 0 1 0 6 7.5"},child:[]}]})(props);
}
export default TbDisabled;
