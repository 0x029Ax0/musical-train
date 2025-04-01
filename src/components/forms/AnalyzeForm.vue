<template>

    <form @submit.prevent="handleClickSubmit">

        <!-- App ID -->
        <div class="mb-4">
            <label for="app-id" class="block text-sm font-medium text-gray-700 mb-1">
                App ID
            </label>
            <input id="app-id" v-model="appId" type="text"
                placeholder="Enter Google Play app ID (e.g. com.spotify.music)"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <!-- Number of Reviews -->
        <div class="mb-6">
            <label for="review-count" class="block text-sm font-medium text-gray-700 mb-1">
                Number of Reviews
            </label>
            <select id="review-count" v-model="count"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="5">5 reviews</option>
                <option value="10">10 reviews</option>
                <option value="25">25 reviews</option>
                <option value="50">50 reviews</option>
                <option value="100">100 reviews</option>
            </select>
        </div>

        <!-- Submit Button -->
        <button @click="handleClickSubmit" :disabled="loading"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed">
            <span v-if="loading" class="flex items-center justify-center">
                <i class="fa-solid fa-spinner fa-spin mr-2"></i>
                Analyzing...
            </span>
            <span v-else>Analyze Reviews</span>
        </button>

        <!-- Error Message -->
        <div v-if="error" class="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {{ error }}
        </div>

    </form>

</template>

<script setup>

    import { ref } from 'vue'

    const props = defineProps({
        loading: {
            type: Boolean,
            default: false,
        },
        error: {
            type: String,
            default: null,
        }
    })

    const emit = defineEmits(['submit'])

    const appId = ref('com.spotify.music')
    const count = ref('10')

    const handleClickSubmit = () => {
        if (appId.value && appId.value !== "") {
            emit('submit', appId.value, count.value)
        }
    }

</script>