import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Oval icon from Tabler Icons
 * @module
 */
export function TbOval(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-6 0a6 9 0 1 0 12 0a6 9 0 1 0 -12 0"}}]})(props);
}
export default TbOval;
