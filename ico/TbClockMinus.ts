import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClockMinus icon from Tabler Icons
 * @module
 */
export function TbClockMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.477 15.022a9 9 0 1 0 -7.998 5.965"}},{tag:"path",attr:{d:"M12 7v5l3 3"},child:[]},{tag:"path",attr:{d:"M16 19h6"},child:[]}]})(props);
}
export default TbClockMinus;
