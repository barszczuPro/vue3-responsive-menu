import * as feather from 'feather-icons';
export interface VrmIconPayload {
  name: string
  options: any
}

export const useUtils = () => {
  const vrmIcon = ({ name, options }: VrmIconPayload) => {
    return feather.icons[name].toSvg(options)
  }
  return { vrmIcon }
}