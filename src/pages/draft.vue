<template>
    <div class="draft">
        <cz-switch v-model:value="checked"></cz-switch>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from "../components/switch.vue";
export default {
    components: {
        "cz-switch": Switch,
    },
    name: "draft",
    setup() {
        let checked = ref(false)
        return {
            checked,
            count: 0,
        };
    },
};
</script>
<style lang="sass" scoped>
.draft
    position: absolute
    left: 150px
    top: 40px
    padding: 50px
</style>
