<template>
    <div class="chengziUIDoc">
        <!-- <top-nav></top-nav>
        <aside-nav></aside-nav> -->
        <cz-switch></cz-switch>
    </div>
</template>

<script lang="ts">
import topNav from "./topNav.vue";
import asideNav from "./asideNav.vue";
import Switch from "../components/switch.vue";
import { provide, ref } from "vue";
export default {
    components: {
        topNav,
        asideNav,
        "cz-switch": Switch,
    },
    name: "chengziUIDoc",
    setup() {
        const showNav = ref(false);
        provide("showNav", showNav);
        return {
            count: 0,
        };
    },
};
</script>
<style lang="sass" scoped>
.chengziUIDoc
    width: 100%
    height: 100%
    padding: 10px
    // background: #eee
</style>
