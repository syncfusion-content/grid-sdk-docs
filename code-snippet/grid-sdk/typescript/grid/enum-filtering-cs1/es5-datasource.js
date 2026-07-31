// Enum for file types.
var FileType = {
    Base: 1,
    Replace: 2,
    Delta: 3
};

// Mapping ENUM values to text for display.
var FileTypeText = {
    1: 'Base',
    2: 'Replace',
    3: 'Delta'
};

var Data = [
    { OrderID: 10248, CustomerID: 'VINET', ShipCity: 'Reims', ShipName: 'Vins et alcools Chevalier', Type: FileType.Base },
    { OrderID: 10249, CustomerID: 'TOMSP', ShipCity: 'Münster', ShipName: 'Toms Spezialitäten', Type: FileType.Replace },
    { OrderID: 10250, CustomerID: 'HANAR', ShipCity: 'Rio de Janeiro', ShipName: 'Hanari Carnes', Type: FileType.Delta },
    { OrderID: 10251, CustomerID: 'SUPRD', ShipCity: 'London', ShipName: 'Suprême Délices', Type: FileType.Base },
    { OrderID: 10252, CustomerID: 'VICTE', ShipCity: 'Lyon', ShipName: 'Victuailles en stock', Type: FileType.Replace },
    { OrderID: 10253, CustomerID: 'HANAR', ShipCity: 'Rio de Janeiro', ShipName: 'Hanari Carnes', Type: FileType.Delta },
    { OrderID: 10254, CustomerID: 'CHOPS', ShipCity: 'Bern', ShipName: 'Chop-suey Chinese', Type: FileType.Base },
    { OrderID: 10255, CustomerID: 'RICSU', ShipCity: 'Genève', ShipName: 'Richter Supermarkt', Type: FileType.Replace },
    { OrderID: 10256, CustomerID: 'WELLI', ShipCity: 'Resende', ShipName: 'Wellington Importadora', Type: FileType.Delta },
    { OrderID: 10257, CustomerID: 'HILAA', ShipCity: 'San Cristóbal', ShipName: 'HILARION-Abastos', Type: FileType.Base },
    { OrderID: 10258, CustomerID: 'ERNSH', ShipCity: 'Graz', ShipName: 'Ernst Handel', Type: FileType.Replace },
    { OrderID: 10259, CustomerID: 'CENTC', ShipCity: 'México D.F.', ShipName: 'Centro comercial Moctezuma', Type: FileType.Delta },
    { OrderID: 10260, CustomerID: 'OTTIK', ShipCity: 'Köln', ShipName: 'Ottilies Käseladen', Type: FileType.Base },
    { OrderID: 10261, CustomerID: 'QUEDE', ShipCity: 'Rio de Janeiro', ShipName: 'Que Delícia', Type: FileType.Replace }
];
