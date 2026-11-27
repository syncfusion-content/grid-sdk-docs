ej.grids.Grid.Inject(ej.grids.Highlight);

var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'Symbol', headerText: 'Symbol', isPrimaryKey: true, width: 110 },
        { field: 'Company', headerText: 'Company', width: 180 },
        { field: 'Price', headerText: 'Price', format: 'C2', textAlign: 'Right', width: 120 },
        { field: 'Volume', headerText: 'Volume', format: 'N0', textAlign: 'Right', width: 140 }
    ],
    enableHighlightOnDataChange: true,
    height: 300
});
grid.appendTo('#Grid');

document.getElementById('updatePrices').addEventListener('click', () => {
    const symbols = ['AAPL', 'NVDA', 'TSLA'];
    symbols.forEach((symbol) => {
        grid.setCellValue(symbol, 'Price', +(100 + Math.random() * 150).toFixed(2));
    });
});
