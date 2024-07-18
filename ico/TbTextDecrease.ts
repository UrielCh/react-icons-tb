import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TextDecrease icon from Tabler Icons
 * @module
 */
export function TbTextDecrease(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5"}},{tag:"path",attr:{d:"M4 13h7"},child:[]},{tag:"path",attr:{d:"M21 12h-6"},child:[]}]})(props);
}
export default TbTextDecrease;
