ej.grids.Grid.Inject(ej.grids.Edit, ej.grids.Toolbar, ej.grids.Page);

var uploaderElem;
var uploaderObj;
var strm;

var grid = new ej.grids.Grid({
    dataSource: employeeData,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', isPrimaryKey: true, width: 100 },
        { field: 'FirstName', headerText: 'First Name', textAlign: 'Left', width: 120 },
        { field: 'LastName', headerText: 'Last Name', textAlign: 'Left', width: 120 },
        { field: 'Title', headerText: 'Title', textAlign: 'Left', width: 120 },
        {
            headerText: 'Employee Image', width: 150, textAlign: 'Center', template: function (props) {
                var src = !props.Image ? 'https://ej2.syncfusion.com/angular/demos/assets/grid/images/' + props.EmployeeID + '.png' : props.Image;
                return '<div class="image"><img src="' + src + '" alt="' + props.EmployeeID + '" /></div>';
            },
            edit: {
                create: function () {
                    uploaderElem = document.createElement('input');
                    return uploaderElem;
                },
                destroy: function () {
                    uploaderObj.destroy();
                },
                read: function () {
                    return uploaderObj.value;
                },
                write: function (args) {
                    uploaderObj = new ej.inputs.Uploader({
                        asyncSettings: {
                            saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
                            removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
                        },
                        multiple: false,
                        success: function onUploadSuccess() {
                            if (args.operation === 'upload') {
                                var fileBlob = args.file.rawFile;
                                var file = new File([fileBlob], args.file.name);
                                getBase64(file, function (result) {
                                    args.rowData['Image'] = result;
                                    grid.updateRow(args.rowIndex, args.rowData);
                                });
                            }
                        }
                    });
                    uploaderObj.appendTo(uploaderElem);
                }
            }
        }
    ],
    pageSettings: { pageSize: 7 },
    height: 273
});
grid.appendTo('#Grid');

function getBase64(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        callback(reader.result);
    };
}