import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterB icon from Tabler Icons
 * @module
 */
export function TbLetterB(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6"}},{tag:"path",attr:{d:"M7 12l6 0"},child:[]}]})(props);
}
export default TbLetterB;
