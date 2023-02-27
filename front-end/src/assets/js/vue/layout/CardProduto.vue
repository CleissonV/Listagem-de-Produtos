<template lang="pug">
	li.produto__card(:class="{'consulta__card': consulta}")
		.produto__card__link__grande
			.produto__card__imagem
				img(:src="imagem" :alt="titulo+' imagem'" :aria-label="titulo+' imagem'" width="255" height="320" loading="lazy")
				slot
				.produto__card__tags
					.produto__card__tag.promocao__tag(v-if="promocao") {{promocao__porcentagem}}
					.produto__card__tag.novidade__tag(v-if="novidade") NO#[br]VO
		.produto__linK__conteudo
			.produto__card__titulo
				.line__clamp {{titulo}}
			.produto__card__descricao
				.line__clamp {{descricao}}
			.produto__card__valor(:class="{'space-between': promocao}")
				.produto__valor__promocao(v-if="promocao") de <span>{{valor__anterior}}</span> por
				.produto__valor__total {{valor__atual}}
			.produto__card__parcelamento {{parcelamento}}
			.produto__stars
				.rating__stars(:data-rating="nota")
					i.fas.fa-star
					i.fas.fa-star
					i.fas.fa-star
					i.fas.fa-star
					i.fas.fa-star
</template>
<script>
export default {
	props: {
		link: {
			type: String
		},
		imagem: {
			type: String
		},
		titulo: {
			type: String
		},
		novidade: {
			type: Boolean,
			default: false
		},
		promocao: {
			type: Boolean,
			default: false
		},
		consulta: {
			type: Boolean,
			default: false
		},
		promocao__porcentagem: {
			type: String
		},
		valor__anterior: {
			type: String
		},
		valor__atual: {
			type: String
		},
		nota: {
			type: String
		},
		descricao: {
			type: String
		},
		parcelamento: {
			type: String
		}
	}
}
</script>

