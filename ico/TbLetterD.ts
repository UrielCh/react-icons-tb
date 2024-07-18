import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterD icon from Tabler Icons
 * @module
 */
export function TbLetterD(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1 -5 5h-6v-16"}}]})(props);
}
export default TbLetterD;
