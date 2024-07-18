import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LetterF icon from Tabler Icons
 * @module
 */
export function TbLetterF(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 4h-10v16"}},{tag:"path",attr:{d:"M7 12l8 0"},child:[]}]})(props);
}
export default TbLetterF;
