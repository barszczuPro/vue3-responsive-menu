export interface Config {
  labelMore: string
  mode: string
}
export interface MenuItem {
  label: string
  onClick?: () => Function
  wrap?: boolean
  submenuWrap?: boolean
  icon?: string
}

export interface ResponsiveMenuItem {
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
