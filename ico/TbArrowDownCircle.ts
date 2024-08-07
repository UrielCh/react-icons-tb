import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownCircle icon from Tabler Icons
 * @module
 */
export function TbArrowDownCircle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 7v14"}},{tag:"path",attr:{d:"M9 18l3 3l3 -3"},child:[]},{tag:"path",attr:{d:"M12 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4"},child:[]}]})(props);
}
export default TbArrowDownCircle;
