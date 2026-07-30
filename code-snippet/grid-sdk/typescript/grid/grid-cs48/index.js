var jobRole = [
    { role: 'TeamLead' },
    { role: 'Manager' },
    { role: 'Engineer' },
    { role: 'Sales' },
    { role: 'Support' }
];

var salaryDetails= [
    { salary: 6000 },
    { salary: 17000 },
    { salary: 18000 },
    { salary: 26000 },
    { salary: 25000 },
    { salary: 40000 },
    { salary: 35000 },
    { salary: 55000 },
    { salary: 65000 }
];

var grid = new ej.grids.Grid({
    dataSource: employeeDetails,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    load: () => {
        var column = grid.getColumnByField('Salary');
        column.validationRules = {
            required: [customFn,'Please enter valid salary'],
        };
    },
    actionBegin: (args) =>{
        window.role = args.rowData.Role;
    },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
        { field: 'Role', headerText: 'Role', width: 120, editType: 'dropdownedit',
            edit: {
                params: {
                    query: new ej.data.Query(),
                    dataSource: jobRole,
                    fields: { value: 'role', text: 'role' },
                    allowFiltering: true,
                    change: valChange
                }
           }
        },
        { field: 'Salary', headerText: 'Salary', textAlign: 'Right', width: 160, editType: 'dropdownedit',
            edit: {
                params: {
                    query: new ej.data.Query(),
                    dataSource: salaryDetails,
                    fields: { value: 'salary', text: 'salary' },
                    allowFiltering: true,
                    change: customFn
                }
            }
        },
        { field: 'Address', headerText: 'Address', validationRules: {required: true}, width: 160 }
    ]
});
grid.appendTo('#Grid');

window.role = '';

function customFn(args) {
    var formObj = grid.editModule.formObj.element['ej2_instances'][0];
    let salary = parseInt(args.value)

    switch (window['role']) {
        case 'Sales':
            if ((salary >= 5000) && (salary < 15000))
                return true;
            else
                formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and< 15000';

            break;

        case 'Support':
            if ((salary >= 15000 && salary < 19000))
                return true;
            else
                formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';

            break;

        case 'Engineer':
            if ((salary >= 25000 && salary < 30000))
                return true;
            else
                formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';

            break;

        case 'TeamLead':
            if ((salary >= 30000) && (salary < 50000))
                return true;
            else
                formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';

            break;

        case 'Manager':
            if ((salary >= 50000) && (salary < 70000))
                return true;
            else
                formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';

            break;

    }
    return false;
}

function valChange(args) {
      window.role = args.value?.toString(); // Explicitly cast args.value to string
        var formObj = grid.editModule.formObj.element['ej2_instances'][0];

        switch ( window.role) {

            case 'Sales':
                formObj.rules['Salary']['required'][1] = 'Please enter valid Sales Salary >=5000 and< 15000';

                break;

            case 'Support':
                formObj.rules['Salary']['required'][1] = 'Please enter valid Support Salary >=15000 and < 19000';

                break;

            case 'Engineer':
                formObj.rules['Salary']['required'][1] = 'Please enter valid Engineer Salary between >=25000 and < 30000';

                break;

            case 'TeamLead':
                formObj.rules['Salary']['required'][1] = 'Please enter valid TeamLead Salary >= 30000 and < 50000';

                break;

            case 'Manager':
                formObj.rules['Salary']['required'][1] = 'Please enter valid Manager Salary >=50000 and < 70000';

                break;
        }
    }

