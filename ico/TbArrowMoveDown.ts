import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowMoveDown icon from Tabler Icons
 * @module
 */
export function TbArrowMoveDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 11v10"}},{tag:"path",attr:{d:"M9 18l3 3l3 -3"},child:[]},{tag:"path",attr:{d:"M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]}]})(props);
}
export default TbArrowMoveDown;
