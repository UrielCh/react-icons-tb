import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandFlutter icon from Tabler Icons
 * @module
 */
export function TbBrandFlutter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M7 14l-3 -3l8 -8h6z"}},{tag:"path",attr:{d:"M14 21l-5 -5l5 -5h5l-5 5l5 5z"},child:[]}]})(props);
}
export default TbBrandFlutter;
