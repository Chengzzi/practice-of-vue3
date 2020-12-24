<template>
    <div class="chengziUIDoc">
        <top-nav></top-nav>
        <aside-nav></aside-nav>
    </div>
</template>

<script lang="ts">
import topNav from "./topNav.vue";
import asideNav from "./asideNav.vue";
import { provide, ref } from "vue";
export default {
    components: {
        topNav,asideNav
    },
    name: "chengziUIDoc",
    setup() {
        const showNav = ref(false);
        provide("showNav",showNav); 
        return {
            count: 0,
        };
    },
};
</script>
<style scoped>
.chengziUIDoc{
    width: 100%;
    height: 100%;
}
</style>
