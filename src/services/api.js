import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export const analyzeReviews = async (appId, count = 10) => {
    try {
        const response = await axios.get(`${API_URL}/analyze/${appId}`, {
            params: { count },
        });
        return response.data;
    } catch (error) {
        console.error('Error analyzing reviews:', error);
        throw error;
    }
};

export default {
    analyzeReviews,
};
