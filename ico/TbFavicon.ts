import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Favicon icon from Tabler Icons
 * @module
 */
export function TbFavicon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 5m0 3a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3z"}},{tag:"path",attr:{d:"M6 10v4"},child:[]},{tag:"path",attr:{d:"M11 10a2 2 0 1 0 0 4"},child:[]},{tag:"path",attr:{d:"M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]}]})(props);
}
export default TbFavicon;
