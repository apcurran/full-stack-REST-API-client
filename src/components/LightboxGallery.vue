<template>
    <section class="home-gallery">
        <img :src="houseImages[0]" alt="Home" class="home-gallery__img1">
        <img :src="houseImages[1]" alt="Home inside" class="home-gallery__img2">
        <img :src="houseImages[2]" alt="Home inside" class="home-gallery__img3">
    </section>
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
}

.home-gallery__img2,
.home-gallery__img3 {
    width: 100%;
}

</style>