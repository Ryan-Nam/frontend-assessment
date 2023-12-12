<template>
    <section class="main-banner">
        <div class="mindarc-hero" :style="{ backgroundImage: `url(https://via.placeholder.com/${bannerImage})` }">
            <div class="container">
                <h1 class="mindarc-heading">Hello Developer!</h1>
                <h3 class="mindarc-subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const bannerImage = ref(window.innerWidth >= 768 ? '1920X650' : '600x600');

const updateBannerImage = () => {
    bannerImage.value = window.innerWidth >= 768 ? '1920X650' : '600x600';
};

onMounted(() => {
    window.addEventListener('resize', updateBannerImage);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateBannerImage);
});
</script>