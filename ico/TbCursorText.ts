import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CursorText icon from Tabler Icons
 * @module
 */
export function TbCursorText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 12h4"}},{tag:"path",attr:{d:"M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3"},child:[]},{tag:"path",attr:{d:"M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3"},child:[]}]})(props);
}
export default TbCursorText;
