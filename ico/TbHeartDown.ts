import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HeartDown icon from Tabler Icons
 * @module
 */
export function TbHeartDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.907 6.12"}},{tag:"path",attr:{d:"M19 16v6"},child:[]},{tag:"path",attr:{d:"M22 19l-3 3l-3 -3"},child:[]}]})(props);
}
export default TbHeartDown;
