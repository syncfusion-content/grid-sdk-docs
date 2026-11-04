---
layout: post
title: Angular Grid - Foreign Key Column User Guide | Syncfusion
title: Angular Grid Foreign Key Column UG | Syncfusion
description: Comprehensive user guide for implementing and managing foreign key columns in Angular Data Grid. Learn configuration, binding, editing, filtering, and advanced scenarios.
control: Foreign key column 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Foreign Key Column - User Guide

## Overview

Foreign key columns in the Syncfusion Angular Data Grid allow you to display related data from external data sources instead of raw foreign key identifiers. This comprehensive user guide covers all aspects of working with foreign key columns, from basic setup to advanced customization.

**Key Benefits:**
- Display meaningful data (names, descriptions) instead of numeric IDs
- Support for both local and remote data sources
- Seamless editing with dropdown lists and custom components
- Advanced filtering and sorting capabilities
- Aggregation support with custom functions
- Multiple foreign key columns in a single grid

---

## Prerequisites

Before implementing foreign key columns, ensure you have:

1. **Angular Data Grid Setup**: A working Angular Data Grid component
2. **ForeignKeyService**: Injected in your module or component
3. **Data Sources**: Access to both main grid data and foreign data sources
4. **Understanding of Column Configuration**: Basic knowledge of column properties

### Required Imports

```typescript
import { ForeignKeyService } from '@syncfusion/ej2-angular-grids';
import { NgModule } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  imports: [GridModule],
  providers: [ForeignKeyService]
})
export class DataGridModule { }
```

---

## Basic Configuration

### Essential Properties

To configure a foreign key column, you must define three essential properties:

| Property | Type | Description |
|----------|------|-------------|
| `field` | string | The column field name in the main grid data |
| `foreignKeyField` | string | The field in the foreign data source that matches the ID in the main grid |
| `foreignKeyValue` | string | The field from the foreign data source to display in the grid |
| `dataSource` | Array \| DataManager | The external data source containing related information |

### Basic Setup Example

```html
<!-- Simple foreign key column configuration -->
<e-column 
  field='EmployeeID' 
  headerText='Employee Name' 
  foreignKeyValue='FirstName' 
  foreignKeyField='EmployeeID' 
  [dataSource]='employeesData'>
</e-column>
```

---

## Data Binding Scenarios

### 1. Binding Local Data

Local data binding is suitable for smaller datasets that don't change frequently.

**Scenario:** Display employee names in an orders grid

```typescript
import { Component, OnInit } from '@angular/core';
import { ForeignKeyService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-grid',
  template: `<ejs-grid [dataSource]='orderData'>
               <e-columns>
                 <e-column field='OrderID' headerText='Order ID' width=100></e-column>
                 <e-column field='EmployeeID' headerText='Employee Name' 
                           foreignKeyValue='FirstName' 
                           foreignKeyField='EmployeeID' 
                           [dataSource]='employeeData'></e-column>
                 <e-column field='Freight' headerText='Freight' width=80></e-column>
               </e-columns>
             </ejs-grid>`,
  providers: [ForeignKeyService]
})
export class GridComponent implements OnInit {
  public orderData: any[] = [];
  public employeeData: any[] = [
    { EmployeeID: 1, FirstName: 'Nancy', LastName: 'Davolio' },
    { EmployeeID: 2, FirstName: 'Andrew', LastName: 'Fuller' },
    { EmployeeID: 3, FirstName: 'Janet', LastName: 'Leverling' }
  ];

  ngOnInit(): void {
    // Load order data
    this.orderData = [
      { OrderID: 10001, EmployeeID: 1, Freight: 32.38 },
      { OrderID: 10002, EmployeeID: 2, Freight: 11.61 },
      { OrderID: 10003, EmployeeID: 3, Freight: 65.83 }
    ];
  }
}
```

**Key Points:**
- Local data is ideal for reference tables with limited records
- Data is loaded in memory and available immediately
- Suitable for static lookup values

### 2. Binding Remote Data

Remote data binding fetches related data from web services or APIs.

**Scenario:** Fetch employee details from a remote API

