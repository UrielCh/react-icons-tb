import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandOffice icon from Tabler Icons
 * @module
 */
export function TbBrandOffice(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 18h9v-12l-5 2v5l-4 2v-8l9 -4l7 2v13l-7 3z"}}]})(props);
}
export default TbBrandOffice;
