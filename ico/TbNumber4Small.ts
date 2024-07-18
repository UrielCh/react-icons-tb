import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Number4Small icon from Tabler Icons
 * @module
 */
export function TbNumber4Small(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 8v3a1 1 0 0 0 1 1h3"}},{tag:"path",attr:{d:"M14 8v8"},child:[]}]})(props);
}
export default TbNumber4Small;
