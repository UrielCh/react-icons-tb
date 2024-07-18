import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Melon icon from Tabler Icons
 * @module
 */
export function TbMelon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 10c0 5.523 -4.477 10 -10 10a9.967 9.967 0 0 1 -6.984 -2.842l4.343 -4.153a4 4 0 0 0 5.76 -5.51l4.342 -4.153a9.963 9.963 0 0 1 2.539 6.658z"}}]})(props);
}
export default TbMelon;
