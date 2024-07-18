import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BaselineDensityLarge icon from Tabler Icons
 * @module
 */
export function TbBaselineDensityLarge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16"}},{tag:"path",attr:{d:"M4 20h16"},child:[]}]})(props);
}
export default TbBaselineDensityLarge;
