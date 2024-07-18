import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Flare icon from Tabler Icons
 * @module
 */
export function TbFlare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3l3 6l6 3l-6 3l-3 6l-3 -6l-6 -3l6 -3z"}}]})(props);
}
export default TbFlare;
