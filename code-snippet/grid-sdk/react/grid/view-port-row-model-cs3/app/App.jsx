import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-grids';
import { DomVirtualization, Sort, Filter, Page, InfiniteScroll } from '@syncfusion/ej2-react-grids';

import { DataManager, Query, Predicate } from '@syncfusion/ej2-data';
import { chargingStationData } from './datasource';

function App() {
  const gridRef = useRef(null);
  const pageSize = 50;
  const [gridData, setGridData] = useState({ result: chargingStationData.slice(0, pageSize), count: chargingStationData.length });

  const buildPredicate = (item) => {
    if (!item.isComplex) {
      return new Predicate(item.field, item.operator, item.value, item.ignoreCase, item.ignoreAccent);
    }
    let result = null;
    for (const sub of item.predicates || []) {
      const p = buildPredicate(sub);
      result = result === null ? p : (item.condition || 'and').toLowerCase() === 'or' ? result.or(p) : result.and(p);
    }
    return result;
  };

  // Simulates a server: applies filter, sort, and paging on the local dataset
  // and returns only the rows requested by the viewport.
  const processRequest = (state) => {
    const request = state;
    const manager = new DataManager(chargingStationData);
    const requestType = request.action && request.action.requestType;
    if (request.dataSource && ['filterchoicerequest', 'filterSearchBegin', 'stringfilterrequest'].indexOf(requestType) !== -1) {
      if (request.action.query) {
        manager.executeQuery(request.action.query).then((e: any) => {
          request.dataSource(e.result);
        });
      } else {
        const field = request.action.field;
        const seenValues = {};
        const choices = [];
        chargingStationData.forEach((item) => {
          const value = item[field];
          const key = value instanceof Date ? `date:${value.getTime()}` : `${typeof value}:${value}`;
          if (!seenValues[key]) {
            seenValues[key] = true;
            choices.push({ [field]: value });
          }
        });
        request.dataSource(choices);
      }
      return;
    }
    const query = new Query();
    if (request.where && request.where.length) {
      query.where(buildPredicate(request.where[0]));
    }
    if (request.sorted && request.sorted.length) {
      request.sorted.forEach((s) => query.sortBy(s.name, s.direction));
    }
    const skip = request.skip || 0;
    const take = request.take || pageSize;
    query.page(Math.floor(skip / take) + 1, take).requiresCount();
    manager.executeQuery(query).then((e) => {
      setGridData({ result: e.result, count: e.count });
    });
  };

  useEffect(() => {
    setGridData({ result: chargingStationData.slice(0, pageSize), count: chargingStationData.length });
  }, []);

  return (
    <GridComponent
      ref={gridRef}
      dataSource={gridData}
      dataStateChange={processRequest}
      height={400}
      enableInfiniteScrolling={true}
      domVirtualizationSettings={{ rowBuffer: 5 }}
      pageSettings={{ pageSize }}
      allowSorting={true}
      allowFiltering={true}
      filterSettings={{ type: 'CheckBox' }}
    >
      <ColumnsDirective>
        <ColumnDirective field='StationID' headerText='Station ID' width='120' isPrimaryKey={true} />
        <ColumnDirective field='City' headerText='Station Location' width='160' />
        <ColumnDirective field='ChargingSpeed' headerText='Charging Speed' width='160' />
        <ColumnDirective field='ActiveSessions' headerText='Active Slots' textAlign='Right' width='130' />
        <ColumnDirective field='AvailableSlots' headerText='Available Slots' textAlign='Right' width='150' />
        <ColumnDirective field='LastMaintenanceDate' headerText='Maintenance Date' textAlign='Right' type='date' format='dd/MM/yyyy' width='170' allowFiltering={false} />
        <ColumnDirective field='Revenue' headerText='Revenue' textAlign='Right' format='C2' width='110' />
      </ColumnsDirective>
      <Inject services={[DomVirtualization, Sort, Filter, Page, InfiniteScroll]} />
    </GridComponent>
  );
}

export default App;
