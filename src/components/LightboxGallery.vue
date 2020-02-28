<template>
    <main class="gallery">
        <section class="home-gallery">
            <img :src="houseImages[0]" @click="show(0)" alt="Home" class="home-gallery__img1">
            <img :src="houseImages[1]" @click="show(1)" alt="Home inside" class="home-gallery__img2">
            <img :src="houseImages[2]" @click="show(2)" alt="Home inside" class="home-gallery__img3">
        </section>
        <div v-if="visible" @click="hide" class="lightbox">
            <img :src="houseImages[index]" @click.stop="" alt="House image" class="lightbox__img">
        </div>
    </main>
</template>

<script>
export default {
    name: "LightboxGallery",
    props: {
        houseImages: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            visible: false,
            index: 0
        }
    },
    methods: {
        selectCurrentImg(currentIndex) {
            this.index = currentIndex;
        },
        hide() {
            this.visible = false;
            this.index = 0;
        },
        show(currentIndex) {
            this.selectCurrentImg(currentIndex);
            this.visible = true;
        }
    }
}
</script>

<style>

.home-gallery {
    width: 40rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .25rem;
}

.home-gallery__img1 {
    grid-column: 1 / -1;
    width: 100%;
    cursor: pointer;
}

.home-gallery__img2,
.home-gallery__img3 {
    width: 100%;
    cursor: pointer;
}

.lightbox {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, .65);
}

</style>