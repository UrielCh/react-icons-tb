import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DeviceUsb icon from Tabler Icons
 * @module
 */
export function TbDeviceUsb(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 8h8v9a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-9z"}},{tag:"path",attr:{d:"M10 8v-4h4v4"},child:[]}]})(props);
}
export default TbDeviceUsb;
