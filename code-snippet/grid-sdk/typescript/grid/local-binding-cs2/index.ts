import { Grid } from '@syncfusion/ej2-grids';
import { Uploader, RemovingEventArgs } from '@syncfusion/ej2-inputs';
import { Dialog } from '@syncfusion/ej2-popups';

let path: Object = {
    saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
};

let grid: Grid = new Grid({});
grid.appendTo('#Grid');

let dialog: Dialog = new Dialog({
    content: 'Invalid JSON',
    width: 350,
    visible: false,
    header: "Alert",
    showCloseIcon: true
});
dialog.appendTo('#dialog');

let dropElement: HTMLElement = document.getElementsByClassName('control-fluid')[0] as HTMLElement;

function onRemove(args: RemovingEventArgs): void {
    grid.dataSource = [""];
    grid.columns = [];
}

function onSuccess(args: { file: CustomFile[] }): void {
    let files = args.file;
    if (files) {
        parseExcel(files[0]);
    }
}

let uploadObject: Uploader = new Uploader({
    asyncSettings: path,
    removing: onRemove,
    change: onSuccess,
    dropArea: dropElement,
});
uploadObject.appendTo('#fileupload');

function parseExcel(file: CustomFile): void {
    if (file && file.type === "xlsx") {
        let reader = new FileReader();
        reader.onload = (e) => {
            let data = (<any>e.target).result;
            let workbook = XLSX.read(data, { type: 'array' });
            workbook.SheetNames.forEach((sheetName: string) => {
                let XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                if (Array.isArray(XL_row_object) && XL_row_object.length > 0) {
                    grid.dataSource = XL_row_object;
                } else {
                    dialog.content = "Invalid JSON";
                    dialog.show();
                }
            });
        };
        reader.readAsArrayBuffer(file.rawFile);
    } else {
        dialog.content = "Please upload only .xlsx format";
        dialog.show();
    }
}

interface CustomFile {
    type: string;
    rawFile: Blob;
  }