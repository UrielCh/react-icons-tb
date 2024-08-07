import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrandAzure icon from Tabler Icons
 * @module
 */
export function TbBrandAzure(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 7.5l-4 9.5h4l6 -15z"}},{tag:"path",attr:{d:"M22 20l-7 -15l-3 7l4 5l-8 3z"},child:[]}]})(props);
}
export default TbBrandAzure;
