<template>
  <div v-if="item.iconLeft" class="vrm__icon vrm__icon-left" v-html="vrmIcon(item.iconLeft)" />
  {{ item.label }}
  <div v-if="item.iconRight" class="vrm__icon vrm__icon-right" v-html="vrmIcon(item.iconRight)" />
</template>

<script lang="ts" setup>
import type {MenuItem} from './ResponsiveMenuDefine'
import { useUtils } from "./ResponsiveMenuIcon";
import type {PropType} from "vue";

const { vrmIcon } = useUtils()

const props = defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    default: () => ({})
  },
})
</script>
