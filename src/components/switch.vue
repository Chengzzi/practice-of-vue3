<template>
    <div class="cz-switch" :class="{ checked: value }" @click="toggle">
        <span class="switch-inner"></span>
    </div>
</template>
<script lang="ts">
export default {
    name: "cz-switch",
    props: {
        value: { type: Boolean },
    },
    setup(props, context) {
        const toggle = (val) => {
            // vue3 需要使用update:value作为事件名，不能再用input,且父组件要写为v-model:value
            // context.emit("input", !props.value);
            context.emit("update:value", !props.value);
            
        };
        return {
            toggle,
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
    background-color: rgb(199,199 ,199 )

    border-radius: $h/2
    position: relative
    cursor: pointer
    transition: background-color .3s
    .switch-inner
        border-radius: 50%
        background: #fff
        position: absolute
        top: 2px
        left: calc( 100% - #{$h2} - 2px )
        width: $h2
        height: $h2
        transition: all 0.3s
.cz-switch.checked
    background: #409eff
    .switch-inner
        left: 2px
</style>