import express, { Request, Response } from "express";
import { data, createLazyLoadData } from './app/datasource';
const bodyParser = require('body-parser');
const cors = require('cors');

// Generate the data.
const app = express();
app.use(cors({
    origin: '*', // Update to the correct frontend origin.
    credentials: true
}));
app.use(bodyParser.json());
// Root route.
app.get('/', (req:Request, res:Response) => {
    res.send('Server is running');
});
// Get all records.
app.get('/orders', function (req: Request, res:Response) {
    res.json({ result: data, count: data.length });
});
const port = xxxx;// Here xxxx denotes the port number.
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});