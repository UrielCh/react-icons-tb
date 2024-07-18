import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandBackbone icon from Tabler Icons
 * @module
 */
export function TbBrandBackbone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 20l14 -8l-14 -8z"}},{tag:"path",attr:{d:"M19 20l-14 -8l14 -8z"},child:[]}]})(props);
}
export default TbBrandBackbone;
