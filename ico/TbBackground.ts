import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Background icon from Tabler Icons
 * @module
 */
export function TbBackground(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 8l4 -4"}},{tag:"path",attr:{d:"M14 4l-10 10"},child:[]},{tag:"path",attr:{d:"M4 20l16 -16"},child:[]},{tag:"path",attr:{d:"M20 10l-10 10"},child:[]},{tag:"path",attr:{d:"M20 16l-4 4"},child:[]}]})(props);
}
export default TbBackground;
