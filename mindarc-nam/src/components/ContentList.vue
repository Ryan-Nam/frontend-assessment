<template>
    <section>
        <div class="container">
            <div class="row text-center mb-3 equal-height">
                <ContentItem v-for="item in contentItems" :key="item.title" :item="item" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ContentItem from './ContentItem.vue';

const contentItems = ref([
    { image: '400x300', title: 'Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', link: 'Link 1' },
    { image: '400x300', title: 'Title 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'Link 2' },
    { image: '400x300', title: 'Title 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link: 'Link 3' }
]);

</script>
