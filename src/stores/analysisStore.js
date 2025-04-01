import { ref } from 'vue'
import { defineStore } from 'pinia'

import { analyzeReviews } from '@/services/api'

export const useAnalysisStore = defineStore('analysis', () => {

    const loading = ref(false)
    const analyses = ref([])

    //
    // API interactions
    //

    const analyzeAppReviews = async (appId, count) => {
        loading.value = true
        const analysis = await analyzeReviews(appId, count)
        analyses.value.push(analysis)
        loading.value = false
        return analysis
    }

    const analysisExists = (appId) => {
        return analyses.value.some(analysis => analysis.appId === appId)
    }

    const getAnalysis = (appId) => {
        return analyses.value.find(analysis => analysis.appId === appId)
    }

    return {
        loading,
        analyses,
        analysisExists,
        getAnalysis,
        analyzeAppReviews
    }

})