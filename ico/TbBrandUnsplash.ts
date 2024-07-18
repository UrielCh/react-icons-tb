import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandUnsplash icon from Tabler Icons
 * @module
 */
export function TbBrandUnsplash(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 11h5v4h6v-4h5v9h-16zm5 -7h6v4h-6z"}}]})(props);
}
export default TbBrandUnsplash;
