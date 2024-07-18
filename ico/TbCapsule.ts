import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Capsule icon from Tabler Icons
 * @module
 */
export function TbCapsule(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 3m0 6a6 6 0 0 1 6 -6h0a6 6 0 0 1 6 6v6a6 6 0 0 1 -6 6h0a6 6 0 0 1 -6 -6z"}}]})(props);
}
export default TbCapsule;
