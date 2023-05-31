import { GenIcon, type IconBaseProps } from "../deps.ts";

export function TbSeparator(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M3 12l0 .01"}},{tag:"path",attr:{d:"M7 12l10 0"}},{tag:"path",attr:{d:"M21 12l0 .01"}}]})(props);
}
export default TbSeparator;
