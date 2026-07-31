var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
            { field: 'Rating', headerText: 'Customer Rating', width: 120, template: function (data) {
                var ratingHTML = '<div class="rate"><div class="rating">';
                for (var i = 1; i <= 5; i++) {
                    ratingHTML += '<span class="star ' + (i <= data.Rating ? 'checked' : '') + '"></span>';
                }
                ratingHTML += '</div></div>';
                return ratingHTML;
              }
         }
        ],
    height: 315
});
grid.appendTo('#Grid');