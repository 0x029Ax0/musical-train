<template>
    <nav class="flex container mx-auto max-w-screen-xl py-6" aria-label="Breadcrumb">
        <div class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <!-- Home -->
            <div class="inline-flex items-center">
                <router-link :to="{ name: 'Home'}" 
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    {{ homeText }}
                </router-link>
            </div>
            <!-- Breadcrumbs -->
            <div class="flex flex-row items-center" v-for="(breadcrumb, index) in breadcrumbs" :key="index">
                <!-- Seperator -->
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <!-- Breadcrumb (link) -->
                <router-link v-if="breadcrumb.to" :to="breadcrumb.to" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                    {{ breadcrumb.text }}
                </router-link>
                <!-- Breadcrumb (current page) -->
                <span v-else class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400" :aria-current="breadcrumb.current ? 'page' : null">
                    {{ breadcrumb.text }}
                </span>
            </div>
            
            <!-- <li :aria-current="breadcrumb.current ? 'page' : null">
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
                </div>
            </li> -->
        </div>
    </nav>
</template>

<script setup>

    import { computed } from 'vue'

    const props = defineProps({
        breadcrumbs: {
            type: Array
        },
        homeText: {
            type: String,
            default: 'Home'
        }
    })

    const breadcrumbs = computed(() => {
        return props.breadcrumbs
    })

</script>