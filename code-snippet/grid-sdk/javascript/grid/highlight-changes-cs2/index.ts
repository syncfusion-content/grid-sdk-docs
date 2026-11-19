import { Grid, Highlight } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Highlight);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'Symbol', headerText: 'Symbol', isPrimaryKey: true, width: 110 },
        { field: 'Company', headerText: 'Company', width: 180 },
        { field: 'Price', headerText: 'Price', format: 'C2', textAlign: 'Right', width: 120 },
        { field: 'Volume', headerText: 'Volume', format: 'N0', textAlign: 'Right', width: 140 }
    ],
    enableHighlightOnDataChange: true,
    highlightSettings: { color: '#ffb347', flashDuration: 500, fadeDuration: 1000 },
    height: 300
});
grid.appendTo('#Grid');

document.getElementById('applySettings')!.addEventListener('click', () => {
    grid.highlightSettings.color = (document.getElementById('color') as HTMLInputElement).value;
    grid.highlightSettings.flashDuration = Number((document.getElementById('flash') as HTMLInputElement).value);
    grid.highlightSettings.fadeDuration = Number((document.getElementById('fade') as HTMLInputElement).value);
});

document.getElementById('updatePrices')!.addEventListener('click', () => {
    const symbols = ['AAPL', 'NVDA', 'TSLA'];
    symbols.forEach((symbol) => {
        grid.setCellValue(symbol, 'Price', +(100 + Math.random() * 150).toFixed(2));
    });
});
