<template>
    <div class="col-md-4 mb-4">
        <div class="mindarc-shadow content-wrapper rounded">
            <div class="content-area p-3">
                <ul>
                    <img :src="`https://via.placeholder.com/${item.image}`" :alt="item.title" class="content-block__image rounded">
                    <li class="content-block__text">{{ item.description }}</li>
                </ul>
            </div>
            <div class="mindarc-button__bottom">
                <button class="mindarc-button" :href="item.link" role="button">Read more</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    item: Object
});
</script>
