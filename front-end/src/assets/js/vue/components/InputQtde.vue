<template lang="pug">

    .input-group.qtde-toggler
        .input-group-append
            button.btn__quantidade.menos(@click="minus" type="button") -
        input.input__qtd(
            :type="type"
            :name="name"
            :id="id"
            :value="currentValue"
        )
        .input-group-append
            button(@click="plus" type="button").btn__quantidade.mais +
</template>

<script>
export default {
    data() {
        return {
            currentValue : this.value
        }
    },
    props: [
    	'type',
		'name',
		'id',
		'value',
		'cartMethod',
		'cart'
	],
    methods: {
        minus() {
            if(this.currentValue > 1) {
                this.currentValue--
				this.callback()
            }
        },
        plus() {
            this.currentValue++
			this.callback()
        },
		callback() {
        	window.cart.update(this.cart, this.currentValue)
		}
    }
}
</script>
