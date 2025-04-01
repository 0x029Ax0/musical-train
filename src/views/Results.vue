<template>
    <div class="">

        <div class="bg-gray-50 rounded-lg p-6">

            <!-- Analysis -->
            <div v-if="analysis">

                <!-- App Information -->
                <div class="mb-6">
                    <h2 class="text-xl font-semibold text-gray-700 mb-2">
                        App Information
                    </h2>
                    <p><strong>App ID:</strong> {{ appId }}</p>
                    <p><strong>Number of Reviews:</strong> {{ count }}</p>
                </div>

                <!-- Sentiment Analysis -->
                <div class="mb-6">
                    <h2 class="text-xl font-semibold text-gray-700 mb-2">
                        Sentiment Analysis
                    </h2>

                    <div class="grid grid-cols-4 gap-4">
                        <div
                            class="bg-green-500 text-white shadow rounded-lg flex flex-col items-center justify-center p-4">
                            <div>Positive</div>
                            <div class="text-3xl">{{ sentimentPositive }}</div>
                        </div>
                        <div
                            class="bg-red-500 text-white shadow rounded-lg flex flex-col items-center justify-center p-4">
                            <div>Negative</div>
                            <div class="text-3xl">{{ sentimentNegative }}</div>
                        </div>
                        <div
                            class="bg-gray-500 text-white shadow rounded-lg flex flex-col items-center justify-center p-4">
                            <div>Neutral</div>
                            <div class="text-3xl">{{ sentimentNeutral }}</div>
                        </div>
                        <div
                            class="bg-gray-500 text-white shadow rounded-lg flex flex-col items-center justify-center p-4">
                            <div>Mixed</div>
                            <div class="text-3xl">{{ sentimentMixed }}</div>
                        </div>
                    </div>
                </div>

                <!-- Bugs -->
                <div class="mb-6">
                    <h2 class="text-xl font-semibold text-gray-700 mb-2">
                        Bugs
                    </h2>

                    <div class="grid grid-cols-3 gap-4 mb-6">
                        <div
                            class="bg-white text-black shadow rounded-lg flex flex-col items-center justify-center p-4">
                            <div>Total</div>
                            <div class="text-3xl">{{ bugsTotal }}</div>
                        </div>
                        <div
                            class="bg-red-500 text-white shadow rounded-lg flex flex-col items-center justify-center p-4">
                            <div>High Priority</div>
                            <div class="text-3xl">{{ bugsSeverityHigh }}</div>
                        </div>
                        <div
                            class="bg-orange-500 text-white shadow rounded-lg flex flex-col items-center justify-center p-4">
                            <div>Medium Priority</div>
                            <div class="text-3xl">{{ bugsSeverityMedium }}</div>
                        </div>
                    </div>

                    <div class="mb-6">
                        <div class="text-xl mb-2">Reports</div>
                        <div class="rounded-lg overflow-hidden">
                            <div v-for="(report, index) in bugReports" :key="index"
                                :class="{ 'border-b': index < bugReports.length - 1 }"
                                @click="handleToggleBugReport(report)">
                                <div class="text-white px-3 py-2 flex flex-row items-center cursor-pointer" :class="{ 
                                        'bg-red-500': report.severity === 'high', 
                                        'bg-orange-500': report.severity === 'medium'
                                    }">
                                    <div class="flex-1">
                                        {{ report.reviewId }}
                                    </div>
                                    <div class="">
                                        {{ report.authorName }}
                                    </div>
                                </div>
                                <div class="p-3" v-if="isBugReportOpen(report)">
                                    <pre>{{ report }}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Positive Feedback -->
                <div class="mb-6">
                    <div class="text-xl mb-2">Positive feedback</div>
                    <div class="rounded-lg overflow-hidden">
                        <div v-for="(feedback, index) in feedbackPositive" :key="index"
                            :class="{ 'border-b border-gray-400': index < feedbackPositive.length - 1 }"
                            @click="handleToggleFeedback(feedback, 'positive')">
                            <div class="bg-gray-200 text-black px-3 py-2 flex flex-row items-center cursor-pointer">
                                <div class="flex-1">
                                    {{ feedback.reviewId }}
                                </div>
                                <div class="">
                                    {{ feedback.authorName }}
                                </div>
                            </div>
                            <div class="p-3" v-if="isPositiveFeedbackOpen(feedback)">
                                <pre>{{ feedback }}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Negative Feedback -->
                <div class="mb-6">
                    <div class="text-xl mb-2">Negative feedback</div>
                    <div class="rounded-lg overflow-hidden">
                        <div v-for="(feedback, index) in feedbackNegative" :key="index"
                            :class="{ 'border-b border-gray-400': index < feedbackNegative.length - 1 }"
                            @click="handleToggleFeedback(feedback, 'negative')">
                            <div class="bg-gray-200 text-black px-3 py-2 flex flex-row items-center cursor-pointer">
                                <div class="flex-1">
                                    {{ feedback.reviewId }}
                                </div>
                                <div class="">
                                    {{ feedback.authorName }}
                                </div>
                            </div>
                            <div class="p-3" v-if="isNegativeFeedbackOpen(feedback)">
                                <pre>{{ feedback }}</pre>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Loading -->
            <div class="flex flex-row items-center justify-center" v-else>
                <i class="fa-solid fa-spinner fa-spin mr-2"></i>
                Loading analysis...
            </div>

        </div>

        <div v-if="!analysis" class="text-center py-12">
            <p class="text-gray-500">
                No analysis data available. Please go back and submit an app
                for analysis.
            </p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
            <button @click="$router.push('/')" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Back to Home
            </button>
        </div>

    </div>
