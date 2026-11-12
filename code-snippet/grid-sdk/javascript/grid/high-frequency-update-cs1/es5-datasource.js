var cities = ['California', 'Texas', 'Florida', 'New York', 'Illinois', 'Washington', 'Arizona', 'Georgia', 'Ohio', 'North Carolina'];
var speeds = ['Slow (22kW)', 'Fast (50kW)', 'Rapid (150kW)', 'Ultra Fast (350kW)'];

var chargingStationData = (() => {
    var result = [];
    for (var i = 1; i <= 10000; i++) {
        var availableSlots = Math.floor(Math.random() * 20);
        var activeSessions = Math.floor(Math.random() * (20 - availableSlots));
        var energy = +(Math.random() * 500 + 50).toFixed(2);
        result.push({
            StationID: 'STN' + i.toString().padStart(5, '0'),
            City: cities[Math.floor(Math.random() * cities.length)],
            AvailableSlots: availableSlots,
            ChargingSpeed: speeds[Math.floor(Math.random() * speeds.length)],
            ActiveSessions: activeSessions,
            EnergyDelivered: energy,
            Revenue: +(energy * (0.2 + Math.random() * 0.3)).toFixed(2),
            LastMaintenanceDate: new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
        });
    }
    return result;
})();
