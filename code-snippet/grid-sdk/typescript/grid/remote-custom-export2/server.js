import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {data,createLazyLoadData} from './dataSource.js';

// Generate the data.
const app = express();
app.use(cors({
    origin: '*', // Update to the correct frontend origin.
    credentials: true
}));
app.use(bodyParser.json());
// Root route.
app.get('/', (req, res) => {
    res.send('Server is running');
});
// Get all records.
app.get('/orders', function (req, res) {
    res.json({ result: data, count: data.length });
});
const port = xxxx;// Here xxxx denotes the port number.
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});