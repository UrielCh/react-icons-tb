import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CircleChevronDown icon from Tabler Icons
 * @module
 */
export function TbCircleChevronDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 11l-3 3l-3 -3"}},{tag:"path",attr:{d:"M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z"},child:[]}]})(props);
}
export default TbCircleChevronDown;
