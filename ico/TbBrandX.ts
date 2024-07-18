import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandX icon from Tabler Icons
 * @module
 */
export function TbBrandX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4l11.733 16h4.267l-11.733 -16z"}},{tag:"path",attr:{d:"M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"},child:[]}]})(props);
}
export default TbBrandX;
