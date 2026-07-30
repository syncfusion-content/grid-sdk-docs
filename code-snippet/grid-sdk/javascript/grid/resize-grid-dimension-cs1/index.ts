import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID',  width: 120 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
        { field: 'Freight', headerText: 'Freight', width: 80 }
    ],
    height: '100%'
});
grid.appendTo('#Grid');

let widthsize: NumericTextBox = new NumericTextBox({
    min : 400,
    max : 650,
    placeholder : '400',
    step : 5,
    width : 120
});
widthsize.appendTo('#WidthTextBox');

let heightsize: NumericTextBox = new NumericTextBox({
    min : 200,
    max : 650,
    placeholder : '200',
    step : 5,
    width : 120
});
heightsize.appendTo('#HeightTextBox');

let button: Button = new Button({
     cssClass: 'e-outline',
});
button.appendTo('#resizeButton');

(document.getElementById('resizeButton') as HTMLElement).onclick = function () {
    let parentDiv = document.getElementById('parent');
    (parentDiv as HTMLElement).style.width = widthsize.element.value + 'px';
    (parentDiv as HTMLElement).style.height = heightsize.element.value + 'px';
};