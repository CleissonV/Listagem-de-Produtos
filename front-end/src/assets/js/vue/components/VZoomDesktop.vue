<template lang="pug">
	.v__zoom
		img(
			id="zoom__image"
			:src="imgActive.md"
			:data-zoom-image="imgActive.xl"
			loading="lazy"
			width="540"
			height="510"
			:alt="imgActive.alt"
		).img-fluid

		//- h3 OUTROS ÂNGULOS
		owl-carousel(
			nav
			:xs="5"
			:margin="15"
		).v__zoom__galery#v__galery
			a(
				v-for="img in album"
				:key="img.id"
				href="#"
				:data-image="img.md"
				:data-zoom-image="img.xl"
				:class=`{
					'active': img.active
				}`
				@click="setActive(img)"
			)
				img(
					:src="img.xs"
					width="100"
					height="100"
					loading="lazy"
					:alt="img.alt"
				).img-fluid
		//- .v__zoom__galery#galery
	//- .v__zoom
</template>

<script>
export default {
	props: {
		fotos: Array
	},
	data() {
		var imgActive = this.fotos.find(item => item.active === true);

		return {
			album: this.fotos,
			imgActive: imgActive
		}
	},
	methods: {
		setActive(img) {
			this.album.map(foto => {
				foto.active = img.id === foto.id;
			})
		}
	},
	mounted() {
		var config  = {
			gallery: 'v__galery',
			cursor: 'crosshair',
			galleryActiveClass: 'active',
			imageCrossfade: true,
			responsive: true,
			loadingIcon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8cmVjdCB4PSIxNy41IiB5PSIzMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjQwIiBmaWxsPSIjNjY2NjY2Ij4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJ5IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7MC41OzEiIHZhbHVlcz0iMTg7MzA7MzAiIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxIiBiZWdpbj0iLTAuMnMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDswLjU7MSIgdmFsdWVzPSI2NDs0MDs0MCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIGJlZ2luPSItMC4ycyI+PC9hbmltYXRlPgo8L3JlY3Q+CjxyZWN0IHg9IjQyLjUiIHk9IjMwIiB3aWR0aD0iMTUiIGhlaWdodD0iNDAiIGZpbGw9IiM2NjY2NjYiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDswLjU7MSIgdmFsdWVzPSIyMC45OTk5OTk5OTk5OTk5OTY7MzA7MzAiIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxIiBiZWdpbj0iLTAuMXMiPjwvYW5pbWF0ZT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDswLjU7MSIgdmFsdWVzPSI1OC4wMDAwMDAwMDAwMDAwMTs0MDs0MCIga2V5U3BsaW5lcz0iMCAwLjUgMC41IDE7MCAwLjUgMC41IDEiIGJlZ2luPSItMC4xcyI+PC9hbmltYXRlPgo8L3JlY3Q+CjxyZWN0IHg9IjY3LjUiIHk9IjMwIiB3aWR0aD0iMTUiIGhlaWdodD0iNDAiIGZpbGw9IiM2NjY2NjYiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDswLjU7MSIgdmFsdWVzPSIyMC45OTk5OTk5OTk5OTk5OTY7MzA7MzAiIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxIj48L2FuaW1hdGU+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iaGVpZ2h0IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIga2V5VGltZXM9IjA7MC41OzEiIHZhbHVlcz0iNTguMDAwMDAwMDAwMDAwMDE7NDA7NDAiIGtleVNwbGluZXM9IjAgMC41IDAuNSAxOzAgMC41IDAuNSAxIj48L2FuaW1hdGU+CjwvcmVjdD4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+'
		};

		$('#zoom__image').elevateZoom(config);
	}
}
</script>
