import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Number11 icon from Tabler Icons
 * @module
 */
export function TbNumber11(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 20v-16l-5 5"}},{tag:"path",attr:{d:"M18 20v-16l-5 5"},child:[]}]})(props);
}
export default TbNumber11;
