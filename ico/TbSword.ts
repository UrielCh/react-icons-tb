import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sword icon from Tabler Icons
 * @module
 */
export function TbSword(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z"}},{tag:"path",attr:{d:"M6.5 11.5l6 6"},child:[]}]})(props);
}
export default TbSword;
