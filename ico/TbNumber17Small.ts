import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Number17Small icon from Tabler Icons
 * @module
 */
export function TbNumber17Small(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 8h1v8"}},{tag:"path",attr:{d:"M13 8h4l-2 8"},child:[]}]})(props);
}
export default TbNumber17Small;
