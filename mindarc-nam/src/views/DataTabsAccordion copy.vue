<template>
    <div class="container custom-html-style">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <!-- Desktop Tab -->
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
                <div class="tab-content desktop-tab-content d-none d-md-block" id="navTabContent">
                    <div class="tab-pane fade" :class="{ 'show active': index === 0 }" v-for="(item, index) in data"
                        :key="`nav-content-${index}`" :id="`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`"
                        role="tabpanel" :aria-labelledby="`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}-tab`">
                        <div v-html="item.content"></div>
                    </div>
                </div>

                <!-- Mobile Accordion -->
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
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import 'bootstrap';

export default {
    setup() {
        const jsonData = ref([]);

        onMounted(async () => {
            try {
                const response = await import('../assets/data.json');
                jsonData.value = response.default;
            } catch (error) {
                console.error('Error loading JSON data:', error);
            }
        });

        return { data: jsonData };
    },
};
</script>

<style>

.custom-html-style li {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding-left: 1.2em;
    list-style-type: disc; 
}

.custom-html-style ul {
    
    padding-left:40px;
}
</style>