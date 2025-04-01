<template>
    <div class="w-full bg-white p-4">
        <div class="container flex flex-row items-center justify-between mx-auto">
            <div class="flex flex-row items-center">
                <router-link :to="{ name: 'Home' }">
                    <AppLogo />
                </router-link>
            </div>
            <div>
                <router-link class="text-black mr-3 hover:underline" :to="{ name: 'Home' }">
                    Home
                </router-link>
                <router-link class="text-black mx-3 hover:underline" :to="{ name: 'Pricing' }">
                    Pricing
                </router-link>
                <router-link class="text-black mx-3 hover:underline" :to="{ name: 'Login' }">
                    Login
                </router-link>
                <router-link class="text-black ml-3 hover:underline" :to="{ name: 'Register' }">
                    Register
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

    // Import components
    import AppLogo from '@/components/layouts/AppLogo.vue'

</script>