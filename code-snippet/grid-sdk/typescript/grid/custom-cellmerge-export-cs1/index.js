var data =  [{OrderID: 10248,CustomerID:"VINET",City:"Reims"},{OrderID: 10248,CustomerID:"CHOPS",City:"Münster"},
{OrderID: 10250,CustomerID:"TOMSP",City:"San Cristóbal"}, {OrderID: 10251,CustomerID:"RISCU",City:"Rio de Janeiro"},
{OrderID: 10251,CustomerID:"HANAR",City:"Resende"}, {OrderID: 10251,CustomerID:"WELLI",City:"Lyon"},
{OrderID: 10255,CustomerID:"SUPRD",City:"Genève"},{OrderID: 10256,CustomerID:"HILAA",City:"Charleroi"},
{OrderID: 10257,CustomerID:"CENTC",City:"Bern"},{OrderID: 10257,CustomerID:"HANAR",City:"Rio de Janeiro"},
{OrderID: 10259,CustomerID:"TOMSP",City:"Reims"}];

ej.grids.Grid.Inject(ej.grids.RowDD, ej.grids.Toolbar, ej.grids.Export, ej.grids.PdfExport,ej.grids.Page);
// global variable declaration for pdf Export
var currentCell;
var currentOrderID = null;
var cellIndexCount =1;

var grid = new ej.grids.Grid({
  dataSource: data,
  allowPdfExport:true,
  toolbar:["PdfExport"],
  toolbarClick: toolbarClick,
  dataBound: onDataBound,
  pdfQueryCellInfo: pdfQueryCellInfo,
  pdfExportComplete: pdfExportComplete,
  allowPaging:true,
  pageSettings: { pageSize:5 },
  columns: [
      { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },  
      { field: 'CustomerID', headerText: 'Customer ID', width: 130 },
      {field: "City", headerText:"ShipCity",width:120}
  ],
  height: 260,
})
grid.appendTo('#Grid');
function toolbarClick(args){
    if (args.item.text === 'PDF Export') {
        this.pdfExport();
    }
 }

 function onDataBound() {
    let previousData= null;
    let startRowIndex = null;
    let endRowIndex= null;
    let rows = grid.getRows();
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
                let targetRow = grid.getRows()[startRowIndex];
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

function pdfQueryCellInfo(args) {
  if(!currentOrderID && args.column.field == "OrderID"){
          currentOrderID =  args.data["OrderID"];
          currentCell = args.cell;
      }
      else if(currentOrderID && args.column.field == "OrderID" &&  currentOrderID ==args.data["OrderID"]){
        cellIndexCount++;
      } else if(currentOrderID !== args.data["OrderID"] && args.column.field == "OrderID") {
        currentCell.rowSpan = cellIndexCount;
        currentOrderID = args.data["OrderID"];
        currentCell= args.cell;
        cellIndexCount = 1 ;
      }
    }
     // Reset the pdf export global variable values
     function pdfExportComplete(){
      currentOrderID=null;
      currentCell=null;
      cellIndexCount =1;
    }