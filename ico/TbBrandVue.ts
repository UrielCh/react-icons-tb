import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandVue icon from Tabler Icons
 * @module
 */
export function TbBrandVue(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16.5 4l-4.5 8l-4.5 -8"}},{tag:"path",attr:{d:"M3 4l9 16l9 -16"},child:[]}]})(props);
}
export default TbBrandVue;
