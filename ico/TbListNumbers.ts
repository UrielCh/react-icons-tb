import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ListNumbers icon from Tabler Icons
 * @module
 */
export function TbListNumbers(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 6h9"}},{tag:"path",attr:{d:"M11 12h9"},child:[]},{tag:"path",attr:{d:"M12 18h8"},child:[]},{tag:"path",attr:{d:"M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"},child:[]},{tag:"path",attr:{d:"M6 10v-6l-2 2"},child:[]}]})(props);
}
export default TbListNumbers;
