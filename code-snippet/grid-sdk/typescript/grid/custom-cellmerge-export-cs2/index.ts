

import { Grid, ExcelQueryCellInfoEventArgs, ExcelCell, ExcelExport} from '@syncfusion/ej2-grids';
import { Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(ExcelExport,Toolbar);
// global variable declaration for excel export
let gridcells: ExcelCell;
let currentOrderID:Number =null;
let rowspanCount=1;
let grid: Grid = new Grid(
    {
        dataSource: data,
        allowExcelExport:true,
        toolbar:["ExcelExport"],
        toolbarClick: toolbarClick,
        dataBound: onDataBound,
        excelQueryCellInfo:excelQueryCellInfo,
        excelExportComplete: excelExportComplete,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },  
            { field: 'CustomerID', headerText: 'Customer ID', width: 130 },
            {field: "City", headerText:"ShipCity",width:120}
        ],
        height: 260,
    });
    grid.appendTo('#Grid');
    function toolbarClick(args){
        if (args.item.text === 'Excel Export') {
            this.excelExport();
        }
     }
    function onDataBound() {
        let previousData= null;
        let startRowIndex = null;
        let endRowIndex= null;
        let grid = this;
    
        let rows =  grid.getRows();
        let data =  grid.getCurrentViewRecords();
    
        for (let i = 0, len = rows.length; i < len; i++) {
            if (!previousData) {
                previousData = data[i]['OrderID'];
                startRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"));
            }
            else if (previousData === data[i]['OrderID']) {
                rows[i].children[0].classList.add('e-hide');
            }
            else if (previousData && previousData !== data[i]['OrderID']) {
                if (grid.getRows().length > 0 && grid.getRows().length > startRowIndex) {
                    endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
                    let targetRow =  grid.getRows()[startRowIndex];
                    let currentRowChild = rows[i] && rows[i].children[0];
                    if (targetRow && currentRowChild) {
                      let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                        parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(currentRowChild.getAttribute('aria-colindex'))
                      );
                      if (targetCell[0]) {
                        targetCell[0].setAttribute("rowSpan", endRowIndex - startRowIndex);
                      }
                    }
                    previousData = data[i]['OrderID'];
                    startRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
                }
            }
            if (rows[i].children[0].classList.contains("e-hide") || i < len) {
                endRowIndex = parseInt(rows[i].getAttribute("aria-rowindex"), 10);
                if (endRowIndex > 0) {
                  let targetRow = grid.getRows()[startRowIndex];  
                  let currentRowChild = rows[i] && rows[i].children[0];
                  if (targetRow && currentRowChild) {
                      let targetCell = [].slice.call(targetRow.querySelectorAll('.e-rowcell')).filter((cell) =>
                          parseInt(cell.getAttribute('aria-colindex'), 10) === parseInt(currentRowChild.getAttribute('aria-colindex'))
                      );
                      if (targetCell.length > 0) {
                          targetCell[0].setAttribute("rowSpan", endRowIndex - startRowIndex + 1);
                      }
                  }
                }
            }
        }
   }

function excelQueryCellInfo(args: ExcelQueryCellInfoEventArgs) {

    if (!currentOrderID && args.column.field == "OrderID") {
        currentOrderID = args.data["OrderID"];
        gridcells = (args.cell as ExcelCell);
    }
    else if (currentOrderID && args.column.field == "OrderID" && currentOrderID == args.data["OrderID"]) {
        rowspanCount++;
    } else if (currentOrderID !== args.data["OrderID"] && args.column.field == "OrderID") {
        (gridcells as ExcelCell).rowSpan = rowspanCount;
        currentOrderID = args.data["OrderID"];
        gridcells = (args.cell as ExcelCell);
        rowspanCount = 1;
    }
}
// Reset the excel export global variable values
function excelExportComplete(args: ExcelExportCompleteArgs) {
    currentOrderID = null;
    gridcells = null;
    rowspanCount=1;
  }


