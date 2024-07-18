import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gif icon from Tabler Icons
 * @module
 */
export function TbGif(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1"}},{tag:"path",attr:{d:"M12 8v8"},child:[]},{tag:"path",attr:{d:"M16 12h3"},child:[]},{tag:"path",attr:{d:"M20 8h-4v8"},child:[]}]})(props);
}
export default TbGif;