```typescript
import { Component, OnInit } from '@angular/core';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ForeignKeyService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-grid',
  template: `<ejs-grid [dataSource]='orderData'>
               <e-columns>
                 <e-column field='OrderID' headerText='Order ID' width=100></e-column>
                 <e-column field='EmployeeID' headerText='Employee Name' 
                           foreignKeyValue='FirstName' 
                           [dataSource]='remoteEmployeeData'></e-column>
               </e-columns>
             </ejs-grid>`,
  providers: [ForeignKeyService]
})
export class GridComponent implements OnInit {
  public orderData: any[] = [];
  public remoteEmployeeData = new DataManager({
    url: 'https://api.example.com/employees',
    adaptor: new ODataV4Adaptor()
  });

  ngOnInit(): void {
    this.orderData = [
      { OrderID: 10001, EmployeeID: 1 },
      { OrderID: 10002, EmployeeID: 2 }
    ];
  }
}
```

**Remote Data Considerations:**
- Improves performance for large datasets
- Reduces initial page load time
- Requires network connectivity
- Sorting and grouping use `foreignKeyField` by default

---

## Editing Foreign Key Columns

### Default Dropdown Editing

By default, foreign key columns use a DropDownList component for editing.

```html
<e-column field='EmployeeID' 
          headerText='Employee Name' 
          foreignKeyValue='FirstName' 
          foreignKeyField='EmployeeID' 
          [dataSource]='employeeData'
          [editParams]='{ allowFiltering: true }'>
</e-column>
```

### Custom Edit Templates

Create custom edit interfaces using the `edit` property with callback functions.

```typescript
import { Component, ViewChild } from '@angular/core';
import { GridComponent, ForeignKeyService } from '@syncfusion/ej2-angular-grids';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-grid',
  template: `<ejs-grid #grid [dataSource]='orderData' [editSettings]='editSettings'>
               <e-columns>
                 <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' width=100></e-column>
                 <e-column field='EmployeeID' headerText='Employee Name' 
                           foreignKeyValue='FirstName' 
                           [edit]='editParams'
                           [dataSource]='employeeData'></e-column>
               </e-columns>
             </ejs-grid>`,
  providers: [ForeignKeyService]
})
export class GridComponent {
  @ViewChild('grid') gridInstance?: GridComponent;

  public orderData: any[] = [];
  public employeeData: any[] = [];
  public editSettings = { mode: 'Dialog', allowEditing: true, allowAdding: true };

  public editParams = {
    create: () => {
      return new DropDownListComponent();
    },
    read: (element: any) => {
      return element.value;
    },
    write: (args: any, data: any) => {
      args.value = data.EmployeeID;
    },
    destroy: () => {
      // Cleanup if needed
    }
  };
}
```

---

## Filtering Foreign Key Columns

### Filter Menu Customization

Customize the filter menu for foreign key columns to display meaningful data.

```typescript
public filterParams = {
  type: 'Menu',
  ui: {
    create: (args: any) => {
      // Create filter UI
      const ddl = new DropDownListComponent();
      ddl.dataSource = this.employeeData;
      ddl.fields = { text: 'FirstName', value: 'EmployeeID' };
      return ddl;
    },
    read: (args: any) => {
      return args.value;
    },
    write: (args: any, data: any) => {
      args.value = data.EmployeeID;
    }
  }
};
```

### Filter Bar Template

Use filter bar templates for inline filtering of foreign key columns.

```html
<e-column field='EmployeeID' 
          headerText='Employee Name' 
          foreignKeyValue='FirstName' 
          [filterBarTemplate]='filterTemplate'
          [dataSource]='employeeData'>
</e-column>

<ng-template #filterTemplate let-data='data'>
  <ejs-dropdownlist [dataSource]='employeeData' 
                    [fields]='{ text: "FirstName", value: "EmployeeID" }'
                    (change)='onFilterChange($event)'>
  </ejs-dropdownlist>
</ng-template>
```

---

## Aggregation with Foreign Key Columns

Foreign key columns display text values, so traditional aggregations don't apply. Use custom aggregates instead.

### Custom Aggregate Implementation

