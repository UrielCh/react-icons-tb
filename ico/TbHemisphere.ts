import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hemisphere icon from Tabler Icons
 * @module
 */
export function TbHemisphere(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 9m-9 0a9 3 0 1 0 18 0a9 3 0 1 0 -18 0"}},{tag:"path",attr:{d:"M3 9a9 9 0 0 0 18 0"},child:[]}]})(props);
}
export default TbHemisphere;
