import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import Menu from '../library/ResponsiveMenuInstance'

createApp(App).use(Menu).mount('#app')