```typescript
import { Component, ViewChild } from '@angular/core';
import { GridComponent, ForeignKeyService, AggregateService, CustomSummaryType } from '@syncfusion/ej2-angular-grids';
import { getForeignData } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-grid',
  template: `<ejs-grid #grid [dataSource]='orderData'>
               <e-columns>
                 <e-column field='OrderID' headerText='Order ID' width=100></e-column>
                 <e-column field='EmployeeID' headerText='Employee Name' 
                           foreignKeyValue='FirstName' 
                           [dataSource]='employeeData'></e-column>
               </e-columns>
               <e-aggregates>
                 <e-aggregate>
                   <e-columns>
                     <e-column field='EmployeeID' type='Custom' 
                              [customAggregate]='countNancyOrders'>
                       <ng-template #footerTemplate let-data>
                         Count of Nancy Orders: {{data.Custom}}
                       </ng-template>
                     </e-column>
                   </e-columns>
                 </e-aggregate>
               </e-aggregates>
             </ejs-grid>`,
  providers: [ForeignKeyService, AggregateService]
})
export class GridComponent {
  @ViewChild('grid') gridInstance?: GridComponent;

  public orderData: any[] = [];
  public employeeData: any[] = [];

  // Custom aggregate function
  public countNancyOrders: CustomSummaryType = (customData: any) => {
    let count = 0;
    this.orderData.forEach((order) => {
      const foreignData = getForeignData(
        (this.gridInstance as GridComponent).getColumnByField('EmployeeID'), 
        order
      );
      if (foreignData && foreignData[0]?.FirstName === 'Nancy') {
        count++;
      }
    });
    return count;
  };
}
```

**Aggregate Tips:**
- Use `getForeignData()` helper to retrieve foreign records
- Calculate aggregates based on foreign key values
- Display results in footer templates
- Support for count, sum, and other custom calculations

---

## Advanced Scenarios

### Multiple Foreign Key Columns

Display multiple foreign relationships in a single grid.

```typescript
@Component({
  selector: 'app-grid',
  template: `<ejs-grid [dataSource]='orderData'>
               <e-columns>
                 <e-column field='OrderID' headerText='Order ID' width=100></e-column>
                 <e-column field='EmployeeID' headerText='Employee Name' 
                           foreignKeyValue='FirstName' 
                           [dataSource]='employeeData'></e-column>
                 <e-column field='CustomerID' headerText='Customer Name' 
                           foreignKeyValue='ContactName' 
                           [dataSource]='customerData'></e-column>
                 <e-column field='ShipperID' headerText='Shipper Name' 
                           foreignKeyValue='CompanyName' 
                           [dataSource]='shipperData'></e-column>
               </e-columns>
             </ejs-grid>`,
  providers: [ForeignKeyService]
})
export class GridComponent {
  public orderData: any[] = [];
  public employeeData: any[] = [];
  public customerData: any[] = [];
  public shipperData: any[] = [];
}
```

**Multiple Foreign Key Considerations:**
- Each column requires its own data source
- Relationships are independent of each other
- Editing works for each foreign key column separately
- Performance depends on total data size

### Foreign Key with Cascading Dropdowns

Create dependent dropdown lists for foreign key columns.

```typescript
import { Component, ViewChild } from '@angular/core';
import { GridComponent, ForeignKeyService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-grid',
  template: `<ejs-grid #grid [dataSource]='orderData' [editSettings]='editSettings'>
               <e-columns>
                 <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true'></e-column>
                 <e-column field='EmployeeID' headerText='Department'
                           (change)='onDepartmentChange($event)'
                           [dataSource]='departments'></e-column>
                 <e-column field='SubEmployeeID' headerText='Employee'
                           [dataSource]='filteredEmployees'></e-column>
               </e-columns>
             </ejs-grid>`,
  providers: [ForeignKeyService]
})
export class GridComponent {
  @ViewChild('grid') gridInstance?: GridComponent;

  public orderData: any[] = [];
  public departments: any[] = [];
  public allEmployees: any[] = [];
  public filteredEmployees: any[] = [];
  public editSettings = { mode: 'Dialog', allowEditing: true };

  onDepartmentChange(args: any): void {
    // Filter employees based on selected department
    this.filteredEmployees = this.allEmployees.filter(
      emp => emp.DepartmentID === args.rowData.EmployeeID
    );
  }
}
```

### Foreign Key Column with Templates

Render custom HTML in foreign key columns using templates.

```typescript
@Component({
  selector: 'app-grid',
  template: `<ejs-grid [dataSource]='orderData'>
               <e-columns>
                 <e-column field='OrderID' headerText='Order ID' width=100></e-column>
                 <e-column field='EmployeeID' headerText='Employee Profile' 
                           [template]='employeeTemplate'></e-column>
               </e-columns>
             </ejs-grid>`,
  providers: [ForeignKeyService]
})
export class GridComponent {
  public orderData: any[] = [];
  public employeeData: any[] = [];

  employeeTemplate = (args: any) => {
    const employee = this.getEmployee(args.EmployeeID);
    return `<div class='employee-profile'>
              <img src='${employee.Photo}' alt='Photo'>
              <span>${employee.FirstName} ${employee.LastName}</span>
            </div>`;
  };

  private getEmployee(id: number): any {
    return this.employeeData.find(e => e.EmployeeID === id);
  }
}
```

