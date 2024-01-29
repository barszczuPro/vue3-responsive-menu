import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import Menu from '../library/MenuInstance'

createApp(App)
  .use(Menu)
  .mount('#app')
