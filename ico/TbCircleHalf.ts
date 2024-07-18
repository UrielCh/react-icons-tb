import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleHalf icon from Tabler Icons
 * @module
 */
export function TbCircleHalf(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}},{tag:"path",attr:{d:"M12 3v18"},child:[]}]})(props);
}
export default TbCircleHalf;
