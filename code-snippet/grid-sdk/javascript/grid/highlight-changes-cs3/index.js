ej.grids.Grid.Inject(ej.grids.Highlight);

var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'Account', headerText: 'Account', isPrimaryKey: true, width: 110 },
        { field: 'Desk', headerText: 'Desk', width: 150 },
        { field: 'Rating', headerText: 'Rating', width: 100 },
        { field: 'Exposure', headerText: 'Exposure', format: 'C0', textAlign: 'Right', width: 140 },
        { field: 'Risk', headerText: 'Risk level', width: 110 }
    ],
    enableHighlightOnDataChange: true,
    height: 300
});
grid.appendTo('#Grid');

document.getElementById('flashRows').addEventListener('click', () => {
    const rows = grid.getSelectedRowIndexes();
    if (rows.length) {
        grid.flashCells({ rowNodes: rows });
    }
});

document.getElementById('flashColumn').addEventListener('click', () => {
    grid.flashCells({ columns: ['Exposure'] });
});

document.getElementById('flashCells').addEventListener('click', () => {
    grid.flashCells({ rowNodes: [0, 2], columns: ['Rating', 'Exposure'] });
});
