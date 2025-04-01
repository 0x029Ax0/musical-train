<template>
    <div class="min-h-screen flex flex-col">
        <!-- Navigation -->
        <LayoutNavigation />
        <!-- Content -->
        <div class="flex-1 flex flex-col bg-gray-100">
            <slot />
        </div>
        <!-- Footer -->
        <footer class="p-4 bg-white md:p-8 lg:p-10">
            <div class="mx-auto max-w-screen-xl text-center">
                <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <AppLogo no-text circle size="lg" />
                </a>
                <p class="my-6 text-gray-500 dark:text-gray-400">
                    Using AI to make your life easier.
                </p>
                <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Premium</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                </ul>
                <span class="text-sm text-gray-500 sm:text-center">© 2025 <a href="#" class="hover:underline">AIX</a>. All Rights Reserved.</span>
            </div>
        </footer>
    </div>
</template>

<script setup>

    // Import components
    import LayoutNavigation from './LayoutNavigation.vue'
    import AppLogo from '@/components/layouts/AppLogo.vue'

</script>