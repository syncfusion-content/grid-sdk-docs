let path = {
    saveUrl:
      'https://services.syncfusion.com/js/production/api/FileUploader/Save',
    removeUrl:
      'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
  };
  function onRemove(args) {
    grid.dataSource = [''];
    grid.columns = [];
  }
  function onSuccess(args) {
    var files = args.file;
    if (files) {
      parseExcel(files[0]);
    }
  }
  
  var dropElement = document.getElementsByClassName('control-fluid')[0];
  var uploadObject = new ej.inputs.Uploader({
    asyncSettings: path,
    removing: onRemove,
    change: onSuccess,
    dropArea: dropElement,
  });
  uploadObject.appendTo('#fileupload');
  var grid = new ej.grids.Grid({});
  grid.appendTo('#Grid');
  function parseExcel(file) {
    if (file && file.type == 'xlsx') {
      var reader = new FileReader();
      reader.onload = (e) => {
        var data = (e.target).result;
        var workbook = XLSX.read(data, { type: 'array' });
        workbook.SheetNames.forEach((sheetName) => {
          var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
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
      dialog.content = 'Please upload only .xlsx format';
      dialog.show();
    }
  }
  
  var dialog = new ej.popups.Dialog({
    content: 'Invalid JSON',
    width: 350,
    visible: false,
    header: 'Alert',
    showCloseIcon: true,
  });
  dialog.appendTo('#dialog');