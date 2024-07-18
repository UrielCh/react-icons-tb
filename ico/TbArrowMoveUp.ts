import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowMoveUp icon from Tabler Icons
 * @module
 */
export function TbArrowMoveUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 13v-10"}},{tag:"path",attr:{d:"M9 6l3 -3l3 3"},child:[]},{tag:"path",attr:{d:"M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z"},child:[]}]})(props);
}
export default TbArrowMoveUp;
