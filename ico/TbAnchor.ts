import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Anchor icon from Tabler Icons
 * @module
 */
export function TbAnchor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2"}},{tag:"path",attr:{d:"M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"},child:[]}]})(props);
}
export default TbAnchor;
