import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const BFF_PORT = process.env.BFF_PORT || 3001;

const VITE_API_URL = process.env.VITE_API_URL;
const API_TOKEN = process.env.API_TOKEN;
const APP_URL = process.env.APP_URL || "";

if (!API_TOKEN) {
    console.error('ERROR: API_TOKEN is not defined in .env');
    process.exit(1);
}

app.use(cors({
    origin: APP_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

async function request(endpoint, method = "GET", body) {
    const options = {};
    if (body) {
        options.body = body;
    }

    const headers = {
        'X-API-TOKEN': API_TOKEN,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const config = {
        headers,
        method,
        ...options
    }

    const response = await fetch(`${VITE_API_URL}${endpoint}`, config);

    if (!response.ok) {
        throw new Error(`Upstream API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
}

app.post('/api/data', async (req, res) => {
    if (!req.body) return res
        .status(400)
        .json({ error: 'Missing request body' });

    const { endpoint, method, body } = req.body;

    if (!endpoint) return res
        .status(400)
        .json({ error: 'Missing endpoint in request body' });

    try {
        const data = await request(endpoint, method, body);
        return res.json(data);
    } catch (error) {
        console.error('BFF Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});

app.listen(BFF_PORT, () => {
    console.log(`BFF Server running on port ${BFF_PORT}`);
    console.log(`Allowed Origin: ${APP_URL}`);
    console.log(`Target API: ${VITE_API_URL}`);
});
