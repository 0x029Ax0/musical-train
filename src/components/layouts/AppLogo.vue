<template>
    <div class="flex flex-row items-center justify-center">

        <div id="logo" 
            class="bg-gray-900 flex items-center justify-center text-white"
            :class="{
                'mr-5': !noText,
                'lg': size === 'lg',
                'xl': size === 'xl',
                'circle': circle,
                'rounded-lg': !circle
            }">
            <i class=" fa-brands fa-android"></i>
        </div>

        <div class="text-2xl font-bold text-center text-black" v-if="!noText">
            Android App Review Analyzer
        </div>

    </div>
</template>

<script setup>

    const props = defineProps({
        size: {
            type: String,
            default: 'md'
        },
        noText: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        }
    })

</script>

<style scoped>
    @reference "tailwindcss";
    #logo {
        width: 40px;
        height: 40px;
    }
    .lg {
        width: 60px !important;
        height: 60px !important;
        @apply text-3xl;
    }
    .xl {
        width: 80px !important;
        height: 80px !important;
        @apply text-4xl;
    }
    .circle {
        border-radius: 50%;
    }
</style>