import { GenIcon, type IconBaseProps } from "../deps.ts";

export function TbLineDashed(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M5 12h2"}},{tag:"path",attr:{d:"M17 12h2"}},{tag:"path",attr:{d:"M11 12h2"}}]})(props);
}
export default TbLineDashed;
