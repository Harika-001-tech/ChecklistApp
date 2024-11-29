const axios = require('axios');

const fetchApplicationData = async () => {
    const url = 'http://qa-gb.api.dynamatix.com:3100/api/applications';
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching API data:', error.message);
        throw new Error('API fetch failed');
    }
};

module.exports = { fetchApplicationData };
