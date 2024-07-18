import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FishHook icon from Tabler Icons
 * @module
 */
export function TbFishHook(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 9v6a5 5 0 0 1 -10 0v-4l3 3"}},{tag:"path",attr:{d:"M16 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"},child:[]},{tag:"path",attr:{d:"M16 5v-2"},child:[]}]})(props);
}
export default TbFishHook;
