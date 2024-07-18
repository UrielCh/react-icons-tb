import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CarFan icon from Tabler Icons
 * @module
 */
export function TbCarFan(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12v-9l4.912 1.914a1.7 1.7 0 0 1 .428 2.925z"}},{tag:"path",attr:{d:"M12 12h9l-1.914 4.912a1.7 1.7 0 0 1 -2.925 .428z"},child:[]},{tag:"path",attr:{d:"M12 12h-9l1.914 -4.912a1.7 1.7 0 0 1 2.925 -.428z"},child:[]},{tag:"path",attr:{d:"M12 12v9l-4.912 -1.914a1.7 1.7 0 0 1 -.428 -2.925z"},child:[]}]})(props);
}
export default TbCarFan;
