import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBarUp icon from Tabler Icons
 * @module
 */
export function TbArrowBarUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 4l0 10"}},{tag:"path",attr:{d:"M12 4l4 4"},child:[]},{tag:"path",attr:{d:"M12 4l-4 4"},child:[]},{tag:"path",attr:{d:"M4 20l16 0"},child:[]}]})(props);
}
export default TbArrowBarUp;
