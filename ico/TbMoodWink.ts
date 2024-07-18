import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoodWink icon from Tabler Icons
 * @module
 */
export function TbMoodWink(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}},{tag:"path",attr:{d:"M15 10h.01"},child:[]},{tag:"path",attr:{d:"M9.5 15a3.5 3.5 0 0 0 5 0"},child:[]},{tag:"path",attr:{d:"M8.5 8.5l1.5 1.5l-1.5 1.5"},child:[]}]})(props);
}
export default TbMoodWink;
