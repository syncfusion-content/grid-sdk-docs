var treegridObj = new ej.treegrid.TreeGrid({
        dataSource: textdata,
        childMapping: 'Children',
        treeColumnIndex: 0,
        rowDataBound: function (args) {
            var data = ej.grids.getObject('EmployeeID', args.data);
            var spkwl = args.row.querySelector('#spkwl' + data);
            var winloss = new ej.charts.Sparkline({
               height: '50px',
               width: '150px',
               type: 'WinLoss',
               valueType: 'Numeric',
               fill: '#3C78EF',
               tiePointColor: 'darkgray',
               negativePointColor: '#f7a816',
               dataSource: getSparkData('column', +data)
            });
            winloss.appendTo(spkwl);
        },
        height: 260,
        rowHeight: 83,
        columns: [
           { field: 'EmpID', headerText: 'Employee ID', width: 95 },
           { field: 'Name', headerText: 'Name', width: 110 },
           { field: 'DOB', headerText: 'DOB', width: 90, textAlign: 'Right', format: 'yMd' },
           {
             headerText: 'Year GR', textAlign: 'Center',
             template: '#template', width: 120
           }
        ]
    });

treegridObj.appendTo('#TreeGrid');

