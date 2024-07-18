import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CategoryMinus icon from Tabler Icons
 * @module
 */
export function TbCategoryMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6"}}]})(props);
}
export default TbCategoryMinus;
