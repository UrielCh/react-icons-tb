import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Directions icon from Tabler Icons
 * @module
 */
export function TbDirections(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 21v-4"}},{tag:"path",attr:{d:"M12 13v-4"},child:[]},{tag:"path",attr:{d:"M12 5v-2"},child:[]},{tag:"path",attr:{d:"M10 21h4"},child:[]},{tag:"path",attr:{d:"M8 5v4h11l2 -2l-2 -2z"},child:[]},{tag:"path",attr:{d:"M14 13v4h-8l-2 -2l2 -2z"},child:[]}]})(props);
}
export default TbDirections;
