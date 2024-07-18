import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LineDashed icon from Tabler Icons
 * @module
 */
export function TbLineDashed(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h2"}},{tag:"path",attr:{d:"M17 12h2"},child:[]},{tag:"path",attr:{d:"M11 12h2"},child:[]}]})(props);
}
export default TbLineDashed;
