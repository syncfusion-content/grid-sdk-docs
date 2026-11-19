ej.grids.Grid.Inject(ej.grids.Group);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { columns: ['state', 'portfolioType'], defaultExpanded: 1, enableSticky: true },
    columns: [
        { field: 'accountId', headerText: 'Account ID', width: 140 },
        { field: 'fullName', headerText: 'Full Name', width: 150 },
        { field: 'state', headerText: 'State', width: 130 },
        { field: 'portfolioType', headerText: 'Portfolio Type', width: 140 },
        { field: 'balanceUsd', headerText: 'Balance (USD)', textAlign: 'Right', width: 140 },
        { field: 'ytdReturnPct', headerText: 'YTD Return %', textAlign: 'Right', width: 130 },
        { field: 'riskLevel', headerText: 'Risk Level', width: 120 }
    ],
    height: 400
});
grid.appendTo('#Grid');