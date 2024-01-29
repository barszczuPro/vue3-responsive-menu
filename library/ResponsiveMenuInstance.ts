import type { App } from "vue";
import ResponsiveMenu from "./ResponsiveMenu.vue";

export default {
  install(app: App<Element>): void {
    app.component('ResponsiveMenu', ResponsiveMenu)
  }
}