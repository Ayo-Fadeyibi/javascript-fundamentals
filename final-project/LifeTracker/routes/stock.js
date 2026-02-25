const express = require('express');
const stockRouter = express.Router();
const { stockArray } = require('../data/store');

const API_KEY = 'LLOXNP0FQW3GSANB';
const symbol = 'IBM';

var request = require('request');

stockRouter.get('/', async (req, res) => {
    try {

        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;

        const response = await fetch(url);

        // Check for HTTP errors
        if (!response.ok) {
            return res.status(response.status).json({
                error: `External API error: ${response.statusText}`
            });
        }

        const data = await response.json();

        const meta = data["Meta Data"];
        const timeSeries = data["Time Series (Daily)"];

        if (!meta || !timeSeries) {
            return res.status(500).json({
                error: "Invalid data received from AlphaVantage"
            });
        }

        // Transform data into clean format
        const formattedPrices = Object.entries(timeSeries).map(([date, values]) => ({
            date,
            open: Number(values["1. open"]),
            high: Number(values["2. high"]),
            low: Number(values["3. low"]),
            close: Number(values["4. close"]),
            volume: Number(values["5. volume"])
        }));

        // Sort latest first
        formattedPrices.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Limit to last 7 days
        const latestPrices = formattedPrices.slice(0, 7);

        res.json({
            symbol: meta["2. Symbol"],
            lastRefreshed: meta["3. Last Refreshed"],
            timeZone: meta["5. Time Zone"],
            prices: latestPrices
        });

    } catch (error) {
        console.error("Server Error:", error.message);
        res.status(500).json({
            error: "Failed to fetch stock data"
        });
    }
});
module.exports = stockRouter;