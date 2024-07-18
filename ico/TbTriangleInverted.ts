import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TriangleInverted icon from Tabler Icons
 * @module
 */
export function TbTriangleInverted(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.363 20.405l-8.106 -13.534a1.914 1.914 0 0 1 1.636 -2.871h16.214a1.914 1.914 0 0 1 1.636 2.871l-8.106 13.534a1.914 1.914 0 0 1 -3.274 0z"}}]})(props);
}
export default TbTriangleInverted;
