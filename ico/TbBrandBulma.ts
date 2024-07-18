import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandBulma icon from Tabler Icons
 * @module
 */
export function TbBrandBulma(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 16l1 -9l5 -5l6.5 6l-3.5 4l5 5l-8 5z"}}]})(props);
}
export default TbBrandBulma;
