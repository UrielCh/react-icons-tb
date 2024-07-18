import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Menorah icon from Tabler Icons
 * @module
 */
export function TbMenorah(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 4v16"}},{tag:"path",attr:{d:"M8 4v2a4 4 0 1 0 8 0v-2"},child:[]},{tag:"path",attr:{d:"M4 4v2a8 8 0 1 0 16 0v-2"},child:[]},{tag:"path",attr:{d:"M10 20h4"},child:[]}]})(props);
}
export default TbMenorah;
