import './styles/vars.css'
import './styles/base.css'
import './styles/utils.css'

import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFund.vue'

const theme: Theme = {
  Layout,
  NotFound,
}

export default theme
