import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBarDown icon from Tabler Icons
 * @module
 */
export function TbArrowBarDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20l0 -10"}},{tag:"path",attr:{d:"M12 20l4 -4"},child:[]},{tag:"path",attr:{d:"M12 20l-4 -4"},child:[]},{tag:"path",attr:{d:"M4 4l16 0"},child:[]}]})(props);
}
export default TbArrowBarDown;
