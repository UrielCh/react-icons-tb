import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShieldCode icon from Tabler Icons
 * @module
 */
export function TbShieldCode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.078 7.024"}},{tag:"path",attr:{d:"M20 21l2 -2l-2 -2"},child:[]},{tag:"path",attr:{d:"M17 17l-2 2l2 2"},child:[]}]})(props);
}
export default TbShieldCode;
