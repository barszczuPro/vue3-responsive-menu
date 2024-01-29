<template>
  <nav class="responsive-menu">
    <ul class="responsive-menu__items">
      <li :class="['responsive-menu__item', { 'responsive-menu__item-submenu': item.childs?.length }]" :data-rmenu-id="item.id" v-for="(item, key) in responsiveMenuMain" :key="key">
        {{ item.label }}
        <span></span>
        <ul v-if="item.childs">
          <li v-for="(item, key) in responsiveMenuChilds(item.id)" :key="key"> {{ item.label }}</li>
        </ul>
      </li>
      <li :class="['responsive-menu__more', { 'responsive-menu__more-disabled': !responsiveMenuMore.length }]">
        More
        <span></span>
        <ul>
          <li v-for="(item, key) in responsiveMenuMore" :key="key"> {{ item.label }}</li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import {computed, nextTick, ref} from "vue";
import {uid} from 'uid';
import type {MenuItem} from "@/ResponsiveMenuDefine";

const props = defineProps({
  items: {
    type: Array<MenuItem>,
    default: () => ([])
  },
})

const responsiveMenu = ref([])
const resizeMenuItems = ref([])
const responsiveMenuMap = computed(() => resizeMenuItems.value.map(item => ({ [item.id]: item })).reduce((x, y) => ({...x, ...y})))

const responsiveMenuMain = computed(() => resizeMenuItems.value.length ? resizeMenuItems.value.filter(item => !item.parent && !item.showMore) : responsiveMenu.value)
const responsiveMenuMore = computed(() => resizeMenuItems.value.filter(item => {
  if(item.wrapSubmenu) {
    return item.parent && responsiveMenuMap.value[item.parent]?.showMore
  }
  return item.showMore
}))

const responsiveMenuChilds = (id) => resizeMenuItems.value.filter(item => item.parent === id)




function prepareItems(menu, parentId = null, nextElement = false, wrapSubmenu = false) {
  const result = [];

  menu.forEach((item, index) => {
    const id = uid(6);
    const nextEL = index < menu.length - 1 ? prepareItems([menu[index + 1]], null, true)[0].id : null;

    const transformedItem = {
      ...item,
      id,
      ...(wrapSubmenu && { wrapSubmenu }),
      ...(nextEL && { nextEL }),
      ...(parentId && { parent: parentId }),
      ...(item.submenu && {
        childs: item.submenu.map(submenuItem => {
          const transformedSubmenuItem = prepareItems([submenuItem], id, false, item.wrapSubmenu)[0];
          result.push(transformedSubmenuItem);
          return transformedSubmenuItem.id;
        })
      })
    };

    if (transformedItem.childs && item.submenu) {
      delete transformedItem.submenu;
    }

    result.push(transformedItem);

    if (item.submenu && nextElement) {
      const transformedSubMenu = prepareItems(item.submenu, id);
      result.push(...transformedSubMenu);
    }
  });
  return result;
}
const getItemElementByData = (id: number) => document.querySelector(`[data-rmenu-id="${id}"]`)

const calculateMenu = () => {
  let submenuIds = responsiveMenu.value.filter(item => item.childs && item.id && (!item.wrap && !item.wrapSubmenu)).map(it => it.id)
  let breakpointHide = 0

  function deleteSubmenuArr(id) {
    const index = submenuIds.indexOf(id);
    if (index !== -1) {
      submenuIds.splice(index, 1);
    }
    return submenuIds;
  }

  return responsiveMenu.value.map((el, idx) => {
    if(!el.parent) {

      const offset = getItemElementByData(el.id)?.offsetWidth

      const addSubmenus = submenuIds.reduce((acc, current) => acc + getItemElementByData(current)?.offsetWidth, 0)

      breakpointHide = breakpointHide + offset

      const test = breakpointHide + addSubmenus

     if(el.childs) {
        submenuIds = deleteSubmenuArr(el.id)
      }

      return { ...el, ...{ offset, breakpointHide: test } }
    } else {
      return el
    }
  })
}

const resizeMenu = () => {
  const itemsOffsetWidth = document.getElementsByClassName("responsive-menu__items")[0]?.offsetWidth

  resizeMenuItems.value = responsiveMenu.value.map(item => {
    let showMore = false
    if(!item.childs?.length) {
      showMore = itemsOffsetWidth < (item.breakpointHide + document.getElementsByClassName("responsive-menu__more")?.[0].offsetWidth)
    }
    if(item.childs?.length && (item.wrap || item.wrapSubmenu)) {
      showMore = itemsOffsetWidth < (item.breakpointHide + document.getElementsByClassName("responsive-menu__more")?.[0].offsetWidth)
    }
    return ({ ...item, showMore: !item.parent && showMore })
  })
}

const initMenu = () => {
  responsiveMenu.value = prepareItems(props.items)
  nextTick(() => {
    responsiveMenu.value = calculateMenu()
    resizeMenu()
    window.addEventListener('resize', resizeMenu);
  })
}

initMenu()
</script>

<style lang="scss">
@import "./style.scss";
</style>