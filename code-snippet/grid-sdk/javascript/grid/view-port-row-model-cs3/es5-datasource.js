var cities = ['California', 'Texas', 'Florida', 'New York', 'Illinois', 'Washington', 'Arizona', 'Georgia', 'Ohio', 'North Carolina'];
var speeds = ['Slow (22kW)', 'Fast (50kW)', 'Rapid (150kW)', 'Ultra Fast (350kW)'];
var statuses = ['Operational', 'Under Maintenance', 'Fault', 'Scheduled'];

var chargingStationData = (() => {
  var data = [];
  for (var i = 1; i <= 10000; i++) {
    var available = Math.floor(Math.random() * 20);
    var active = Math.floor(Math.random() * (20 - available));
    var energy = +(Math.random() * 500 + 50).toFixed(2);
    var revenue = +(energy * (0.2 + Math.random() * 0.3)).toFixed(2);
    data.push({
      StationID: `STN${i.toString().padStart(5, '0')}`,
      City: cities[Math.floor(Math.random() * cities.length)],
      AvailableSlots: available,
      ChargingSpeed: speeds[Math.floor(Math.random() * speeds.length)],
      ActiveSessions: active,
      EnergyDelivered: energy,
      Revenue: revenue,
      MaintenanceStatus: statuses[Math.floor(Math.random() * statuses.length)],
      IsHighDemand: active > 10,
      LastMaintenanceDate: new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
    });
  }
  return data;
})();
