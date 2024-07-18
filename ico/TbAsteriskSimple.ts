import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AsteriskSimple icon from Tabler Icons
 * @module
 */
export function TbAsteriskSimple(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 12v-9"}},{tag:"path",attr:{d:"M12 12l-9 -2.5"},child:[]},{tag:"path",attr:{d:"M12 12l9 -2.5"},child:[]},{tag:"path",attr:{d:"M12 12l6 8.5"},child:[]},{tag:"path",attr:{d:"M12 12l-6 8.5"},child:[]}]})(props);
}
export default TbAsteriskSimple;
