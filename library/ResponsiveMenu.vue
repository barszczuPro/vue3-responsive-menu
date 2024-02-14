<template>
  <nav
    ref="itemsRefs"
    :class="['v-responsive-menu', { [`vrm__menu-${config.mode}`]: config.mode }, 'vrm__menu']"
  >
    <ul class="vrm__menu-items">
      <li
        :class="['vrm__menu-item', { vrm__submenu: item.childs?.length }]"
        :data-rmenu-id="item.id"
        v-for="(item, key) in responsiveMenuMain"
        :key="key"
        ref="itemRefs"
        @click="item.onClick"
      >
        <responsive-menu-item :item="item" />
        <span v-if="!item.iconRight"></span>
        <ul v-if="item.childs" class="vrm__submenu-items">
          <li
            v-for="(item, key) in responsiveMenuChilds(item.id)"
            class="vrm__submenu-item"
            :key="key"
            @click.stop="item.onClick"
          >
            <responsive-menu-item :item="item" />
          </li>
        </ul>
      </li>
      <li
        :class="['vrm__more', { 'vrm__more-disabled': !responsiveMenuMore.length }]"
        ref="itemMoreRef"
      >
        {{ config.labelMore }}
        <div
          v-if="config.iconMore"
          class="vrm__icon vrm__icon-right"
          v-html="vrmIcon(config.iconMore)"
        />
        <span v-else></span>
        <ul class="vrm__submenu-items">
          <li
            v-for="(item, key) in responsiveMenuMore"
            class="vrm__submenu-item"
            :key="key"
            @click.stop="item.onClick"
          >
            <responsive-menu-item :item="item" />
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref } from 'vue'
import type { PropType } from 'vue'
import { uid } from 'uid'
import type { MenuItem, Config } from './ResponsiveMenuDefine'
import { useUtils } from './ResponsiveMenuIcon'
import ResponsiveMenuItem from './ResponsiveMenuItem.vue'

const { vrmIcon } = useUtils()

const props = defineProps({
  items: {
    type: Array<MenuItem>,
    default: () => []
  },
  config: {
    type: Object as PropType<Config>,
    default: () => ({
      iconMore: '',
      labelMore: 'More',
      mode: ''
    })
  }
})

const itemRefs = ref<HTMLElement[]>([])
const itemsRefs = ref<HTMLElement | null>(null)
const itemMoreRef = ref<HTMLElement | null>(null)

const responsiveMenu = ref([])
const resizeMenuItems = ref([])
const responsiveMenuMap = computed(() =>
  resizeMenuItems.value.map((item) => ({ [item.id]: item })).reduce((x, y) => ({ ...x, ...y }))
)

const responsiveMenuMain = computed(() =>
  resizeMenuItems.value.length
    ? resizeMenuItems.value.filter((item) => !item.parent && !item.showMore)
    : responsiveMenu.value
)
const responsiveMenuMore = computed(() =>
  resizeMenuItems.value.filter((item) => {
    if (item.wrapSubmenu) {
      return item.parent && responsiveMenuMap.value[item.parent]?.showMore
    }
    return item.showMore
  })
)

const responsiveMenuChilds = (id) => resizeMenuItems.value.filter((item) => item.parent === id)

function prepareItems(menu, parentId = null, nextElement = false, wrapSubmenu = false) {
  const result = []
  menu.forEach((item, index) => {
    const id = uid(6)
    const nextEL =
      index < menu.length - 1 ? prepareItems([menu[index + 1]], null, true)[0].id : null
    const transformedItem = {
      ...item,
      id,
      ...(wrapSubmenu && { wrapSubmenu }),
      ...(nextEL && { nextEL }),
      ...(parentId && { parent: parentId }),
      ...(item.submenu && {
        childs: item.submenu.map((submenuItem) => {
          const transformedSubmenuItem = prepareItems([submenuItem], id, false, item.wrapSubmenu)[0]
          result.push(transformedSubmenuItem)
          return transformedSubmenuItem.id
        })
      })
    }
    if (transformedItem.childs && item.submenu) {
      delete transformedItem.submenu
    }
    result.push(transformedItem)
    if (item.submenu && nextElement) {
      const transformedSubMenu = prepareItems(item.submenu, id)
      result.push(...transformedSubMenu)
    }
  })
  return result
}

const getItemElementByDataRef = (id: number) =>
  itemRefs.value.find((item) => item.dataset.rmenuId === id)

const calculateMenu = () => {
  let submenuIds = responsiveMenu.value
    .filter((item) => item.childs && item.id && !item.wrap && !item.wrapSubmenu)
    .map((it) => it.id)
  let breakpointHide = 0

  function deleteSubmenuArr(id) {
    const index = submenuIds.indexOf(id)
    if (index !== -1) {
      submenuIds.splice(index, 1)
    }
    return submenuIds
  }

  return responsiveMenu.value.map((el) => {
    if (!el.parent) {
      const offset = getItemElementByDataRef(el.id)?.offsetWidth
      const addSubmenus = submenuIds.reduce(
        (acc, current) => acc + getItemElementByDataRef(current)?.offsetWidth,
        0
      )
      breakpointHide = breakpointHide + offset
      const breakpointHideAndSubmenus = breakpointHide + addSubmenus
      if (el.childs) {
        submenuIds = deleteSubmenuArr(el.id)
      }
      return { ...el, ...{ offset, breakpointHide: breakpointHideAndSubmenus } }
    } else {
      return el
    }
  })
}

const resizeMenu = () => {
  const itemsOffsetWidth = itemsRefs.value?.offsetWidth
  resizeMenuItems.value = responsiveMenu.value.map((item) => {
    let showMore = false
    if (!item.childs?.length) {
      showMore = itemsOffsetWidth < item.breakpointHide + itemMoreRef.value?.offsetWidth
    }
    if (item.childs?.length && (item.wrap || item.wrapSubmenu)) {
      showMore = itemsOffsetWidth < item.breakpointHide + itemMoreRef.value?.offsetWidth
    }
    return { ...item, showMore: !item.parent && showMore }
  })
}

const initMenu = () => {
  responsiveMenu.value = prepareItems(props.items)
  nextTick(() => {
    responsiveMenu.value = calculateMenu()
    resizeMenu()
    window.addEventListener('resize', resizeMenu)
  })
}

initMenu()
</script>

<style lang="scss">
@import './style.scss';
</style>
