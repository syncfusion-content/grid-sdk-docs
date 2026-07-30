import { Grid, Edit, Page, Toolbar } from '@syncfusion/ej2-grids';
import { Uploader } from '@syncfusion/ej2-inputs';
import { employeeData } from './datasource.ts';
Grid.Inject(Edit, Toolbar, Page);

let uploaderElem;
let uploaderObj;
let orderData;
let strm;

let grid: Grid = new Grid({
    dataSource: employeeData,
    allowPaging: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    actionBegin: actionBegin,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', isPrimaryKey: true, width: 100 },
        { field: 'FirstName', headerText: 'First Name', textAlign: 'Left', width: 120 },
        { field: 'LastName', headerText: 'Last Name', textAlign: 'Left', width: 120 },
        { field: 'Title', headerText: 'Title', textAlign: 'Left', width: 120 },
        {
            headerText: 'Employee Image', width: 150, textAlign: 'Center', template: function (props) {
                let src = !props.Image ? 'https://ej2.syncfusion.com/angular/demos/assets/grid/images/' + props.EmployeeID + '.png' : props.Image;
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
                    uploaderObj = new Uploader({
                        asyncSettings: {
                            saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
                            removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
                        },
                        multiple: false,
                        success: function onUploadSuccess() {
                            if (args.operation === 'upload') {
                                let fileBlob = args.file.rawFile;
                                let file = new File([fileBlob], args.file.name);
                                getBase64(file);
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

function actionBegin(args) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
        let file = uploaderObj.getFilesData()[0];
        if (file) {
            // Call getBase64 with callback function
            getBase64(file.rawFile, function(result) {
                // Update strm with result
                strm = result;
                // Set Image property in args.data to strm
                args.data['Image'] = strm;
                // Call the grid's updateRow method to reflect changes
                grid.updateRow(args.rowIndex, args.data);
            });
        }
    }
}

function getBase64(file: File, callback: (result: string) => void) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        callback(reader.result  as string);
    };
}