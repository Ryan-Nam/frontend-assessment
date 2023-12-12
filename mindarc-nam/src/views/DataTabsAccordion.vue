<template>
    <div class="container custom-html-style">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <DesktopTabs :data="data" />
                <TabContent :data="data" />
                <MobileAccordion :data="data" />
            </div>
        </div>
    </div>
</template>

<script setup>
import DesktopTabs from '../components/DesktopTabs.vue';
import MobileAccordion from '../components/MobileAccordion.vue';
import TabContent from '../components/TabContent.vue';
import { ref, onMounted } from 'vue';
import 'bootstrap';

const jsonData = ref([]);

onMounted(async () => {
    try {
        const response = await import('../assets/data.json');
        jsonData.value = response.default;
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
});

const data = jsonData;
</script>

<style>
.custom-html-style li {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding-left: 1.2em;
    list-style-type: disc;
}

.custom-html-style ul {
    padding-left: 40px;
}
</style>
