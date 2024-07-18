import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Emphasis icon from Tabler Icons
 * @module
 */
export function TbEmphasis(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 5h-8v10h8m-1 -5h-7"}},{tag:"path",attr:{d:"M6 20l0 .01"},child:[]},{tag:"path",attr:{d:"M10 20l0 .01"},child:[]},{tag:"path",attr:{d:"M14 20l0 .01"},child:[]},{tag:"path",attr:{d:"M18 20l0 .01"},child:[]}]})(props);
}
export default TbEmphasis;
