import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HeartMinus icon from Tabler Icons
 * @module
 */
export function TbHeartMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.5 12.572l-2.494 2.47m-5.006 4.958l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"}},{tag:"path",attr:{d:"M16 19h6"},child:[]}]})(props);
}
export default TbHeartMinus;
