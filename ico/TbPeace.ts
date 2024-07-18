import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Peace icon from Tabler Icons
 * @module
 */
export function TbPeace(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}},{tag:"path",attr:{d:"M12 3l0 18"},child:[]},{tag:"path",attr:{d:"M12 12l6.3 6.3"},child:[]},{tag:"path",attr:{d:"M12 12l-6.3 6.3"},child:[]}]})(props);
}
export default TbPeace;
