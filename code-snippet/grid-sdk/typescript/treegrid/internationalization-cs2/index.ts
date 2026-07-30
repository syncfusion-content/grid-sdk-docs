

import { loadCldr, L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as currencies from './currencies.json';
import * as cagregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
import * as numberingSystems from './numberingSystems.json';
import { TreeGrid, Page, Toolbar, Filter } from '@syncfusion/ej2-treegrid';
import { formatData } from './datasource.ts';

TreeGrid.Inject(Page, Toolbar, Filter);

loadCldr(currencies, cagregorian, numbers, timeZoneNames, numberingSystems);

setCulture('de');
setCurrencyCode('EUR');

L10n.load({
    'de-DE': {
        'grid': {
            'EmptyRecord': 'Keine Aufzeichnungen angezeigt',
            "Print": "Drucken",
            "FilterButton": "Filter",
            "ClearButton": "klar",
            "StartsWith": "Beginnt mit",
            "EndsWith": "Endet mit",
            "Contains": "Enthält",
            "Equal": "Gleich",
            "NotEqual": "Nicht gleich",
            "LessThan": "Weniger als",
            "LessThanOrEqual": "Weniger als oder gleich",
            "GreaterThan": "Größer als",
            "GreaterThanOrEqual": "Größer als oder gleich",
            "EnterValue": "Geben Sie den Wert ein",
            "FilterMenu": "Filter"
        },
        'pager': {
            'currentPageInfo': '{0} von {1} Seiten',
            'totalItemsInfo': '({0} Beiträge)',
            'firstPageTooltip': 'Zur ersten Seite',
            'lastPageTooltip': 'Zur letzten Seite',
            'nextPageTooltip': 'Zur nächsten Seite',
            'previousPageTooltip': 'Zurück zur letzten Seit',
            'nextPagerTooltip': 'Zum nächsten Pager',
            'previousPagerTooltip': 'Zum vorherigen Pager'
        },
        "dropdowns": {
            "noRecordsTemplate": "Keine Aufzeichnungen gefunden"
        },
        "datepicker": {
            "placeholder": "Wählen Sie ein Datum",
            "today": "heute"
        }
    }
});

let treeGridObj: TreeGrid = new TreeGrid({
    dataSource: formatData,
    locale: 'de-DE',
    childMapping: 'subtasks',
    toolbar: ['Print'],
    allowFiltering: true,
    filterSettings: {type: 'Menu'},
    height: 220,
    allowPaging: true,
    pageSettings: {pageSize: 7},
    treeColumnIndex: 1,
    columns: [
            { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 180 },
            { field: 'price', headerText: 'Price', textAlign: 'Right', width: 80, format: {
                format: 'C2', useGrouping: false,
                minimumSignificantDigits: 1, maximumSignificantDigits: 3, currency: 'EUR'
            }, type: 'number' },
    ]
});

treeGridObj.appendTo('#TreeGrid');


