<template>
    <div class="loading">
        <span class="loading__ball"></span>
        <span class="loading__ball"></span>
        <span class="loading__ball"></span>
    </div>
</template>

<script>
export default {
    name: "Loader"
}
</script>

<style>

.loading {
    z-index: 10;
    display: flex;
    position: fixed;
    left: 50%;
    bottom: 20%;
    transform: translate(-50%, -50%);
}

.loading__ball {
    width: .8rem;
    height: .8rem;
    margin-left: .5rem;
    margin-right: .5rem;
    border-radius: 50%;
    background-color: #0029fa;
    animation: bounce 600ms ease-in-out infinite;
}

.loading__ball:nth-of-type(2) {
    animation-delay: 100ms;
    background-color: #3e38f2;
}
.loading__ball:nth-of-type(3) {
    animation-delay: 200ms;
    background-color: #5c73f2;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-14px);
    }

    100% {
        transform: translateY(0);
    }
}

</style>