import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBarToUp icon from Tabler Icons
 * @module
 */
export function TbArrowBarToUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 10l0 10"}},{tag:"path",attr:{d:"M12 10l4 4"},child:[]},{tag:"path",attr:{d:"M12 10l-4 4"},child:[]},{tag:"path",attr:{d:"M4 4l16 0"},child:[]}]})(props);
}
export default TbArrowBarToUp;
