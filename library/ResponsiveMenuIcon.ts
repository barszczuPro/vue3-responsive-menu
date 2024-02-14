import * as feather from 'feather-icons';
import type { VrmIcon } from "./ResponsiveMenuDefine";

export const useUtils = () => {
  const vrmIcon = ({ name, options }: VrmIcon) => {
    return feather.icons[name].toSvg(options)
  }
  return { vrmIcon }
}