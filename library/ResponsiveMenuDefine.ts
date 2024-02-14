import type { FeatherIconNames, FeatherAttributes } from "feather-icons";
export interface VrmIcon {
  name: FeatherIconNames
  options?: Partial<FeatherAttributes>
}
export interface Config {
  iconMore?: VrmIcon
  labelMore: string
  mode: string
}
export interface MenuItem {
  label: string
  onClick?: () => Function
  wrap?: boolean
  submenuWrap?: boolean
  iconLeft?: VrmIcon
  iconRight?: VrmIcon
}

export interface VrmMenuItem {
  id: string
  label: string
  nextEl: string
  offset: number
  breakpointHide: number
}

export interface MenuItemMap extends MenuItem {
  offsetWidth: number
  nextEl: MenuItemMap
}
