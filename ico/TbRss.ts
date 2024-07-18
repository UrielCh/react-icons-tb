import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Rss icon from Tabler Icons
 * @module
 */
export function TbRss(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}},{tag:"path",attr:{d:"M4 4a16 16 0 0 1 16 16"},child:[]},{tag:"path",attr:{d:"M4 11a9 9 0 0 1 9 9"},child:[]}]})(props);
}
export default TbRss;
