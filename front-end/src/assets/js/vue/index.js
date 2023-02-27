import Vue from 'vue'

import './components/index.js'
import './layout/index.js'

Vue.config.productionTip = false
Vue.config.performance   = process.env.NODE_ENV !== "production";

new Vue({
	el: '#app',
	methods: {
		formAjax(event) {
			if(window.formAjax) {
				window.formAjax(event.target)
			}
		}
	}
})
