import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { evaluateChecklist } from './ruleEvaluator.js';
import autoprefixer from 'autoprefixer';

const data =autoprefixer

const app = express();
const PORT = 4001;


app.use(cors());


app.get('/api/applications', async (req, res) => {
    try {
        const apiUrl = 'http://qa-gb.api.dynamatix.com:3100/api/applications';
        const response = await axios.get(apiUrl);
        const applications = response.data;
        

      
        const evaluatedApplications = applications.map((app) => ({
            ...app,
            checklist: evaluateChecklist(app),
        }));

        res.json(evaluatedApplications);
    } catch (error) {
        console.error('Error fetching applications:', error.message);
        res.status(500).json({ error: 'Failed to fetch applications' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
