import { ColumnDirective, ColumnsDirective, GridComponent, VirtualScroll, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { chargingStationData } from './datasource';

class App extends React.Component<{}, { syncTime: string; asyncTime: string }> {
    private grid: GridComponent | null = null;
    private previousRevenue: Map<string, number> = new Map();

    state = {
        syncTime: '',
        asyncTime: ''
    };

    normalUpdate = (): void => {
        const start = performance.now();
        const visibleStations: any[] = this.grid!.getCurrentViewRecords();
        chargingStationData.forEach((station: any) => {
            this.previousRevenue.set(station.StationID, station.Revenue);
            station.Revenue = station.Revenue + 10;
        });
        setTimeout(() => {
            visibleStations.forEach((station: any) => {
                this.grid!.setCellValue(station.StationID, 'Revenue', station.Revenue);
            });
            this.setState({ syncTime: `Sync Update took ${(performance.now() - start).toFixed(2)} ms` });
        });
    };

    asyncUpdate = async (): Promise<void> => {
        const start = performance.now();
        const visibleStations: any[] = this.grid!.getCurrentViewRecords();
        chargingStationData.forEach((station: any) => {
            this.previousRevenue.set(station.StationID, station.Revenue);
            station.Revenue = station.Revenue + 20;
        });
        await Promise.all(visibleStations.map((station: any) =>
            this.grid!.setCellValueAsync(station.StationID, 'Revenue', station.Revenue, 0)
        ));
        this.setState({ asyncTime: `Async Update took ${(performance.now() - start).toFixed(2)} ms` });
    };

    revenueTemplate = (props: any): JSX.Element => {
        const revenue = props.Revenue == null ? 0 : props.Revenue;
        const previousValue = this.previousRevenue.get(props.StationID);
        const previous = previousValue == null ? revenue : previousValue;
        const isUp = revenue - previous >= 0;
        return (<div className={`revenue-cell ${isUp ? 'above-0' : 'below-0'}`}>
            <span className='rowcell-left'>
                <svg width='12' height='12' viewBox='0 0 24 24' fill={isUp ? 'green' : 'red'}>
                    <path d={isUp ? 'M12 4l-8 8h6v8h4v-8h6z' : 'M12 20l8-8h-6V4h-4v8H4z'} />
                </svg>${revenue.toFixed(2)}
            </span>
            <span className='rowcell-right'>Prev: ${previous.toFixed(2)}</span>
        </div>);
    };

    render() {
        return (<div>
            <div style={{ display: 'flex', gap: '20px', margin: '5px', alignItems: 'center' }}>
                <ButtonComponent cssClass='e-outline' onClick={this.normalUpdate}>Normal update</ButtonComponent>
                <span style={{ fontWeight: 'bold', color: '#555' }}>{this.state.syncTime}</span>
                <ButtonComponent cssClass='e-outline' onClick={this.asyncUpdate}>Async update</ButtonComponent>
                <span style={{ fontWeight: 'bold', color: '#555' }}>{this.state.asyncTime}</span>
            </div>
            <GridComponent ref={g => this.grid = g} dataSource={chargingStationData} height={480} enableVirtualization={true}>
                <ColumnsDirective>
                    <ColumnDirective field='StationID' headerText='Station ID' isPrimaryKey={true} width={120} />
                    <ColumnDirective field='City' headerText='Station Location' width={160} />
                    <ColumnDirective field='ChargingSpeed' headerText='Charging Speed' width={160} />
                    <ColumnDirective field='ActiveSessions' headerText='Active Slots' textAlign='Right' width={130} />
                    <ColumnDirective field='AvailableSlots' headerText='Available Slots' textAlign='Right' width={150} />
                    <ColumnDirective field='Revenue' headerText='Revenue' textAlign='Center' template={this.revenueTemplate} format='C2' width={180} />
                    <ColumnDirective field='LastMaintenanceDate' headerText='Maintenance Date' textAlign='Right' type='date' format='dd/MM/yyyy' width={140} />
                </ColumnsDirective>
                <Inject services={[VirtualScroll]} />
            </GridComponent>
        </div>);
    }
}

export default App;
