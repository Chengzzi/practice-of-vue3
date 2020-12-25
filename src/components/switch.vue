<template>
    <div class="cz-switch" :class="{ checked }" @click="toggle">
        <span class="switch-inner"></span>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    name: "cz-switch",
    setup() {
        const checked = ref(false);
        const toggle = () => {
            checked.value = !checked.value;
        };
        return {
            toggle,
            checked,
            count: 0,
        };
    },
};
</script>
<style lang="sass" scoped>
$h :22px
$h2 :$h - 4px
.cz-switch
    width: 2*$h
    height: $h
    background: #409eff
    border-radius: $h/2
    position: relative
    cursor: pointer
    transition: background-color .3s
    .switch-inner
        border-radius: 50%
        background: #fff
        position: absolute
        top: 2px
        left: 2px
        width: $h2
        height: $h2
        transition: all 0.3s
.cz-switch.checked
    background-color: rgb(199,199 ,199 )
    .switch-inner
        left: calc( 100% - #{$h2} - 2px )
</style>