import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkewX icon from Tabler Icons
 * @module
 */
export function TbSkewX(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 5.205v13.59a1 1 0 0 0 1.184 .983l14 -2.625a1 1 0 0 0 .816 -.983v-8.34a1 1 0 0 0 -.816 -.983l-14 -2.625a1 1 0 0 0 -1.184 .983z"}}]})(props);
}
export default TbSkewX;
