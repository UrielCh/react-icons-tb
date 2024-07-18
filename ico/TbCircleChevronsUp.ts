import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleChevronsUp icon from Tabler Icons
 * @module
 */
export function TbCircleChevronsUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 15l3 -3l3 3"}},{tag:"path",attr:{d:"M9 11l3 -3l3 3"},child:[]},{tag:"path",attr:{d:"M12 21a9 9 0 1 0 -.265 0l.265 0z"},child:[]}]})(props);
}
export default TbCircleChevronsUp;
