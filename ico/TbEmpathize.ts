import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Empathize icon from Tabler Icons
 * @module
 */
export function TbEmpathize(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 5.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"}},{tag:"path",attr:{d:"M12 21.368l5.095 -5.096a3.088 3.088 0 1 0 -4.367 -4.367l-.728 .727l-.728 -.727a3.088 3.088 0 1 0 -4.367 4.367l5.095 5.096z"},child:[]}]})(props);
}
export default TbEmpathize;