---

## Performance Optimization

### Best Practices

1. **Use Remote Data for Large Datasets**
   - Reduces memory consumption
   - Improves initial load time
   - Enables server-side operations

2. **Implement Pagination**
   ```typescript
   @Component({
     template: `<ejs-grid [dataSource]='orderData' 
                          [allowPaging]='true' 
                          [pageSettings]='{ pageSize: 50 }'>
                </ejs-grid>`
   })
   export class GridComponent { }
   ```

3. **Use Virtual Scrolling**
   ```html
   <ejs-grid [enableVirtualization]='true'>
   </ejs-grid>
   ```

4. **Cache Foreign Data**
   ```typescript
   private employeeCache: Map<number, any> = new Map();

   getEmployee(id: number): any {
     if (!this.employeeCache.has(id)) {
       this.employeeCache.set(id, this.fetchEmployee(id));
     }
     return this.employeeCache.get(id);
   }
   ```

---

## Troubleshooting Common Issues

### Issue: Foreign Key Values Not Displaying

**Symptoms:** Grid shows numeric IDs instead of meaningful data

**Solutions:**
1. Verify `foreignKeyField` matches the foreign data source field name
2. Ensure `foreignKeyValue` field exists in the foreign data source
3. Confirm foreign data source is properly bound
4. Check browser console for errors

```typescript
// Verify configuration
console.log('Foreign Key Field:', column.foreignKeyField);
console.log('Foreign Key Value:', column.foreignKeyValue);
console.log('Data Source:', column.dataSource);
```

### Issue: Editing Dropdown Shows No Data

**Symptoms:** Edit dropdown appears empty

**Solutions:**
1. Verify `dataSource` property contains data
2. Check that `ForeignKeyService` is injected
3. Ensure `foreignKeyValue` field contains valid data
4. Test with simpler dropdown configuration

### Issue: Remote Data Not Loading

**Symptoms:** Foreign data from remote API doesn't load

**Solutions:**
1. Verify API endpoint URL is correct
2. Check CORS configuration on server
3. Ensure proper adaptor is used (ODataV4Adaptor, WebApiAdaptor, etc.)
4. Inspect network requests in browser DevTools

```typescript
// Debug remote data loading
const dataManager = new DataManager({
  url: 'https://api.example.com/employees',
  adaptor: new ODataV4Adaptor(),
  crossDomain: true
});

dataManager.executeQuery(new Query()).then((result) => {
  console.log('Remote data loaded:', result);
});
```

---

## API Reference

### Column Properties for Foreign Keys

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `field` | string | - | Field name in the grid data |
| `foreignKeyField` | string | - | Field in foreign data source that matches the ID |
| `foreignKeyValue` | string | - | Field from foreign data source to display |
| `dataSource` | Array \| DataManager | - | Foreign data source |
| `editParams` | object | - | Customize edit template |
| `filterParams` | object | - | Customize filter template |
| `template` | string \| function | - | Custom cell template |
| `filterBarTemplate` | string \| function | - | Custom filter bar template |

### Useful Methods

| Method | Parameters | Returns | Description |
|--------|-----------|---------|-------------|
| `getColumnByField()` | fieldName: string | Column | Retrieve column by field name |
| `getForeignData()` | column: Column, data: object | any[] | Get foreign data for a row |

---

## Conclusion

Foreign key columns provide powerful capabilities for displaying related data in the Angular Data Grid. By following the patterns and best practices outlined in this guide, you can implement robust solutions for complex data relationships.

**Key Takeaways:**
- Use local data for small reference tables
- Leverage remote data for scalability
- Customize editing and filtering for better UX
- Implement aggregations for meaningful summaries
- Consider performance optimization for large datasets

For more information, refer to the [official documentation](https://ej2.syncfusion.com/angular/documentation/grid/foreign-key-column/) and [API reference](https://ej2.syncfusion.com/angular/documentation/api/grid/column/).

---

## Additional Resources

- [Getting Started with Angular Data Grid](https://ej2.syncfusion.com/angular/documentation/grid/getting-started/)
- [Column Configuration Guide](https://ej2.syncfusion.com/angular/documentation/grid/column/)
- [Data Binding Documentation](https://ej2.syncfusion.com/angular/documentation/grid/data-binding/)
- [Editing Features](https://ej2.syncfusion.com/angular/documentation/grid/editing/)
- [Filtering Guide](https://ej2.syncfusion.com/angular/documentation/grid/filtering/)
