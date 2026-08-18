---
layout: post
title: Remote data in TypeScript Grid control | Syncfusion
description: Learn here all about Remote data in Syncfusion TypeScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Remote data 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Remote data in TypeScript Grid control

In TypeScript Grid component, binding remote data is a fundamental aspect that enhances the efficiency of data interaction. This process involves assigning the service data, represented as an instance of `DataManager`, to the [dataSource](../../api/grid#datasource) property of the TypeScript Grid component. By doing so, you enable seamless interaction with a remote data source, and this is achieved by specifying the endpoint URL where the data is hosted.

Additionally, leverage the power for data retrieval and operations, enhancing event handling, asynchronous programming, and concurrent value management in TypeScript applications.

## Custom binding

The custom binding feature in the TypeScript Grid enables you to manage your own custom API for handling data processing externally and then binding the resulting data to the Grid. This allows you to implement your own custom data logic to your application's requirements. When using custom binding, the Grid expects the result of the custom logic to be an object with properties `result` and `count`. The `result` property should contain the data to be displayed in the Grid, while the `count` property indicates the total number of records in the dataset for your application. To utilize custom binding, you can handle the  [DataManager](../../data). The DataManager integrates seamlessly with the TypeScript Grid to manage custom data processing and binding. 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component offers a range of powerful features for handling grid actions such as **paging**, **grouping**, **sorting** and **filtering**. These actions trigger the [dataStateChange](../../api/grid#datastatechange) event. The feature for CRUD action such as **Create**, **Read**, **Update**, **Delete** operations. This action trigger the [dataSourceChanged](../../api/grid#datasourcechanged) event. This event provides you with the opportunity to manage and manipulate data according to the individual's interactions. 

**Using the dataStateChange event**

The `dataStateChange` event is triggered whenever you perform actions that modify the state of the grid's data, such as changing pages, applying sorting, or grouping. This event provides detailed information about the action performed and the current state of the grid, including parameters like page number, sorting details, and filtering criteria.

To implement the `dataStateChange` event, follow these steps:

1. **Subscribe to the event:** In your component code, subscribe to the `dataStateChange` event using the appropriate event handler function. This function will be executed whenever you interact with the grid.

2. **Handle data state:** Inside the event handler function, you can access the event arguments to determine the individual actions and intentions. The action property of the event arguments indicates the type of action performed (e.g., paging, sorting, grouping).

> The `dataStateChange` event will not be triggered during the initial rendering.

## Creating an API service

To configure a server with TypeScript Grid, you need to follow the below steps:

{% if page.publishingplatform == "typescript" %}


**Step 1:** Open your terminal and create a new Typescript project using the following command:

```bash
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart
```

**Step 2:** Navigate to your project directory and install the required Syncfusion<sup style="font-size:70%">&reg;</sup> packages using npm:

```bash
cd ej2-quickstart
npm install @syncfusion/ej2-grids --save
npm install @syncfusion/ej2-data --save
```

**Step 3:**  Add the following styles to the ~/src/styles/styles.css file:

```bash
@import '../../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css';  
@import '../../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css';  
@import '../../node_modules/@syncfusion/ej2-calendars/styles/bootstrap5.css';  
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.css';  
@import '../../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css';  
@import '../../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-notifications/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-grids/styles/bootstrap5.css';
```

**Step 4:** Install the necessary packages for setting up an Express server:

```bash
npm install express body-parser cors
```

**Step 5:** Install Concurrently to run both the server and client simultaneously:

```bash
npm install concurrently --save-dev
```

**Step 5:**  Add the following to the tsconfig.json file:

```bash
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,  
    "strict": true,
    "skipLibCheck": true
  }
}
```

**Step 6:** Update the scripts section in your **package.json** to include commands for starting the server and client concurrently:

```bash
  "scripts": {
    "start-server": "node dist/server.js",
    "start-client": "webpack-dev-server --mode development",
    "start": "concurrently \"node dist/server.js\" \"npm run start-client\"",
    "build": "tsc" 
  }
```

**Step 7:**  Create a **dataSource.ts** file to represent the data in the **src/app** folder, like `src/app/dataSource.ts`.

```js
// datasource.ts
export interface Order {
    OrderID: number;
    CustomerID: string;
    CustomerName: string;
    CustomerAddress: string;
    ProductName: string;
    ProductID: number;
    Quantity: string;
}
export const data = createLazyLoadData();

export function createLazyLoadData(): Order[] {
    const lazyLoadData: Order[] = []; // Explicitly type lazyLoadData as Order[]

    let customerid = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
        'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
        'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
        'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
        'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
        'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
        'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
    
        let product = ['Chai', 'Chang', 'Aniseed Syrup', 'Chef Anton\'s Cajun Seasoning', 'Chef Anton\'s Gumbo Mix', 'Grandma\'s Boysenberry Spread',
        'Uncle Bob\'s Organic Dried Pears', 'Northwoods Cranberry Sauce', 'Mishi Kobe Niku', 'Ikura', 'Queso Cabrales', 'Queso Manchego La Pastora', 'Konbu',
        'Tofu', 'Genen Shouyu', 'Pavlova', 'Alice Mutton', 'Carnarvon Tigers', 'Teatime Chocolate Biscuits', 'Sir Rodney\'s Marmalade', 'Sir Rodney\'s Scones',
        'Gustaf\'s Knäckebröd', 'Tunnbröd', 'Guaraná Fantástica', 'NuNuCa Nuß-Nougat-Creme', 'Gumbär Gummibärchen', 'Schoggi Schokolade', 'Rössle Sauerkraut',
        'Thüringer Rostbratwurst', 'Nord-Ost Matjeshering', 'Gorgonzola Telino', 'Mascarpone Fabioli', 'Geitost', 'Sasquatch Ale', 'Steeleye Stout', 'Inlagd Sill',
        'Gravad lax', 'Côte de Blaye', 'Chartreuse verte', 'Boston Crab Meat', 'Jack\'s New England Clam Chowder', 'Singaporean Hokkien Fried Mee', 'Ipoh Coffee',
        'Gula Malacca', 'Rogede sild', 'Spegesild', 'Zaanse koeken', 'Chocolade', 'Maxilaku', 'Valkoinen suklaa', 'Manjimup Dried Apples', 'Filo Mix', 'Perth Pasties',
        'Tourtière', 'Pâté chinois', 'Gnocchi di nonna Alice', 'Ravioli Angelo', 'Escargots de Bourgogne', 'Raclette Courdavault', 'Camembert Pierrot', 'Sirop d\'érable',
        'Tarte au sucre', 'Vegie-spread', 'Wimmers gute Semmelknödel', 'Louisiana Fiery Hot Pepper Sauce', 'Louisiana Hot Spiced Okra', 'Laughing Lumberjack Lager', 'Scottish Longbreads',
        'Gudbrandsdalsost', 'Outback Lager', 'Flotemysost', 'Mozzarella di Giovanni', 'Röd Kaviar', 'Longlife Tofu', 'Rhönbräu Klosterbier', 'Lakkalikööri', 'Original Frankfurter grüne Soße'];
    
        let customername = ['Maria', 'Ana Trujillo', 'Antonio Moreno', 'Thomas Hardy', 'Christina Berglund', 'Hanna Moos', 'Frédérique Citeaux', 'Martín Sommer', 'Laurence Lebihan', 'Elizabeth Lincoln',
        'Victoria Ashworth', 'Patricio Simpson', 'Francisco Chang', 'Yang Wang', 'Pedro Afonso', 'Elizabeth Brown', 'Sven Ottlieb', 'Janine Labrune', 'Ann Devon', 'Roland Mendel', 'Aria Cruz', 'Diego Roel',
        'Martine Rancé', 'Maria Larsson', 'Peter Franken', 'Carine Schmitt', 'Paolo Accorti', 'Lino Rodriguez', 'Eduardo Saavedra', 'José Pedro Freyre', 'André Fonseca', 'Howard Snyder', 'Manuel Pereira',
        'Mario Pontes', 'Carlos Hernández', 'Yoshi Latimer', 'Patricia McKenna', 'Helen Bennett', 'Philip Cramer', 'Daniel Tonini', 'Annette Roulet', 'Yoshi Tannamuri', 'John Steel', 'Renate Messner', 'Jaime Yorres',
        'Carlos González', 'Felipe Izquierdo', 'Fran Wilson', 'Giovanni Rovelli', 'Catherine Dewey', 'Jean Fresnière', 'Alexander Feuer', 'Simon Crowther', 'Yvonne Moncada', 'Rene Phillips', 'Henriette Pfalzheim',
        'Marie Bertrand', 'Guillermo Fernández', 'Georg Pipps', 'Isabel de Castro', 'Bernardo Batista', 'Lúcia Carvalho', 'Horst Kloss', 'Sergio Gutiérrez', 'Paula Wilson', 'Maurizio Moroni', 'Janete Limeira', 'Michael Holz',
        'Alejandra Camino', 'Jonas Bergulfsen', 'Jose Pavarotti', 'Hari Kumar', 'Jytte Petersen', 'Dominique Perrier', 'Art Braunschweiger', 'Pascale Cartrain', 'Liz Nixon', 'Liu Wong', 'Karin Josephs', 'Miguel Angel Paolino',
        'Anabela Domingues', 'Helvetius Nagy', 'Palle Ibsen', 'Mary Saveley', 'Paul Henriot', 'Rita Müller', 'Pirkko Koskitalo', 'Paula Parente', 'Karl Jablonski', 'Matti Karttunen', 'Zbyszek Piestrzeniewicz'];
    
        let customeraddress = ['507 - 20th Ave. E.\r\nApt. 2A', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
        '4726 - 11th Ave. N.E.', '7 Houndstooth Rd.', '59 rue de l\'Abbaye', 'Luisenstr. 48', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
        '7 Houndstooth Rd.', '2817 Milton Dr.', 'Kirchgasse 6', 'Sierras de Granada 9993', 'Mehrheimerstr. 369', 'Rua da Panificadora, 12', '2817 Milton Dr.', 'Mehrheimerstr. 369'];
    
        let quantityperunit= ['10 boxes x 20 bags', '24 - 12 oz bottles', '12 - 550 ml bottles', '48 - 6 oz jars', '36 boxes', '12 - 8 oz jars', '12 - 1 lb pkgs.', '12 - 12 oz jars', '18 - 500 g pkgs.', '12 - 200 ml jars',
        '1 kg pkg.', '10 - 500 g pkgs.', '2 kg box', '40 - 100 g pkgs.', '24 - 250 ml bottles', '32 - 500 g boxes', '20 - 1 kg tins', '16 kg pkg.', '10 boxes x 12 pieces', '30 gift boxes', '24 pkgs. x 4 pieces', '24 - 500 g pkgs.', '12 - 250 g pkgs.',
        '12 - 355 ml cans', '20 - 450 g glasses', '100 - 250 g bags'];
    let OrderID = 10248;

    for (let i = 0; i < 100; i++) {
        lazyLoadData.push({
            'OrderID': OrderID + i,
            'CustomerID': customerid[Math.floor(Math.random() * customerid.length)],
            'CustomerName': customername[Math.floor(Math.random() * customername.length)],
            'CustomerAddress': customeraddress[Math.floor(Math.random() * customeraddress.length)],
            'ProductName': product[Math.floor(Math.random() * product.length)],
            'ProductID': i,
            'Quantity': quantityperunit[Math.floor(Math.random() * quantityperunit.length)]
        });
    }

    return lazyLoadData;
}
```

**Step 8:** Create **server.ts** file to set up a basic Express server:

```js
import express, { Request, Response } from "express";
import { data, createLazyLoadData } from './app/datasource'; // Adjust path as necessary
const bodyParser = require('body-parser');
const cors = require('cors');

// Generate the data
const app = express();
app.use(cors({
    origin: '*', // Update to the correct frontend origin
    credentials: true
}));
app.use(bodyParser.json());
// Root route
app.get('/', (req:Request, res:Response) => {
    res.send('Server is running');
});
// all records
app.get('/orders', function (req: Request, res:Response) {
    res.json({ result: data, count: data.length });
});
const port = xxxx;// Here xxxx denotes the port number.
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```

**Step 9:** Create an **orderService.ts** file inside the **src** folder (e.g., `src/orderService.ts`) to handle CRUD operations and grid actions using Syncfusion's<sup style="font-size:70%">&reg;</sup> DataManager:

```ts
import { DataManager, Query } from "@syncfusion/ej2-data";

export class OrderService {
}
export {};
const baseUrl = "http://localhost:xxxx/orders"; // Here xxxx denotes the port number.
let gridData:DataManager; 
// Apply paging
const applyPaging = (query:Query, state: { take: number; skip: number; })=> {
  // Check if both 'take' and 'skip' values are available
  if (state.take && state.skip) {
    // Calculate pageSkip and pageTake values to get pageIndex and pageSize
    const pageSkip = state.skip / state.take + 1;
    const pageTake = state.take;
    query.page(pageSkip, pageTake);
  }
  // If if only 'take' is available and 'skip' is 0, apply paging for the first page.
  else if (state.skip === 0 && state.take) {
    query.page(1, state.take);
  }
}
export function getOrders(state:any, action:any) {
  const query = new Query();
  // page
  applyPaging(query, state)
  query.isCountRequired = true

  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {      
      // Create a DataManager instance with your fetched data
      gridData = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = gridData.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: (result as any).count // Total record count based on fetched data length
      };
    });
}
```

**Step 10:**  In your **app.ts**, import and use the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component. Use the **orderService** to fetch and manipulate data.

```ts
import { DataSourceChangedEventArgs, DataStateChangeEventArgs, Grid } from '@syncfusion/ej2-grids';
import { getOrders, addRecord, updateRecord, deleteRecord } from '../orderService';
import { Page} from '@syncfusion/ej2-grids';

Grid.Inject(Page);

interface CustomDataStateChangeEventArgs extends DataStateChangeEventArgs {
    query?: Query; 
    skip?:number;
    take?:number;
}
const state:CustomDataStateChangeEventArgs= { skip: 0, take: 12,query:query};

let grid: Grid = new Grid({
    allowPaging: true,
    created:created,
    dataStateChange: dataStateChange,
    columns: [
        { field: 'OrderID', isPrimaryKey:true,headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerName', width: 140, headerText: 'Customer Name', type: 'string' },
        { field: 'ProductID', headerText: 'Product ID' ,width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 140}
    ],
    height: 315
});

grid.appendTo('#Grid');

// triggers at initial render of the Grid
function created() {
  // initial state needs to be sent manually
  dataStateChange(state);
}
function  dataStateChange (state:DataStateChangeEventArgs) {
  const query = grid.getDataModule().generateQuery();
  getOrders(state, query).then((result) => {
    grid.dataSource = result.result; // Assign the result to the data property
  });
}
```

**Step 11:** Finally, you can start both the server and client concurrently using the start script.

```bash
npm run build
npm start
```

> Replace https://localhost:xxxx/orders with the actual URL of your API endpoint that provides the data in a consumable format (e.g., JSON).

{% elsif page.publishingplatform == "javascript" %}


**Step 1:**  Create a simple javascript Grid by following the [Getting Started](https://ej2.syncfusion.com/javascript/documentation/grid/getting-started) documentation link.

**Step 2:**  Create an **index.html** file under the root folder and add the necessary HTML structure along with CSS and JavaScript links to include Syncfusion<sup style="font-size:70%">&reg;</sup> Grid dependencies.

```bash
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <title>Essential JS 2 Grid</title>

          <link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-base/styles/bootstrap5.css" rel="stylesheet">
          <link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-grids/styles/bootstrap5.css" rel="stylesheet">
          <link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-buttons/styles/bootstrap5.css" rel="stylesheet">
          <link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-popups/styles/bootstrap5.css" rel="stylesheet">
          <link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-navigations/styles/bootstrap5.css" rel="stylesheet">
          <link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-dropdowns/styles/bootstrap5.css" rel="stylesheet">
          <link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-lists/styles/bootstrap5.css" rel="stylesheet">
          <link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-inputs/styles/bootstrap5.css" rel="stylesheet">
          <link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-calendars/styles/bootstrap5.css" rel="stylesheet">
          <link href="https://cdn.syncfusion.com/ej2/28.1.33/ej2-splitbuttons/styles/bootstrap5.css" rel="stylesheet">
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
          <script src="https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2.min.js" type="text/javascript"></script>
        </head>
       <body>
         <br/><br/><br/><br/>
        <div id="Grid"></div>
        <script type="module" src="index.js" type="text/javascript"></script>
       </body>
  </html>
```

**Step4**: Create a package.json file by running the following command:

```bash
npm init -y
```

**Step 4:** Install the necessary packages for setting up an Express server and Live Server:

```bash
npm install express body-parser cors live-server
```

**Step 5:** Install Concurrently to run both the server and client simultaneously:

```bash
npm install concurrently --save-dev
```

**Step 6:** Update the scripts section in your **package.json** to include commands for starting the server and client concurrently:

```bash
  "type": "module",
  "scripts": {
    "start": "concurrently \"npm run start-server\" \"npm run start-client\"",
    "start-server": "node server.js",
    "start-client": "live-server"
  }
```

**Step 7:**  Create a **dataSource.js** file to represent the data in the root folder.

```js
export const data = createLazyLoadData();
export function createLazyLoadData() {
    const lazyLoadData = []; // Explicitly type lazyLoadData as Order[]

    let customerid = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
        'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
        'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
        'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
        'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
        'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
        'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
    
        let product = ['Chai', 'Chang', 'Aniseed Syrup', 'Chef Anton\'s Cajun Seasoning', 'Chef Anton\'s Gumbo Mix', 'Grandma\'s Boysenberry Spread',
        'Uncle Bob\'s Organic Dried Pears', 'Northwoods Cranberry Sauce', 'Mishi Kobe Niku', 'Ikura', 'Queso Cabrales', 'Queso Manchego La Pastora', 'Konbu',
        'Tofu', 'Genen Shouyu', 'Pavlova', 'Alice Mutton', 'Carnarvon Tigers', 'Teatime Chocolate Biscuits', 'Sir Rodney\'s Marmalade', 'Sir Rodney\'s Scones',
        'Gustaf\'s Knäckebröd', 'Tunnbröd', 'Guaraná Fantástica', 'NuNuCa Nuß-Nougat-Creme', 'Gumbär Gummibärchen', 'Schoggi Schokolade', 'Rössle Sauerkraut',
        'Thüringer Rostbratwurst', 'Nord-Ost Matjeshering', 'Gorgonzola Telino', 'Mascarpone Fabioli', 'Geitost', 'Sasquatch Ale', 'Steeleye Stout', 'Inlagd Sill',
        'Gravad lax', 'Côte de Blaye', 'Chartreuse verte', 'Boston Crab Meat', 'Jack\'s New England Clam Chowder', 'Singaporean Hokkien Fried Mee', 'Ipoh Coffee',
        'Gula Malacca', 'Rogede sild', 'Spegesild', 'Zaanse koeken', 'Chocolade', 'Maxilaku', 'Valkoinen suklaa', 'Manjimup Dried Apples', 'Filo Mix', 'Perth Pasties',
        'Tourtière', 'Pâté chinois', 'Gnocchi di nonna Alice', 'Ravioli Angelo', 'Escargots de Bourgogne', 'Raclette Courdavault', 'Camembert Pierrot', 'Sirop d\'érable',
        'Tarte au sucre', 'Vegie-spread', 'Wimmers gute Semmelknödel', 'Louisiana Fiery Hot Pepper Sauce', 'Louisiana Hot Spiced Okra', 'Laughing Lumberjack Lager', 'Scottish Longbreads',
        'Gudbrandsdalsost', 'Outback Lager', 'Flotemysost', 'Mozzarella di Giovanni', 'Röd Kaviar', 'Longlife Tofu', 'Rhönbräu Klosterbier', 'Lakkalikööri', 'Original Frankfurter grüne Soße'];
    
        let customername = ['Maria', 'Ana Trujillo', 'Antonio Moreno', 'Thomas Hardy', 'Christina Berglund', 'Hanna Moos', 'Frédérique Citeaux', 'Martín Sommer', 'Laurence Lebihan', 'Elizabeth Lincoln',
        'Victoria Ashworth', 'Patricio Simpson', 'Francisco Chang', 'Yang Wang', 'Pedro Afonso', 'Elizabeth Brown', 'Sven Ottlieb', 'Janine Labrune', 'Ann Devon', 'Roland Mendel', 'Aria Cruz', 'Diego Roel',
        'Martine Rancé', 'Maria Larsson', 'Peter Franken', 'Carine Schmitt', 'Paolo Accorti', 'Lino Rodriguez', 'Eduardo Saavedra', 'José Pedro Freyre', 'André Fonseca', 'Howard Snyder', 'Manuel Pereira',
        'Mario Pontes', 'Carlos Hernández', 'Yoshi Latimer', 'Patricia McKenna', 'Helen Bennett', 'Philip Cramer', 'Daniel Tonini', 'Annette Roulet', 'Yoshi Tannamuri', 'John Steel', 'Renate Messner', 'Jaime Yorres',
        'Carlos González', 'Felipe Izquierdo', 'Fran Wilson', 'Giovanni Rovelli', 'Catherine Dewey', 'Jean Fresnière', 'Alexander Feuer', 'Simon Crowther', 'Yvonne Moncada', 'Rene Phillips', 'Henriette Pfalzheim',
        'Marie Bertrand', 'Guillermo Fernández', 'Georg Pipps', 'Isabel de Castro', 'Bernardo Batista', 'Lúcia Carvalho', 'Horst Kloss', 'Sergio Gutiérrez', 'Paula Wilson', 'Maurizio Moroni', 'Janete Limeira', 'Michael Holz',
        'Alejandra Camino', 'Jonas Bergulfsen', 'Jose Pavarotti', 'Hari Kumar', 'Jytte Petersen', 'Dominique Perrier', 'Art Braunschweiger', 'Pascale Cartrain', 'Liz Nixon', 'Liu Wong', 'Karin Josephs', 'Miguel Angel Paolino',
        'Anabela Domingues', 'Helvetius Nagy', 'Palle Ibsen', 'Mary Saveley', 'Paul Henriot', 'Rita Müller', 'Pirkko Koskitalo', 'Paula Parente', 'Karl Jablonski', 'Matti Karttunen', 'Zbyszek Piestrzeniewicz'];
    
        let customeraddress = ['507 - 20th Ave. E.\r\nApt. 2A', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
        '4726 - 11th Ave. N.E.', '7 Houndstooth Rd.', '59 rue de l\'Abbaye', 'Luisenstr. 48', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
        '7 Houndstooth Rd.', '2817 Milton Dr.', 'Kirchgasse 6', 'Sierras de Granada 9993', 'Mehrheimerstr. 369', 'Rua da Panificadora, 12', '2817 Milton Dr.', 'Mehrheimerstr. 369'];
    
        let quantityperunit= ['10 boxes x 20 bags', '24 - 12 oz bottles', '12 - 550 ml bottles', '48 - 6 oz jars', '36 boxes', '12 - 8 oz jars', '12 - 1 lb pkgs.', '12 - 12 oz jars', '18 - 500 g pkgs.', '12 - 200 ml jars',
        '1 kg pkg.', '10 - 500 g pkgs.', '2 kg box', '40 - 100 g pkgs.', '24 - 250 ml bottles', '32 - 500 g boxes', '20 - 1 kg tins', '16 kg pkg.', '10 boxes x 12 pieces', '30 gift boxes', '24 pkgs. x 4 pieces', '24 - 500 g pkgs.', '12 - 250 g pkgs.',
        '12 - 355 ml cans', '20 - 450 g glasses', '100 - 250 g bags'];
    let OrderID = 10248;

    for (let i = 0; i < 100; i++) {
        lazyLoadData.push({
            'OrderID': OrderID + i,
            'CustomerID': customerid[Math.floor(Math.random() * customerid.length)],
            'CustomerName': customername[Math.floor(Math.random() * customername.length)],
            'CustomerAddress': customeraddress[Math.floor(Math.random() * customeraddress.length)],
            'ProductName': product[Math.floor(Math.random() * product.length)],
            'ProductID': i,
            'Quantity': quantityperunit[Math.floor(Math.random() * quantityperunit.length)]
        });
    }

    return lazyLoadData;
}
```

**Step 8:** Create **server.js** file to set up a basic Express server:

```js
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
const port = xxxx;// Here xxxx denotes the port number.
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

```

**Step 9:** Create an **orderService.js** file to handle CRUD operations and grid actions using Syncfusion's<sup style="font-size:70%">&reg;</sup> DataManager:

```ts

export class OrderService {
}
export {};
const baseUrl = "http://localhost:xxxx/orders"; // Here xxxx denotes the port number.
let gridData; 
// Apply paging
const applyPaging = (query, state)=> {
  // Check if both 'take' and 'skip' values are available
  if (state.take && state.skip) {
    // Calculate pageSkip and pageTake values to get pageIndex and pageSize
    const pageSkip = state.skip / state.take + 1;
    const pageTake = state.take;
    query.page(pageSkip, pageTake);
  }
  // If if only 'take' is available and 'skip' is 0, apply paging for the first page.
  else if (state.skip === 0 && state.take) {
    query.page(1, state.take);
  }
}
export function getOrders(state, action) {
  const query = new ej.data.Query();
  // page
  applyPaging(query, state)
  query.isCountRequired = true

  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {      
      // Create a DataManager instance with your fetched data
      gridData = new ej.data.DataManager(data.result);

      // Execute local data operations using the provided query
      const result = gridData.executeLocal(query);

      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: result.count // Total record count based on fetched data length
      };
    });
}
```

**Step 10:**  In your **index.js**, import and use the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component. Use the **orderService** to fetch and manipulate data.

```ts
import { getOrders, addRecord, updateRecord, deleteRecord } from './orderService.js';

ej.grids.Grid.Inject(ej.grids.Group,ej.grids.Filter,ej.grids.Sort,ej.grids.Toolbar,ej.grids.Edit,ej.grids.Search, ej.grids.LazyLoadGroup, ej.grids.Filter);

const state = { skip: 0, take: 12};

let grid= new ej.grids.Grid({
    allowPaging: true,
    created:created,
    dataStateChange: dataStateChange,
    columns: [
        { field: 'OrderID', isPrimaryKey:true,headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerName', width: 140, headerText: 'Customer Name', type: 'string' },
        { field: 'ProductID', headerText: 'Product ID' ,width: 120 },
        { field: 'ProductName', headerText: 'Product Name', width: 140}
    ],
    height: 315
});

grid.appendTo('#Grid');

// triggers at initial render of the Grid
function created() {
  // initial state needs to be sent manually
  dataStateChange(state);
}
function  dataStateChange (state) {
    const query = grid.getDataModule().generateQuery();
    getOrders(state, query).then((result) => {
        grid.dataSource = result.result; // Assign the result to the data property
    });
}
```

**Step 11:** Finally, you can start both the server and client concurrently using the start script.

```bash
npm start
```

> Replace https://localhost:xxxx/orders with the actual URL of your API endpoint that provides the data in a consumable format (e.g., JSON).


{% endif %}


## Handling filtering operation

When filtering operation is performed in the grid, the `dataStateChange` event is triggered, providing access to the following referenced arguments within the event.

![FilterBar](../images/databining/remote-filter.png)

You can change the new grid data state of filter action as follows:

{% if page.publishingplatform == "typescript" %}
```typescript
// Apply filtering
const applyFiltering = (query:Query, filter:Filter)=> {
  // Check if filter columns are specified
  if (filter.columns && filter.columns.length) {
      // Apply filtering for each specified column
    for (let i = 0; i < filter.columns.length; i++) {
      const field = filter.columns[i].field;
      const operator = filter.columns[i].operator;
      const value = filter.columns[i].value;
      query.where(field, operator, value);
    }
  }
  else {
    // Apply filtering based on direct filter conditions
    for (let i = 0; i < filter.length; i++) {
      const { fn, e } = filter[i];
      if (fn === 'onWhere') {
        query.where(e as string);
      }
    }
  }
}
/** GET all data from the server */
export function getOrders(state:any, action:any) {
  const query = new Query();
  // filter
  if (state.where) {
    applyFiltering(query, action.queries);
  }
  query.isCountRequired = true

  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: (result as any).count // Total record count based on fetched data length
      };
    });
}
```
{% elsif page.publishingplatform == "javascript" %}

```typescript

// Apply filtering
const applyFiltering = (query, filter)=> {
// Check if filter columns are specified
  if (filter.columns && filter.columns.length) {
    // Apply filtering for each specified column
    for (let i = 0; i < filter.columns.length; i++) {
      const field = filter.columns[i].field;
      const operator = filter.columns[i].operator;
      const value = filter.columns[i].value;
      query.where(field, operator, value);
    }
  }
  else {
    // Apply filtering based on direct filter conditions
    for (let i = 0; i < filter.length; i++) {
      const { fn, e } = filter[i];
      if (fn === 'onWhere') {
        query.where(e as string);
      }
    }
  }
}
/** GET all data from the server */
export function getOrders(state, action) {
  const query = new Query();
  // filter
  if (state.where) {
    applyFiltering(query, action.queries);
  }
  query.isCountRequired = true

  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: result.count // Total record count based on fetched data length
      };
    });
}
```
{% endif %}

![Filtering Multiple Values](../images/databining/remote-multiple-filter.png)

When filtering multiple values, you can get the predicates as arguments in the `dataStateChange` event. You can create your predicate execution based on the predicates values.

## Handling searching operation

When performing a search operation in the grid, the `dataStateChange` event is triggered, allowing access to the following referenced arguments within the event

![Searching](../images/databining/remote-serach.png)

You can change the new grid data state of search action as follows:

{% if page.publishingplatform == "typescript" %}

```typescript
// Apply searching 
const applySearching = (query:Query, search:Search[])=> {
  // Check if a search operation is requested
  if (search && search.length > 0) {
    // Extract the search key and fields from the search array
    const { fields, key } = search[0];
    // perform search operation using the field and key on the query
    query.search(key, fields);
  }
}
/** GET all data from the server */
export function getOrders(state:any, action:any) {
  const query = new Query();
  // search
  if (state.search) {
    applySearching(query, state.search);
  };
  query.isCountRequired = true
  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: (result as any).count // Total record count based on fetched data length
      };
    });
  }
```
{% elsif page.publishingplatform == "javascript" %}

```typescript
// Apply searching 
const applySearching = (query, search)=> {
  // Check if a search operation is requested
  if (search && search.length > 0) {
    // Extract the search key and fields from the search array
    const { fields, key } = search[0];
    // perform search operation using the field and key on the query
    query.search(key, fields);
  }
}
/** GET all data from the server */
export function getOrders(state, action) {
  const query = new Query();
  // search
  if (state.search) {
    applySearching(query, state.search);
  };
  query.isCountRequired = true
  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: result.count // Total record count based on fetched data length
      };
    });
  }
```
{% endif %}


## Handling sorting operation

When sorting operation is performed in the grid, the dataStateChange event is triggered, and within this event, you can access the following referenced arguments.

![Sorting](../images/databining/remote-sort.png)

When performing multi-column sorting, you can get the below referred arguments in the `dataStateChange` event.

![Multi Sorting](../images/databining/remote-multiple-sort.png)

You can change the new grid data state of sort action as follows:

{% if page.publishingplatform == "typescript" %}

```typescript
// Apply sorting
const applySorting = (query:Query, sorted:sortInfo[]) =>{
  // Check if sorting data is available
  if (sorted && sorted.length > 0) {
    // Iterate through each sorting info
    sorted.forEach(sort => {
      // Get the sort field name either by name or field
      const sortField = sort.name || sort.field;
      // Perform sort operation using the query based on the field name and direction
      query.sortBy(sortField, sort.direction);
    });
  }
}
/** GET all data from the server */
export function getOrders(state:any, action:any) {
  const query = new Query();
  // sort
  if (state.sorted) {
    state.sorted.length ? applySorting(query, state.sorted) :
      // initial sorting
      state.sorted.columns.length ? applySorting(query, state.sorted.columns) : null
  }
  query.isCountRequired = true
  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: (result as any).count // Total record count based on fetched data length
      };
    });
}
```
{% elsif page.publishingplatform == "javascript" %}

```typescript
// Apply sorting
const applySorting = (query, sorted) =>{
  // Check if sorting data is available
  if (sorted && sorted.length > 0) {
    // Iterate through each sorting info
    sorted.forEach(sort => {
      // Get the sort field name either by name or field
      const sortField = sort.name || sort.field;
      // Perform sort operation using the query based on the field name and direction
      query.sortBy(sortField, sort.direction);
    });
  }
}
/** GET all data from the server */
export function getOrders(state, action) {
  const query = new Query();
  // sort
  if (state.sorted) {
    state.sorted.length ? applySorting(query, state.sorted) :
      // initial sorting
      state.sorted.columns.length ? applySorting(query, state.sorted.columns) : null
  }
  query.isCountRequired = true
  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: (result as any).count // Total record count based on fetched data length
      };
    });
}
```
{% endif %}
## Handling paging operation

When paging operation is performed in the grid, the `dataStateChange` event is triggered, and within this event, you can access the following referenced arguments.

![Paging](../images/databining/remote-paging.png)

You can change the new grid data state of page action as follows:

{% if page.publishingplatform == "typescript" %}

```typescript
// Apply paging
const applyPaging = (query:Query, state: { take: number; skip: number; })=> {
  // Check if both 'take' and 'skip' values are available
  if (state.take && state.skip) {
    // Calculate pageSkip and pageTake values to get pageIndex and pageSize
    const pageSkip = state.skip / state.take + 1;
    const pageTake = state.take;
    query.page(pageSkip, pageTake);
  }
  // If if only 'take' is available and 'skip' is 0, apply paging for the first page.
  else if (state.skip === 0 && state.take) {
    query.page(1, state.take);
  }
}
/** GET all data from the server */
export function getOrders(state:any, action:any) {
  const query = new Query();
  // page
  applyPaging(query, state)
  query.isCountRequired = true
  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: (result as any).count // Total record count based on fetched data length
      };
    });
}
```
{% elsif page.publishingplatform == "javascript" %}

```typescript
// Apply paging
const applyPaging = (query, state)=> {
  // Check if both 'take' and 'skip' values are available
  if (state.take && state.skip) {
    // Calculate pageSkip and pageTake values to get pageIndex and pageSize
    const pageSkip = state.skip / state.take + 1;
    const pageTake = state.take;
    query.page(pageSkip, pageTake);
  }
  // If if only 'take' is available and 'skip' is 0, apply paging for the first page.
  else if (state.skip === 0 && state.take) {
    query.page(1, state.take);
  }
}
/** GET all data from the server */
export function getOrders(state, action) {
  const query = new Query();
  // page
  applyPaging(query, state)
  query.isCountRequired = true
  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: result.count // Total record count based on fetched data length
      };
    });
}
```
{% endif %}
## Handling grouping operation

When grouping operation is performed in the grid, the `dataStateChange` event is triggered, providing access to the following referenced arguments within the event.

![Grouping](../images/databining/remote-group.png)

You can change the new grid data state of group action as follows:

{% if page.publishingplatform == "typescript" %}

```typescript
// Apply grouping
const applyGrouping = (query:Query, group:string[]) =>{
  // Check if sorting data is available
  if (group.length > 0) {
    // Iterate through each group info
    group.forEach((column: string) => {
      // perform group operation using the column on the query
      query.group(column);
    });
  }
}
/** GET all data from the server */
export function getOrders(state:any, action:any) {
  const query = new Query();
  // grouping
  if (state.group) {
    state.group.length ? applyGrouping(query, state.group) :
      // initial grouping
      state.group.columns.length ? applyGrouping(query, state.group.columns) : null
  }
  query.isCountRequired = true
  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count:(result as any).count // Total record count based on fetched data length
      };
    });
}
```
{% elsif page.publishingplatform == "javascript" %}
```typescript

// Apply grouping
const applyGrouping = (query:Query, group) =>{
  // Check if sorting data is available
  if (group.length > 0) {
    // Iterate through each group info
    group.forEach((column) => {
      // perform group operation using the column on the query
      query.group(column);
    });
  }
}
/** GET all data from the server */
export function getOrders(state, action) {
  const query = new Query();
  // grouping
  if (state.group) {
    state.group.length ? applyGrouping(query, state.group) :
      // initial grouping
      state.group.columns.length ? applyGrouping(query, state.group.columns) : null
  }
  query.isCountRequired = true

  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count:result.count // Total record count based on fetched data length
      };
    });
}
```
{% endif %}
> * In order to utilize group actions, it is necessary to manage the sorting query within your service.

**Lazy load grouping**

In TypeScript, lazy loading refers to the technique of loading data dynamically when they are needed, instead of loading everything upfront. Lazy load grouping allows you to load and display grouped data efficiently by fetching only the required data on demand.  

To enable this feature, you need to set the [groupSettings.enableLazyLoading](../../api/grid/groupSettings#enableLazyLoading) property to **true**. Also, you need to manage the state based on the initial grid action as follows.
{% if page.publishingplatform == "typescript" %}
```typescript
const groupSettings:object = { enableLazyLoading: true, columns: ['ProductName'], showGroupedColumn: true, };
const state:DataStateChangeEventArgs = { skip:0, take: 12, group: groupSettings as string[]};
```
{% elsif page.publishingplatform == "javascript" %}
```typescript
const groupSettings = { enableLazyLoading: true, columns: ['ProductName'], showGroupedColumn: true, };
const state = { skip:0, take: 12, group: groupSettings};
```
{% endif %}

Based on the initial state, you can get the arguments as shown below

![Lazy load group](../images/databining/remote-lazyload.png)

You can change the grid state as follows:
{% if page.publishingplatform == "typescript" %}

```typescript
// Apply grouping
const applyGrouping = (query:Query, group:any) =>{
  // Check if sorting data is available
  if (group.length > 0) {
    // Iterate through each group info
    group.forEach((column: string) => {
      // perform group operation using the column on the query
      query.group(column);
    });
  }
}
// Apply lazy load grouping
const applyLazyLoad = (query:Query, payload:any) => {
  // Configure lazy loading for the main data
  if (payload.isLazyLoad) {
    query.lazyLoad.push({ key: 'isLazyLoad', value: true });
    // If on-demand group loading is enabled, configure lazy loading for grouped data
    if (payload.onDemandGroupInfo) {
      query.lazyLoad.push({
          key: 'onDemandGroupInfo',
          value: payload.action.lazyLoadQuery,
      });
    }
  }
}
/** GET all data from the server */
export function getOrders(state:any, action:any) {
  const query = new Query();
  // grouping
  if (state.group) {
    state.group.length ? applyGrouping(query, state.group) :
      // initial grouping
      state.group.columns.length ? applyGrouping(query, state.group.columns) : null
  }
  // lazy load grouping
  if (state.group) {
    if (state.isLazyLoad) {
      applyLazyLoad(query, state)
    }
    if (state.group.enableLazyLoading) {
      query.lazyLoad.push({ key: 'isLazyLoad', value: true })
    }
  }
  query.isCountRequired = true
  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: (result as any).count // Total record count based on fetched data length
      };
    });
}
```
{% elsif page.publishingplatform == "javascript" %}

```typescript
// Apply grouping
const applyGrouping = (query, group) =>{
  // Check if sorting data is available
  if (group.length > 0) {
    // Iterate through each group info
    group.forEach((column: string) => {
      // perform group operation using the column on the query
      query.group(column);
    });
  }
}
// Apply lazy load grouping
const applyLazyLoad = (query, payload) => {
  // Configure lazy loading for the main data
  if (payload.isLazyLoad) {
    query.lazyLoad.push({ key: 'isLazyLoad', value: true });
    // If on-demand group loading is enabled, configure lazy loading for grouped data
    if (payload.onDemandGroupInfo) {
      query.lazyLoad.push({
          key: 'onDemandGroupInfo',
          value: payload.action.lazyLoadQuery,
      });
    }
  }
}
/** GET all data from the server */
export function getOrders(state, action) {
  const query = new Query();
  // grouping
  if (state.group) {
    state.group.length ? applyGrouping(query, state.group) :
      // initial grouping
      state.group.columns.length ? applyGrouping(query, state.group.columns) : null
  }
  // lazy load grouping
  if (state.group) {
    if (state.isLazyLoad) {
      applyLazyLoad(query, state)
    }
    if (state.group.enableLazyLoading) {
      query.lazyLoad.push({ key: 'isLazyLoad', value: true })
    }
  }
  query.isCountRequired = true
  // Request the data from server using fetch
  return fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // Create a DataManager instance with your fetched data
      const dataManager = new DataManager(data.result);
      // Execute local data operations using the provided query
      const result = dataManager.executeLocal(query);
      // Return the result along with the count of total records
      return {
        result: result, // Result of the data
        count: (result as any).count // Total record count based on fetched data length
      };
    });
}
```
{% endif %}

> Further information can be accessed in the respective documentation for [lazy load grouping](../grouping/lazy-load-grouping).

## Handling CRUD operations

The Grid component provides powerful options for dynamically inserting, deleting, and updating records, enabling you to modify data directly within the grid. This feature is useful when you want to perform CRUD (Create, Read, Update, Delete) operations seamlessly.

Integrating CRUD Operations

To implement CRUD operations using Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, follow these steps:

1. **Configure grid settings:** Set up the necessary grid settings, such as editing, adding, and deleting records. Define the toolbar options to facilitate your interactions.

2. **Handle data state changes:** Utilize the [dataStateChange](../../api/grid#datastatechange) event to respond to changes in the grid’s data state. This event is triggered whenever you interact with the grid, such as paging or sorting.

3. **Execute CRUD operations:** Within the event handler for [dataSourceChanged](../../api/grid#datasourcechanged), implement logic to handle various CRUD actions based on the action or requestType property of the event arguments.

4. **Call endEdit method:** After performing CRUD operations (adding, editing, or deleting), call the endEdit method to signal the completion of the operation and update the grid accordingly.

**Insert operation**

When an insert operation is performed in the grid, the `dataSourceChanged` event will be triggered, allowing access to the following referenced arguments within the event.

![Insert record](../images/databining/remote-add.png)
{% if page.publishingplatform == "typescript" %}

```ts
// add
export function addRecord(order:order: Object | Object[] | undefined) {
  return fetch(baseUrl , {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      value: order
    })
  })
    .then((data) => {
      return data;
    });
}
```
{% elsif page.publishingplatform == "javascript" %}
```ts
// add
export function addRecord(order) {
  return fetch(baseUrl , {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      value: order
    })
  })
    .then((data) => {
      return data;
    });
}
```
{% endif %}

**Edit operation**

When an edit operation is performed in the grid, the `dataSourceChanged` event will be triggered, providing access to the following referenced arguments within the event.

![Edit record](../images/databining/remote-update.png)

{% if page.publishingplatform == "typescript" %}

```ts
// update
export function updateRecord(order:any) {
  return fetch(`${baseUrl}/${order.OrderID}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      value: order
    })
  })
    .then(data => {
      return data;
    });
}
```
{% elsif page.publishingplatform == "javascript" %}
```ts
// update
export function updateRecord(order) {
  return fetch(`${baseUrl}/${order.OrderID}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      value: order
    })
  })
    .then(data => {
      return data;
    });
}
```
{% endif %}
**Delete operation**

When a delete operation is performed in the grid, the `dataSourceChanged` event will be triggered, allowing access to the following referenced arguments within the event.

![Delete record](../images/databining/remote-delete.png)

{% if page.publishingplatform == "typescript" %}

```ts
// delete
export function deleteRecord(primaryKey:any) {
  return fetch(`${baseUrl}/${primaryKey}`, {
    method: "delete",
    body: JSON.stringify({
      value: primaryKey
    })
  })
  .then(data => {
    return data;
  });
}
```
{% elsif page.publishingplatform == "javascript" %}

```ts
// delete
export function deleteRecord(primaryKey) {
  return fetch(`${baseUrl}/${primaryKey}`, {
    method: "delete",
    body: JSON.stringify({
      value: primaryKey
    })
  })
  .then(data => {
    return data;
  });
}
```
{% endif %}

The following example demonstrates how to bind custom data to handle grid actions and CRUD operation.

{% if page.publishingplatform == "typescript" %}
  {% tabs %}
    {% highlight ts tabtitle="app.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding/app.ts %}
    {% endhighlight %}
    {% highlight html tabtitle="index.html" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding/index.html %}
    {% endhighlight %}
    {% highlight css tabtitle="styles.css" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding/styles.css %}
    {% endhighlight %}
    {% highlight ts tabtitle="server.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding/server.ts %}
    {% endhighlight %}
    {% highlight ts tabtitle="orderService.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding/orderService.ts %}
    {% endhighlight %}
    {% highlight ts tabtitle="datasource.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding/datasource.ts %}
    {% endhighlight %}
  {% endtabs %}
{% elsif page.publishingplatform == "javascript" %}
  {% tabs %}
    {% highlight js tabtitle="index.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding2/index.js %}
    {% endhighlight %}
    {% highlight html tabtitle="index.html" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding2/index.html %}
    {% endhighlight %}
    {% highlight js tabtitle="server.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding2/server.js %}
    {% endhighlight %}
    {% highlight js tabtitle="orderService.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding2/orderService.js %}
    {% endhighlight %}
    {% highlight js tabtitle="datasource.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-binding2/datasource.js %}
    {% endhighlight %}
  {% endtabs %}
{% endif %}

The following screenshot represents the grid action with custom binding

![Grid with Custom Binding](../images/databining/remote-custom-binding.gif)

> * While working with grid edit operation, defining the [isPrimaryKey](../../api/grid#isprimarykey) property of column is a mandatory step. In case the primary key column is not defined, the edit or delete action will take place on the first row of the grid.
> * Need to maintain the same instance for all grid actions.

## Export all records in client side

Export all records is especially beneficial when dealing with large datasets that need to be exported for offline analysis or sharing.

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component exports only the records on the current page. However, the TypeScript Grid component allows you to export all records, including those from multiple pages, by configuring the [pdfExportProperties](../../api/grid/pdfExportProperties) and [excelExportProperties](../../api/grid/excelExportProperties).

To export all records, including those from multiple pages, configure the [pdfExportProperties.dataSource](../../api/grid/pdfExportProperties#datasource) for PDF exporting and [excelExportProperties.dataSource](../../api/grid/excelExportProperties#datasource) for Excel exporting within the [toolbarClick](../../api/grid#toolbarclick) event handler. Inside this event, set the `dataSource` property of `pdfExportProperties` and `excelExportProperties` for PDF and Excel exporting to include all records.

**Excel Exporting**

To export the complete Grid data to Excel document, utilize the `excelExportProperties.dataSource` when initiating the Excel export. Use the following code snippet to export all records within the Grid:

{% if page.publishingplatform == "typescript" %}
```typescript
  getOrders(state).then((event) => {
    let excelExportProperties = {
      dataSource: (event.result as any).result
    };
    grid.excelExport(excelExportProperties);// Need to call excelExport method of Grid when get the entire data.
  });
```
{% elsif page.publishingplatform == "javascript" %}
```typescript
  getOrders(state).then((event) => {
    let excelExportProperties = {
      dataSource: event.result.result
    };
    grid.excelExport(excelExportProperties);
  });
```
{% endif %}

**PDF Exporting**

To export the complete Grid data to PDF document, utilize the `pdfExportProperties.dataSource` when initiating the PDF export. Use the following code snippet to export all records within the Grid:

{% if page.publishingplatform == "typescript" %}

```typescript
  getOrders(state).then((event) => {
    let pdfExportProperties = {
      dataSource: (event.result as any).result
    };
    grid.pdfExport(pdfExportProperties); 
  });
```
{% elsif page.publishingplatform == "javascript" %}

```typescript
  getOrders(state).then((event) => {
    let pdfExportProperties = {
      dataSource: event.result.result
    };
    grid.pdfExport(pdfExportProperties);
  });
```
{% endif %}

> For further customization on Grid export, refer to the respective documentation for [PDF exporting](../../grid/pdf-export/pdf-export-options) and [Excel exporting](../../grid/excel-export/excel-export-options)

The following code example shows how to export all records in client side:

{% if page.publishingplatform == "typescript" %}
  {% tabs %}
    {% highlight ts tabtitle="app.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export/app.ts %}
    {% endhighlight %}
    {% highlight html tabtitle="index.html" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export/index.html %}
    {% endhighlight %}
    {% highlight css tabtitle="styles.css" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export/styles.css %}
    {% endhighlight %}
    {% highlight ts tabtitle="server.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export/server.ts %}
    {% endhighlight %}
    {% highlight ts tabtitle="orderService.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export/orderService.ts %}
    {% endhighlight %}
    {% highlight ts tabtitle="datasource.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export/datasource.ts %}
    {% endhighlight %}
  {% endtabs %}
{% elsif page.publishingplatform == "javascript" %}
  {% tabs %}
    {% highlight js tabtitle="index.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export2/index.js %}
    {% endhighlight %}
    {% highlight html tabtitle="index.html" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export2/index.html %}
    {% endhighlight %}
    {% highlight js tabtitle="server.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export2/server.js %}
    {% endhighlight %}
    {% highlight js tabtitle="orderService.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export2/orderService.js %}
    {% endhighlight %}
    {% highlight js tabtitle="datasource.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-custom-export2/datasource.js %}
    {% endhighlight %}
  {% endtabs %}
{% endif %}

## Sending additional parameters to the server

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component allows you to include custom parameters in data requests. This feature is particularly useful when you need to provide additional information to the server enhanced processing.

By utilizing the [query](../../api/grid#query) property of the grid along with the `addParams` method of the Query class, you can easily incorporate custom parameters into data requests for every grid action.

To enable custom parameters in data requests for the grid component, follow these steps:

**1. Bind the Query Object to the Grid**: Assign the initialized query object to the query property of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component.

**2. Initialize the Query Object:** Create a new instance of the Query class and use the addParams method to add the custom parameters.

**3. Handle Data State Changes:** If you need to dynamically update the data based on interactions, implement the dataStateChange event handler to execute the query with the updated state.

**4. Execute Data Request:** In the service, execute the data request by combining the custom parameters with other query parameters such as paging and sorting.

The following example demonstrates how to send additional parameters to the server.

{% if page.publishingplatform == "typescript" %}
  {% tabs %}
    {% highlight ts tabtitle="app.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params/app.ts %}
    {% endhighlight %}
    {% highlight html tabtitle="index.html" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params/index.html %}
    {% endhighlight %}
    {% highlight css tabtitle="styles.css" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params/styles.css %}
    {% endhighlight %}
    {% highlight ts tabtitle="server.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params/server.ts %}
    {% endhighlight %}
    {% highlight ts tabtitle="orderService.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params/orderService.ts %}
    {% endhighlight %}
    {% highlight ts tabtitle="datasource.ts" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params/datasource.ts %}
    {% endhighlight %}
  {% endtabs %}
{% elsif page.publishingplatform == "javascript" %}
  {% tabs %}
    {% highlight js tabtitle="index.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params2/index.js %}
    {% endhighlight %}
    {% highlight html tabtitle="index.html" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params2/index.html %}
    {% endhighlight %}
    {% highlight js tabtitle="server.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params2/server.js %}
    {% endhighlight %}
    {% highlight js tabtitle="orderService.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params2/orderService.js %}
    {% endhighlight %}
    {% highlight js tabtitle="datasource.js" %}
    {% include code-snippet/grid-sdk/typescript/grid/remote-add-params2/datasource.js %}
    {% endhighlight %}
  {% endtabs %}
{% endif %}

![AdditionalParameters](../images/databining/remote-additional-params.png)

## Offline mode

On remote data binding, all grid actions such as paging, sorting, editing, grouping, filtering, etc, will be processed on server-side. To avoid post back for every action, set the grid to load all data on initialization and make the actions process in client-side. To enable this behavior, use the `offline` property of [DataManager](../../data).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/grid-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/grid-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/grid-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/grid/grid-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/grid-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/grid-cs16" %}
{% endif %}

## Fetch result from the DataManager query using external button 

By default, TypeScript Grid automatically binds a remote data source using the [DataManager](../../data/getting-started). However, in some scenarios, you may need to fetch data dynamically from the server using a query triggered by an external button. This approach allows greater control over when and how data is loaded into the Grid.

To achieve this, you can use the [executeQuery](../../api/data/dataManager#executequery) method of `DataManager` with a **[Query](../../api/data/query)** object. This method allows you to run a custom query and retrieve results dynamically.

The following example demonstrates how to fetch data from the server when an external button is clicked and display a status message indicating the data fetch status:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/fetch-datamanger/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/fetch-datamanger/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/fetch-datamanger" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/grid/fetch-datamanger/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/fetch-datamanger/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/fetch-datamanger" %}
{% endif %}