<template>
    <div class="min-h-screen flex flex-col items-center justify-center"
        :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
        :class="{ 'bg-cover bg-center': hasBackgroundImage }">
        <slot />
    </div>
</template>

<script setup>

    import BackgroundImageOne from "@/assets/images/1.jpg"
    import BackgroundImageTwo from "@/assets/images/2.jpg"

    import { computed } from "vue"

    const props = defineProps({
        bg: {
            type: String,
            default: ''
        }
    })

    const hasBackgroundImage = computed(() => {
        return props.bg !== ''
    })

    const backgroundImage = computed(() => {
        switch (props.bg) {
            case "1":
                return BackgroundImageOne
            case "2":
                return BackgroundImageTwo
            default:
                return null
        }
    })

</script>

<style scoped>

</style>