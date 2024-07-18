import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lambda icon from Tabler Icons
 * @module
 */
export function TbLambda(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 20l6.5 -9"}},{tag:"path",attr:{d:"M19 20c-6 0 -6 -16 -12 -16"},child:[]}]})(props);
}
export default TbLambda;