</template>

<script setup>

    import { useAnalysisStore } from '@/stores/analysisStore'
    import { useRoute } from 'vue-router'
    import { computed, ref } from 'vue'

    const route = useRoute()
    const analysisStore = useAnalysisStore()

    // Get the analysis data
    const analysis = computed(() => analysisStore.getAnalysis(route.params.appId))

    // Get the app id and number of reviews
    const appId = computed(() => analysis.value.app_id)
    const count = computed(() => analysis.value.ai_analysis.total_reviews)

    // Get the sentiment analysis data
    const sentimentPositive = computed(() => analysis.value.ai_analysis.sentiment_analysis.distribution.positive || 0)
    const sentimentNegative = computed(() => analysis.value.ai_analysis.sentiment_analysis.distribution.negative || 0)
    const sentimentNeutral = computed(() => analysis.value.ai_analysis.sentiment_analysis.distribution.neutral || 0)
    const sentimentMixed = computed(() => analysis.value.ai_analysis.sentiment_analysis.distribution.mixed || 0)

    // Get the bugs data
    const bugsTotal = computed(() => analysis.value.ai_analysis.bugs.total)
    const bugsSeverityHigh = computed(() => analysis.value.ai_analysis.bugs.severity_distribution.high || 0)
    const bugsSeverityMedium = computed(() => analysis.value.ai_analysis.bugs.severity_distribution.medium || 0)

    // Get the bug reports data
    const bugReports = computed(() => analysis.value.ai_analysis.bugs.reports)

    // Toggle bug reports
    const openBugReports = ref([])
    const handleToggleBugReport = (report) => {
        if (openBugReports.value.includes(report.reviewId)) {
            openBugReports.value = openBugReports.value.filter(id => id !== report.reviewId)
        } else {
            openBugReports.value.push(report.reviewId)
        }
    }
    const isBugReportOpen = (report) => openBugReports.value.includes(report.reviewId)

    // Get the feedback data
    const feedbackPositive = computed(() => analysis.value.ai_analysis.feedback.positive)
    const feedbackNegative = computed(() => analysis.value.ai_analysis.feedback.negative)

    // Toggle feedback
    const openPositiveFeedback = ref([])
    const openNegativeFeedback = ref([])
    const handleToggleFeedback = (feedback, type) => {
        if (type === 'positive') {
            if (openPositiveFeedback.value.includes(feedback.reviewId)) {
                openPositiveFeedback.value = openPositiveFeedback.value.filter(id => id !== feedback.reviewId)
            } else {
                openPositiveFeedback.value.push(feedback.reviewId)
            }
        } else {
            if (openNegativeFeedback.value.includes(feedback.reviewId)) {
                openNegativeFeedback.value = openNegativeFeedback.value.filter(id => id !== feedback.reviewId)
            } else {
                openNegativeFeedback.value.push(feedback.reviewId)
            }
        }
    }
    const isPositiveFeedbackOpen = (feedback) => openPositiveFeedback.value.includes(feedback.reviewId)
    const isNegativeFeedbackOpen = (feedback) => openNegativeFeedback.value.includes(feedback.reviewId)

</script>
