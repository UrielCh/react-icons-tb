import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tilde icon from Tabler Icons
 * @module
 */
export function TbTilde(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12c0 -1.657 1.592 -3 3.556 -3c1.963 0 3.11 1.5 4.444 3c1.333 1.5 2.48 3 4.444 3s3.556 -1.343 3.556 -3"}}]})(props);
}
export default TbTilde;
