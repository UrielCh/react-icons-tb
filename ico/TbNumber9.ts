import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Number9 icon from Tabler Icons
 * @module
 */
export function TbNumber9(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a4 4 0 1 0 -8 0v1a4 4 0 1 0 8 0"}},{tag:"path",attr:{d:"M8 16a4 4 0 1 0 8 0v-8"},child:[]}]})(props);
}
export default TbNumber9;
