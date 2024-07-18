import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLoopRight icon from Tabler Icons
 * @module
 */
export function TbArrowLoopRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 21v-13a4 4 0 1 0 -4 4h13"}},{tag:"path",attr:{d:"M17 16l4 -4l-4 -4"},child:[]}]})(props);
}
export default TbArrowLoopRight;
