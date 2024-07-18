import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBearLeft icon from Tabler Icons
 * @module
 */
export function TbArrowBearLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 3h-5v5"}},{tag:"path",attr:{d:"M8 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93"},child:[]}]})(props);
}
export default TbArrowBearLeft;
