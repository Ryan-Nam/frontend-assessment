<template>
    <div class="tab-content desktop-tab-content d-none d-md-block" id="navTabContent">
        <div class="tab-pane fade" :class="{ 'show active': index === 0 }" v-for="(item, index) in data"
             :key="`nav-content-${index}`" :id="`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`"
             role="tabpanel" :aria-labelledby="`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}-tab`">
            <div v-html="item.content"></div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data: Array
});
</script>
