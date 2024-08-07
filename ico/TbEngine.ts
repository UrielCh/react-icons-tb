import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Engine icon from Tabler Icons
 * @module
 */
export function TbEngine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 10v6"}},{tag:"path",attr:{d:"M12 5v3"},child:[]},{tag:"path",attr:{d:"M10 5h4"},child:[]},{tag:"path",attr:{d:"M5 13h-2"},child:[]},{tag:"path",attr:{d:"M6 10h2l2 -2h3.382a1 1 0 0 1 .894 .553l1.448 2.894a1 1 0 0 0 .894 .553h1.382v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2v-2h-3v2a1 1 0 0 1 -1 1h-3.465a1 1 0 0 1 -.832 -.445l-1.703 -2.555h-2v-6z"},child:[]}]})(props);
}
export default TbEngine;
