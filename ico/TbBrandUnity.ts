import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandUnity icon from Tabler Icons
 * @module
 */
export function TbBrandUnity(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 3l6 4v7"}},{tag:"path",attr:{d:"M18 17l-6 4l-6 -4"},child:[]},{tag:"path",attr:{d:"M4 14v-7l6 -4"},child:[]},{tag:"path",attr:{d:"M4 7l8 5v9"},child:[]},{tag:"path",attr:{d:"M20 7l-8 5"},child:[]}]})(props);
}
export default TbBrandUnity;
