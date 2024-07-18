import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OvalVertical icon from Tabler Icons
 * @module
 */
export function TbOvalVertical(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12c0 -3.314 4.03 -6 9 -6s9 2.686 9 6s-4.03 6 -9 6s-9 -2.686 -9 -6z"}}]})(props);
}
export default TbOvalVertical;
