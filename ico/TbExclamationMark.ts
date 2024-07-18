import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ExclamationMark icon from Tabler Icons
 * @module
 */
export function TbExclamationMark(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 19v.01"}},{tag:"path",attr:{d:"M12 15v-10"},child:[]}]})(props);
}
export default TbExclamationMark;
