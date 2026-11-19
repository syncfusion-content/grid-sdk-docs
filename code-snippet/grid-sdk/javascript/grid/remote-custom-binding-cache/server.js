import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {data,createLazyLoadData} from './dataSource.js';

// Generate the data
const app = express();
app.use(cors({
    origin: '*', // Update to the correct frontend origin
    credentials: true
}));
app.use(bodyParser.json());
// Root route
app.get('/', (req, res) => {
    res.send('Server is running');
});
// all records
app.get('/orders', function (req, res) {
    res.json({ result: data, count: data.length });
});
// insert
app.post('/orders', function (req, res){
    data.splice(0, 0, req.body.value);
    res.status(200).send('Row Inserted');
});
// get specific records
app.get('/orders/:OrderID', (req, res) => {
  const orderID = parseInt(req.params.OrderID, 10);
  const order = data.find((d) => d.OrderID === orderID);
  if (order) {
      res.json(order);
  } else {
      res.status(404).send('Order not found');
  }
});
// Remove
app.delete('/orders/:OrderID', function (req, res) {
    const orderID = parseInt(req.params.OrderID, 10);
    const index = data.findIndex((x) => x.OrderID === orderID);
    if (index !== -1) {
        data.splice(index, 1);
        res.status(200).send('Row Deleted');
    } else {
        res.status(404).send('Order not found');
    }
});
// Update
app.put('/orders/:OrderID', function (req, res) {
    const orderID = parseInt(req.params.OrderID, 10);
    const index = data.findIndex((x) => x.OrderID === orderID);
    if (index !== -1) {
        // Assuming req.body.value contains the updated record with the same OrderID
        data[index] = req.body.value;
        res.status(200).send('Row Updated');
    } else {
        res.status(404).send('Order not found');
    }
});
const port = xxxx;// Here xxxx denotes the port number.
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});