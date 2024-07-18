import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cone icon from Tabler Icons
 * @module
 */
export function TbCone(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 17.998v-.5l-8.13 -14.99a1 1 0 0 0 -1.74 0l-8.13 14.989v.5c0 1.659 4.03 3.003 9 3.003s9 -1.344 9 -3.002"}}]})(props);
}
export default TbCone;
