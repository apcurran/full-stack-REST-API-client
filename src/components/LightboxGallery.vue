<template>
    <main class="gallery">
        <section class="home-gallery">
            <img :src="houseImages[0]" @click="show(0)" alt="Home" class="home-gallery__img1" width="640" height="770">
            <img :src="houseImages[1]" @click="show(1)" alt="Home inside" class="home-gallery__img2" width="318" height="239">
            <img :src="houseImages[2]" @click="show(2)" alt="Home inside" class="home-gallery__img3" width="318" height="239">
        </section>
        <div v-if="visible" @click="hide" class="lightbox">
            <img :src="houseImages[index]" @click.stop="" alt="House image" class="lightbox__img">
            <span class="lightbox__x-btn">&times;</span>
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
    mounted() {
        window.addEventListener("keydown", this.keyPressed);
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
        },
        keyPressed(event) {
            if (event.key !== "Escape") return;

            this.hide();
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
}

.home-gallery__img1,
.home-gallery__img2,
.home-gallery__img3 {
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: pointer;
}

.lightbox {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, .7);
}

.lightbox__img {
    max-width: 85%;
    max-height: 95%;
}

.lightbox__x-btn {
    position: absolute;
    top: 3%;
    right: 3%;
    z-index: 11;
    font-size: 3rem;
    color: #fff;
    cursor: pointer;

    transition: color 125ms ease-in-out;
}

.lightbox__x-btn:hover {
    color: var(--light-blue);
}

@media screen and (max-width: 84.5em) {
    .home-gallery {
        width: 100%;
    }
}

</style>