import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterCaseToggle icon from Tabler Icons
 * @module
 */
export function TbLetterCaseToggle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6.5 15.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"}},{tag:"path",attr:{d:"M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5"},child:[]},{tag:"path",attr:{d:"M14 13h7"},child:[]},{tag:"path",attr:{d:"M10 12v7"},child:[]}]})(props);
}
export default TbLetterCaseToggle;
