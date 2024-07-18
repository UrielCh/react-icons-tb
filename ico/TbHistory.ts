import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * History icon from Tabler Icons
 * @module
 */
export function TbHistory(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 8l0 4l2 2"}},{tag:"path",attr:{d:"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"},child:[]}]})(props);
}
export default TbHistory;
