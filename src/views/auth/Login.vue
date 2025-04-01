<template>
    <Layout bg="1">
        <div class="w-xl">
            <router-link :to="{ name: 'Home' }" class="block mb-6">
                <AppLogo no-text size="xl" circle />
            </router-link>
            <LoginForm />
        </div>
    </Layout>
</template>

<script setup>

    // Import components
    import AppLogo from '@/components/layouts/AppLogo.vue'
    import LoginForm from '@/components/forms/LoginForm.vue'
    import Layout from '@/components/layouts/landing/Layout.vue'
    import PageTitle from '@/components/content/PageTitle.vue'
    import Breadcrumbs from '@/components/content/Breadcrumbs.vue'

    // Breadcrumbs
    const breadcrumbs = [
        {
            text: 'Register',
        }
    ]

</script>

<style scoped></style>