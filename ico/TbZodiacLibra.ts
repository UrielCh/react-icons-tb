import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ZodiacLibra icon from Tabler Icons
 * @module
 */
export function TbZodiacLibra(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 20l14 0"}},{tag:"path",attr:{d:"M5 17h5v-.3a7 7 0 1 1 4 0v.3h5"},child:[]}]})(props);
}
export default TbZodiacLibra;
