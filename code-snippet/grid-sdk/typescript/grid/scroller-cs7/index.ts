import { Grid } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    height: 315, 
    width: 500,
    created: created,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 80 },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', headerText: 'Freight', width: 80 },
        { field: 'ShipName', headerText: 'Ship Name', width: 130 },
        { field: 'ShipAddress', headerText: 'Ship Address', width: 140 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 100 },
        { field: 'ShipRegion', headerText: 'Ship Region', width: 80 },
        { field: 'ShipPostalCode', headerText: 'Ship Postal Code', width: 110 }
    ]
});
grid.appendTo('#Grid');

function created() {
    const scroller = document.getElementById('scroller') as HTMLDivElement;
    const content = grid.getContent().firstElementChild as HTMLDivElement;
    const contentTable = grid.getContentTable() as HTMLTableElement;

    grid.element.insertBefore(scroller, content.parentElement);

    scroller.onscroll = () => (content.scrollLeft = scroller.scrollLeft);
    content.onscroll = () => (scroller.scrollLeft = content.scrollLeft);

    const setScroller = () => {
      scroller.innerHTML = `<div style="width: ${contentTable.offsetWidth}px; height: 18px;"></div>`;
      scroller.style.height = content.scrollWidth <= content.clientWidth ? '0px' : '18px';
    };

    setScroller();
    window.onresize = setScroller;
}