import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CornerLeftDown icon from Tabler Icons
 * @module
 */
export function TbCornerLeftDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6h-6a3 3 0 0 0 -3 3v10l-4 -4m8 0l-4 4"}}]})(props);
}
export default TbCornerLeftDown;
