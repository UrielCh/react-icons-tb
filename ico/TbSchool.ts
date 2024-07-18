import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * School icon from Tabler Icons
 * @module
 */
export function TbSchool(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 9l-10 -4l-10 4l10 4l10 -4v6"}},{tag:"path",attr:{d:"M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"},child:[]}]})(props);
}
export default TbSchool;
