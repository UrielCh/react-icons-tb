import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Number10Small icon from Tabler Icons
 * @module
 */
export function TbNumber10Small(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 8h1v8"}},{tag:"path",attr:{d:"M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0"},child:[]}]})(props);
}
export default TbNumber10Small;
