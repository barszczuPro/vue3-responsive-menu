export interface Config {
  labelMore: string
  mode: string
}
export interface MenuItem {
  title: string
  path?: any
  href?: string
  wrap?: boolean
  submenuWrap?: boolean
  icon?: string
}

export interface MenuItemMap extends MenuItem {
  offsetWidth: number
  nextEl: MenuItemMap
}
