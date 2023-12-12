<template>
    <div class="accordion d-md-none" id="accordionExample">
        <div class="card" v-for="(item, index) in data" :key="`accordion-${index}`">
            <div class="card-header" :id="`heading-${index}`">
                <button class="btn btn-link w-100 text-left" type="button" data-toggle="collapse"
                        :data-target="`#collapse-${index}`" :aria-expanded="index === 0 ? 'true' : 'false'"
                        :aria-controls="`collapse-${index}`">
                    {{ item.title }}
                </button>
            </div>

            <div :id="`collapse-${index}`" class="collapse" :class="{ show: index === 0 }"
                 :aria-labelledby="`heading-${index}`" data-parent="#accordionExample">
                <div class="card-body" v-html="item.content"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data: Array
});
</script>
