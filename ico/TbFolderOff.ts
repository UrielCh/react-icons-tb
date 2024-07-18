import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FolderOff icon from Tabler Icons
 * @module
 */
export function TbFolderOff(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 4h1l3 3h7a2 2 0 0 1 2 2v8m-2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 1.189 -1.829"}},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(props);
}
export default TbFolderOff;
