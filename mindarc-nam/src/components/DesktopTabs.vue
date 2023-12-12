<template>
    <nav class="desktop-nav d-none d-md-block">
        <div class="nav nav-tabs" id="navTab" role="tablist">
            <button class="nav-link" :class="{ active: index === 0 }" v-for="(item, index) in data"
                    :key="`nav-tab-${index}`" :id="`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}-tab`"
                    data-toggle="tab" :data-target="`#nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`"
                    type="button" role="tab" :aria-controls="`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`"
                    :aria-selected="index === 0 ? 'true' : 'false'">
                {{ item.title }}
            </button>
        </div>
    </nav>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data: Array
});
</script>
