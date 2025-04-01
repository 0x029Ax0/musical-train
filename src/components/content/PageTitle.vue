<template>
    <h1 class="text-3xl font-bold text-black mb-6">
        {{ title }}
    </h1>
</template>

<script setup>

    const props = defineProps({
        title: {
            type: String,
            required: true,
        },
    })

</script>