import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowNarrowDown icon from Tabler Icons
 * @module
 */
export function TbArrowNarrowDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5l0 14"}},{tag:"path",attr:{d:"M16 15l-4 4"},child:[]},{tag:"path",attr:{d:"M8 15l4 4"},child:[]}]})(props);
}
export default TbArrowNarrowDown;
