import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Gizmo icon from Tabler Icons
 * @module
 */
export function TbGizmo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 19l-8 -5.5l-8 5.5"}},{tag:"path",attr:{d:"M12 4v9.5"},child:[]},{tag:"path",attr:{d:"M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M4 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]},{tag:"path",attr:{d:"M20 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"},child:[]}]})(props);
}
export default TbGizmo;
