import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BounceRight icon from Tabler Icons
 * @module
 */
export function TbBounceRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 15.5c3 -1 5.5 -.5 8 4.5c.5 -3 1.5 -5.5 3 -8"}},{tag:"path",attr:{d:"M18 9a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z"},child:[]}]})(props);
}
export default TbBounceRight;
