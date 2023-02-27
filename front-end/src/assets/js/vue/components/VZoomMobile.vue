<template lang="pug">
    .v__zoom
        bs-carousel#zoom_mobile(slide fade interval="0")
            .carousel-item(
                v-for="img in album"
                :class="{'active': img.active}"
            )
                a(
                    :href="img.xl"
                    :title="img.alt"
                    data-lightbox="produto"
                )
                    img(
                        :src="img.md"
                        width="655"
                        height="655"
                        :alt="img.alt"
                        loading="lazy"
                    ).img-fluid
            //- bs-carousel#zoom_mobile
        //- bs-carousel#zoom_mobile(slide interval="0")
        owl-carousel#zoom__indicators(
            :xs="5"
            :margin="10"
            nav
        ).v__zoom__galery
            a(
                v-for="img,i in album"
                :key="img.id"
                href="#"
                :data-slide-to="i"
                data-target="#zoom_mobile"
                :class="{'active': img.active}"
            )
                img(
                    :src="img.xs"
                    width="100"
                    height="100"
                    :alt="img.alt"
                    loading="lazy"
                ).img-fluid
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
        const $this  = this;
        var carousel = $('#zoom_mobile');

        carousel.on('slide.bs.carousel', function(e) {
            $this.album.forEach((foto, i) => foto.active = i === e.to);
        })
    }
}
</script>
