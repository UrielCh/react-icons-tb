import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Italic icon from Tabler Icons
 * @module
 */
export function TbItalic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 5l6 0"}},{tag:"path",attr:{d:"M7 19l6 0"},child:[]},{tag:"path",attr:{d:"M14 5l-4 14"},child:[]}]})(props);
}
export default TbItalic;
