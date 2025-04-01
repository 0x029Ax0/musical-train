<template>
    <div class="flex-1 flex flex-col" :class="{ 
        'bg-white': !dark, 
        'bg-gray-900': dark,
        'items-center justify-center': centered
    }">
        <slot />
    </div>
</template>

<script setup>

    const props = defineProps({
        dark: {
            type: Boolean,
            default: false
        },
        centered: {
            type: Boolean,
            default: false
        }
    })

</script>