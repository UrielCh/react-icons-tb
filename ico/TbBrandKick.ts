import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandKick icon from Tabler Icons
 * @module
 */
export function TbBrandKick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h5v4h3v-2h2v-2h6v4h-2v2h-2v4h2v2h2v4h-6v-2h-2v-2h-3v4h-5z"}}]})(props);
}
export default TbBrandKick;
