import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HeartPause icon from Tabler Icons
 * @module
 */
export function TbHeartPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19.5 12.572l-.784 .777m-5.725 5.67l-.991 .981l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"}},{tag:"path",attr:{d:"M17 17v5"},child:[]},{tag:"path",attr:{d:"M21 17v5"},child:[]}]})(props);
}
export default TbHeartPause;
