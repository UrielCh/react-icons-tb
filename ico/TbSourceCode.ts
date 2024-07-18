import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SourceCode icon from Tabler Icons
 * @module
 */
export function TbSourceCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.5 4h2.5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-5"}},{tag:"path",attr:{d:"M6 5l-2 2l2 2"},child:[]},{tag:"path",attr:{d:"M10 9l2 -2l-2 -2"},child:[]}]})(props);
}
export default TbSourceCode;
