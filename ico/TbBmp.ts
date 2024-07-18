import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bmp icon from Tabler Icons
 * @module
 */
export function TbBmp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 16v-8h2a2 2 0 1 1 0 4h-2"}},{tag:"path",attr:{d:"M6 14a2 2 0 0 1 -2 2h-2v-8h2a2 2 0 1 1 0 4h-2h2a2 2 0 0 1 2 2z"},child:[]},{tag:"path",attr:{d:"M9 16v-8l3 6l3 -6v8"},child:[]}]})(props);
}
export default TbBmp;
