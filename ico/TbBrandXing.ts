import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandXing icon from Tabler Icons
 * @module
 */
export function TbBrandXing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21l-4 -7l6.5 -11"}},{tag:"path",attr:{d:"M7 7l2 3.5l-3 4.5"},child:[]}]})(props);
}
export default TbBrandXing;
