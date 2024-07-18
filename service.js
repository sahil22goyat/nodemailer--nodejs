const axios = require('axios');
const monitoredUrls = {}; // In-memory store for monitored URLs and intervals

// Function to start monitoring a URL at a specified interval
const startMonitoring = (url, interval) => {
    if (!monitoredUrls[url]) {
        monitoredUrls[url] = setInterval(async () => {
            try {
                await axios.get(url);
                console.log(`${url} is up`);
            } catch (error) {
                console.error(`${url} might be down`, error.message);
            }
        }, interval);
    }
};

// Function to stop monitoring a URL
const stopMonitoring = (url) => {
    if (monitoredUrls[url]) {
        clearInterval(monitoredUrls[url]);
        delete monitoredUrls[url];
        return true; // Monitoring stopped successfully
    }
    return false; // URL was not being monitored
};

module.exports = { startMonitoring, stopMonitoring };
