import Vue from 'vue'

import './forms'

import BsCarousel  from './BsCarousel.vue'
import OwlCarousel from './OwlCarousel.vue'
import MsgCookies  from './MsgCookies.vue'
import BtnWhatsapp from './BtnWhatsapp.vue'
import VZoomDesktop from './VZoomDesktop.vue'
import VZoomAlt from './VZoomMobile.vue'
import InputQtde from './InputQtde.vue'
import SpriteSvg   from './SpritesSvg.vue'

// COMPONENTES====================================

Vue.component('msg-cookies', MsgCookies)
Vue.component('owl-carousel', OwlCarousel)
Vue.component('btn-whatsapp', BtnWhatsapp)
Vue.component('v-zoom-desktop', VZoomDesktop)
Vue.component('v-zoom-mobile', VZoomAlt)
Vue.component('input-qtde', InputQtde)
Vue.component('bs-carousel', BsCarousel)
Vue.component('sprite-svg', SpriteSvg)
