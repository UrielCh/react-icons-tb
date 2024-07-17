import { GenIcon, type IconBaseProps } from "../deps.ts";

export function TbBadge(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 17v-13l-5 3l-5 -3v13l5 3z"}}]})(props);
}
export default TbBadge;
