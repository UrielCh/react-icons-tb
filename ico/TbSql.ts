import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sql icon from Tabler Icons
 * @module
 */
export function TbSql(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"}},{tag:"path",attr:{d:"M17 8v8h4"},child:[]},{tag:"path",attr:{d:"M13 15l1 1"},child:[]},{tag:"path",attr:{d:"M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1"},child:[]}]})(props);
}
export default TbSql;
