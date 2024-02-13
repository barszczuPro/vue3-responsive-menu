import * as feather from 'feather-icons';
import {computed} from "vue";
export const useUtils = () => {
  const vrmIcon = ({ name, options }) => {
    console.log(name, 'payload')
    return feather.icons[name].toSvg(options)
  }

  return { vrmIcon }
}