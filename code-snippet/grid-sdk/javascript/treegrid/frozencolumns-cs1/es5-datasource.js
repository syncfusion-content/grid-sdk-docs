/**
 * TreeGrid DataSource
 */

var summaryRowData = [{
    'FreightID': 'CX2389NK',
    'FreightName': 'Maersk Edibles Co.',
    'TotalUnits': 598,
    'TotalCosts': 27838,
    'UnitWeight': 241,
    'children': [{

        'FreightID': 'QW4567OP',
        'FreightName': 'Chang',
        'TotalUnits': 123,
        'TotalCosts': 3400,
        'UnitWeight': 50,
    }, {
        'FreightID': 'QW3458BH',
        'FreightName': 'Aniseed Syrup',
        'TotalUnits': 89,
        'TotalCosts': 5900,
        'UnitWeight': 87,
    }, {
        'FreightID': 'QW8967OH',
        'FreightName': 'Chef Anton',
        'TotalUnits': 46,
        'TotalCosts': 9578,
        'UnitWeight': 54,
    }, {

        'FreightID': 'QW6549NJ',
        'FreightName': 'Chef Antons Gumbo Mix',
        'TotalUnits': 340,
        'TotalCosts': 8960,
        'UnitWeight': 50,
    }]
},
{
    'FreightID': 'DW8954IO',
    'FreightName': 'Aeon fitness inc.',
    'TotalUnits': 1720,
    'TotalCosts': 24367,
    'UnitWeight': 296,
    'children': [
        {
            'FreightID': 'UF5647YH',
            'FreightName': 'Reebox CrossFit Back Bay',
            'TotalUnits': 600,
            'TotalCosts': 8700,
            'UnitWeight': 73,
        },
        {
            'FreightID': 'UF1290LK',
            'FreightName': 'The Green Microgym',
            'TotalUnits': 569,
            'TotalCosts': 8765,
            'UnitWeight': 90,
        },
        {
            'FreightID': 'UF8956KU',
            'FreightName': 'DeFrancos',
            'TotalUnits': 456,
            'TotalCosts': 4589,
            'UnitWeight': 68,
        },
        {
            'FreightID': 'UF7464JK',
            'FreightName': 'Westside Barbell',
            'TotalUnits': 95,
            'TotalCosts': 2313,
            'UnitWeight': 65,
        }],
    },
    {
        'FreightID': 'EJ9456KN',
        'FreightName': 'Sun technologies inc',
        'TotalUnits': 331,
        'TotalCosts': 22933,
        'UnitWeight': 192,
        'children': [
            {
                'FreightID': 'GH2367OP',
                'FreightName': 'Haier Group',
                'TotalUnits': 78,
                'TotalCosts': 6789,
                'UnitWeight': 23,
            },
            {
                'FreightID': 'GH4309TH',
                'FreightName': 'Panda Electronics',
                'TotalUnits': 90,
                'TotalCosts': 8999,
                'UnitWeight': 48,
            },
            {
                'FreightID': 'GH3494SD',
                'FreightName': 'Jiangsu Etern',
                'TotalUnits': 36,
                'TotalCosts': 4356,
                'UnitWeight': 56,
            },
            {
                'FreightID': 'GH3213FR',
                'FreightName': 'Zhejiang Fuchunjiang',
                'TotalUnits': 127,
                'TotalCosts': 2789,
                'UnitWeight': 65,
            }],

        }
];

var virtualData = [];
var dataSource = function() {
    var parent = -1;
    var names = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI','HILAA', 'ERNSH', 'CENTC',
'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
    for (var i = 0; i < 50000; i++) {
        if (i % 5 === 0) {
            parent = i;
        }
        if (i % 5 !== 0) {
            var num = isNaN((virtualData.length % parent)- 1) ?  0 : (virtualData.length % parent) - 1;
            virtualData[num].Crew.push({
                'TaskID': i + 1,
                'FIELD1': names[Math.floor(Math.random() * names.length)],
                'FIELD2': 1967 + (i % 10),
                'FIELD3': Math.floor(Math.random() * 200),
                'FIELD4': Math.floor(Math.random() * 100),
                'FIELD5': Math.floor(Math.random() * 2000),
                'FIELD6': Math.floor(Math.random() * 1000),
                'FIELD7': Math.floor(Math.random() * 100),
                'FIELD8': Math.floor(Math.random() * 10),
                'FIELD9': Math.floor(Math.random() * 10),
                'FIELD10': Math.floor(Math.random() * 100),
                'FIELD11': Math.floor(Math.random() * 100),
                'FIELD12': Math.floor(Math.random() * 1000),
                'FIELD13': Math.floor(Math.random() * 10),
                'FIELD14': Math.floor(Math.random() * 10),
                'FIELD15': Math.floor(Math.random() * 1000),
                'FIELD16': Math.floor(Math.random() * 200),
                'FIELD17': Math.floor(Math.random() * 300),
                'FIELD18': Math.floor(Math.random() * 400),
                'FIELD19': Math.floor(Math.random() * 500),
                'FIELD20': Math.floor(Math.random() * 700),
                'FIELD21': Math.floor(Math.random() * 800),
                'FIELD22': Math.floor(Math.random() * 1000),
                'FIELD23': Math.floor(Math.random() * 2000),
                'FIELD24': Math.floor(Math.random() * 150),
                'FIELD25': Math.floor(Math.random() * 1000),
                'FIELD26': Math.floor(Math.random() * 100),
                'FIELD27': Math.floor(Math.random() * 400),
                'FIELD28': Math.floor(Math.random() * 600),
                'FIELD29': Math.floor(Math.random() * 500),
                'FIELD30': Math.floor(Math.random() * 300),
            });
        } else {
            virtualData.push({
                'TaskID': i + 1,
                'Crew': [],
                'FIELD1': names[Math.floor(Math.random() * names.length)],
                'FIELD2': 1967 + (i % 10),
                'FIELD3': Math.floor(Math.random() * 200),
                'FIELD4': Math.floor(Math.random() * 100),
                'FIELD5': Math.floor(Math.random() * 2000),
                'FIELD6': Math.floor(Math.random() * 1000),
                'FIELD7': Math.floor(Math.random() * 100),
                'FIELD8': Math.floor(Math.random() * 10),
                'FIELD9': Math.floor(Math.random() * 10),
                'FIELD10': Math.floor(Math.random() * 100),
                'FIELD11': Math.floor(Math.random() * 100),
                'FIELD12': Math.floor(Math.random() * 1000),
                'FIELD13': Math.floor(Math.random() * 10),
                'FIELD14': Math.floor(Math.random() * 10),
                'FIELD15': Math.floor(Math.random() * 1000),
                'FIELD16': Math.floor(Math.random() * 200),
                'FIELD17': Math.floor(Math.random() * 300),
                'FIELD18': Math.floor(Math.random() * 400),
                'FIELD19': Math.floor(Math.random() * 500),
                'FIELD20': Math.floor(Math.random() * 700),
                'FIELD21': Math.floor(Math.random() * 800),
                'FIELD22': Math.floor(Math.random() * 1000),
                'FIELD23': Math.floor(Math.random() * 2000),
                'FIELD24': Math.floor(Math.random() * 150),
                'FIELD25': Math.floor(Math.random() * 1000),
                'FIELD26': Math.floor(Math.random() * 100),
                'FIELD27': Math.floor(Math.random() * 400),
                'FIELD28': Math.floor(Math.random() * 600),
                'FIELD29': Math.floor(Math.random() * 500),
                'FIELD30': Math.floor(Math.random() * 300),
            });
        }
    }
};

var summaryData = [
    {
        ID: '1',
        Name: 'Order 1',
        units: '1395',
        unitPrice: '47',
        price: '13366',
        subtasks: [
            { ID: '1.1', Name: 'Mackerel', category: 'Frozen seafood', units: '235', unitPrice: '12', price: '2820' },
            { ID: '1.2', Name: 'Yellowfin Tuna', category: 'Frozen seafood', units: '324', unitPrice: '8', price: '2592' },
            { ID: '1.3', Name: 'Herrings', category: 'Frozen seafood', units: '488', unitPrice: '11', price: '5268' },
            { ID: '1.4', Name: 'Preserved Olives', category: 'Edible', units: '125', unitPrice: '9', price: '1125' },
            { ID: '1.5', Name: 'Sweet corn Frozen', category: 'Edible', units: '223', unitPrice: '7', price: '1561' }
         ]
    },
    {
        ID: '2',
        Name: 'Order 2',
        units: '1944',
        unitPrice: '58',
        price: '21233',
        subtasks: [
            { ID: '2.1', Name: 'Tilapias', category: 'Frozen seafood', units: '278', unitPrice: '15', price: '4170' },
            { ID: '2.2', Name: 'White Shrimp', category: 'Frozen seafood', units: '560', unitPrice: '7', price: '3920' },
            { ID: '2.3', Name: 'Fresh Cheese', category: 'Dairy', units: '323', unitPrice: '12', price: '3876' },
            { ID: '2.4', Name: 'Blue Veined Cheese', category: 'Dairy', units: '370', unitPrice: '15', price: '5550' },
            { ID: '2.5', Name: 'Butter', category: 'Dairy', units: '413', unitPrice: '9', price: '3717' }
        ]
    },
    {
        ID: '3',
        Name: 'Order 3',
        units: '1120',
        unitPrice: '33',
        price: '10880',
        subtasks: [
            { ID: '3.1', Name: 'Lead glassware', category: 'Solid crystals', units: '542', unitPrice: '6', price: '3252' },
            { ID: '3.2', Name: 'Pharmaceutical Glassware', category: 'Solid crystals', units: '324', unitPrice: '11', price: '3564' },
            { ID: '3.3', Name: 'Glass beads', category: 'Solid crystals', units: '254', unitPrice: '16', price: '4064' }
        ]
    }

];
var sampleData =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    },
    {
        taskID: 12,
        taskName: 'Implementation Phase',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        progress: 66,
        subtasks: [
            {
                taskID: 13,
                taskName: 'Phase 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'High',
                approved: false,
                progress: 50,
                duration: 11,
                subtasks: [{
                    taskID: 14,
                    taskName: 'Implementation Module 1',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'Normal',
                    duration: 11,
                    progress: 10,
                    approved: false,
                    subtasks: [
                        { taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                        { taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 17, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 18, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                        { taskID: 19, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '50', priority: 'Low', approved: true }

                    ]
                }]
            },
            {
                taskID: 21,
                taskName: 'Phase 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/28/2017'),
                priority: 'High',
                approved: false,
                duration: 12,
                progress: 60,
                subtasks: [{
                    taskID: 22,
                    taskName: 'Implementation Module 2',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/28/2017'),
                    priority: 'Critical',
                    approved: false,
                    duration: 12,
                    progress: 90,
                    subtasks: [
                        { taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                        { taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                        { taskID: 25, taskName: 'Testing', startDate: new Date('02/21/2017'),
                            endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 26, taskName: 'Bug fix', startDate: new Date('02/25/2017'),
                            endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                        { taskID: 27, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'),
                            endDate: new Date('02/28/2017'), duration: 0, progress: '50', priority: 'Normal', approved: false }

                    ]
                }]
            },

            {
                taskID: 29,
                taskName: 'Phase 3',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/27/2017'),
                priority: 'Normal',
                approved: false,
                duration: 11,
                progress: 30,
                subtasks: [{
                    taskID: 30,
                    taskName: 'Implementation Module 3',
                    startDate: new Date('02/17/2017'),
                    endDate: new Date('02/27/2017'),
                    priority: 'High',
                    approved: false,
                    duration: 11,
                    progress: 60,
                    subtasks: [
                        { taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                        { taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                        { taskID: 33, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                        { taskID: 34, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                        { taskID: 35, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                        { taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, progress: '50', priority: 'Critical', approved: false },
                    ]
                }]
            }
        ]
    }
];

var textWrapData = [
{
  taskID: 1,
  taskName: 'Design',
  startDate: new Date('02/10/2017'),
  endDate: new Date('02/14/2017'),
  duration: 3,
  progress: 86,
  priority: 'High',
  approved: false,
  subtasks: [
      { taskID: 2, taskName: 'Software Specification', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
      { taskID: 3, taskName: 'Develop prototype', startDate: new Date('02/10/2017'), endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
      { taskID: 4, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
      { taskID: 5, taskName: 'Design Documentation', startDate: new Date('02/13/2017'), endDate: new Date('02/14/2017'), duration: 2, progress: 100, approved: true },
      { taskID: 6, taskName: 'Design complete', startDate: new Date('02/14/2017'), endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
  ]
},
{
  taskID: 7,
  taskName: 'Implementation Phase',
  startDate: new Date('02/17/2017'),
  endDate: new Date('02/27/2017'),
  priority: 'Normal',
  approved: false,
  progress: 67,
  duration: 11,
  subtasks: [
      {
          taskID: 8,
          taskName: 'Phase 1',
          startDate: new Date('02/17/2017'),
          endDate: new Date('02/27/2017'),
          priority: 'High',
          approved: false,
          duration: 11,
          progress:87,
          subtasks: [{
              taskID: 9,
              taskName: 'Implementation Module 1',
              startDate: new Date('02/17/2017'),
              endDate: new Date('02/27/2017'),
              priority: 'Normal',
              duration: 11,
              progress: 64,
              approved: false,
              subtasks: [
                  { taskID: 10, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'High', approved: false },
                  { taskID: 11, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                  { taskID: 12, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                  { taskID: 13, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'Critical', approved: false },
                  { taskID: 14, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                  { taskID: 15, taskName: 'Phase 1 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }

              ]
          }]
      },

      {
          taskID: 16,
          taskName: 'Phase 2',
          startDate: new Date('02/17/2017'),
          endDate: new Date('02/28/2017'),
          priority: 'High',
          approved: false,
          duration: 12,
          progress: 56,
          subtasks: [{
              taskID: 17,
              taskName: 'Implementation Module 2',
              startDate: new Date('02/17/2017'),
              endDate: new Date('02/28/2017'),
              priority: 'Critical',
              approved: false,
              duration: 12,
              progress:87,
              subtasks: [
                  { taskID: 18, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Normal', approved: true },
                  { taskID: 19, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/20/2017'), duration: 4, progress: '50', priority: 'Critical', approved: true },
                  { taskID: 20, taskName: 'Testing', startDate: new Date('02/21/2017'), endDate: new Date('02/24/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                  { taskID: 21, taskName: 'Bug fix', startDate: new Date('02/25/2017'), endDate: new Date('02/26/2017'), duration: 2, progress: '0', priority: 'Low', approved: false },
                  { taskID: 22, taskName: 'Customer review meeting', startDate: new Date('02/27/2017'), endDate: new Date('02/28/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                  { taskID: 23, taskName: 'Phase 2 complete', startDate: new Date('02/28/2017'), endDate: new Date('02/28/2017'), duration: 0, progress:67, priority: 'Normal', approved: false }

              ]
          }]
      },

      {
          taskID: 24,
          taskName: 'Phase 3',
          startDate: new Date('02/17/2017'),
          endDate: new Date('02/27/2017'),
          priority: 'Normal',
          approved: false,
          duration: 11,
          progress: 64,
          subtasks: [{
              taskID: 25,
              taskName: 'Implementation Module 3',
              startDate: new Date('02/17/2017'),
              endDate: new Date('02/27/2017'),
              priority: 'High',
              approved: false,
              duration: 11,
              progress: 54,
              subtasks: [
                  { taskID: 26, taskName: 'Development Task 1', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Low', approved: true },
                  { taskID: 27, taskName: 'Development Task 2', startDate: new Date('02/17/2017'), endDate: new Date('02/19/2017'), duration: 3, progress: '50', priority: 'Normal', approved: false },
                  { taskID: 28, taskName: 'Testing', startDate: new Date('02/20/2017'), endDate: new Date('02/21/2017'), duration: 2, progress: '0', priority: 'Critical', approved: true },
                  { taskID: 29, taskName: 'Bug fix', startDate: new Date('02/24/2017'), endDate: new Date('02/25/2017'), duration: 2, progress: '0', priority: 'High', approved: false },
                  { taskID: 30, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'), endDate: new Date('02/27/2017'), duration: 2, progress: '0', priority: 'Normal', approved: true },
                  { taskID: 31, taskName: 'Phase 3 complete', startDate: new Date('02/27/2017'), endDate: new Date('02/27/2017'), duration: 0, priority: 'Critical', approved: false },

              ]
          }]
      }
  ]
}
];

var textdata = [{
    'Name': 'Robert King',
    'FullName': 'RobertKing',
    'Designation': 'Chief Executive Officer',
    'EmployeeID': '1',
    'EmpID': 'EMP001',
    'Address': '507 - 20th Ave. E.Apt. 2A, Seattle',
    'Contact': '(206) 555-9857',
    'Country': 'USA',
    'DOB': new Date('2/15/1963'),

    'Children': [{
        'Name': 'David william',
        'FullName': 'DavidWilliam',
        'Designation': 'Vice President',
        'EmployeeID': '2',
        'EmpID': 'EMP004',
        'Address': '722 Moss Bay Blvd., Kirkland',
        'Country': 'USA',
        'Contact': '(206) 555-3412',
        'DOB': new Date('5/20/1971'),


        'Children': [{
            'Name': 'Nancy Davolio',
            'FullName': 'NancyDavolio',
            'Designation': 'Marketing Executive',
            'EmployeeID': '3',
            'EmpID': 'EMP035',
            'Address': '4110 Old Redmond Rd., Redmond',
            'Country': 'USA',
            'Contact': '(206) 555-8122',
            'DOB': new Date('3/19/1966'),
            'Children': [
                {
                    'Name': 'Andrew Fuller',
                    'FullName': 'AndrewFuller',
                    'Designation': 'Sales Representative',
                    'EmployeeID': '4',
                    'EmpID': 'EMP045',
                    'Address': '14 Garrett Hill, London',
                    'Country': 'UK',
                    'Contact': '(71) 555-4848',
                    'DOB': new Date('9/20/1980')
                },
            {
                'Name': 'Anne Dodsworth',
                'FullName': 'AnneDodsworth',
                'Designation': 'Sales Representative',
                'EmployeeID': '5',
                'EmpID': 'EMP091',
                'Address': '4726 - 11th Ave. N.E., Seattle',
                'Country': 'USA',
                'Contact': '(206) 555-1189',
                'DOB': new Date('10/19/1989')
            },
            {
                'Name': 'Michael Suyama',
                'FullName': 'MichaelSuyama',
                'Designation': 'Sales Representative',
                'EmployeeID': '6',
                'EmpID': 'EMP110',
                'Address': 'Coventry House Miner Rd., London',
                'Country': 'UK',
                'Contact': '(71) 555-3636',
                'DOB': new Date('11/02/1987')
            },
            {
                'Name': 'Janet Leverling',
                'FullName': 'JanetLeverling',
                'Designation': 'Sales Coordinator',
                'EmployeeID': '7',
                'EmpID': 'EMP131',
                'Address': 'Edgeham Hollow Winchester Way, London',
                'Country': 'UK',
                'Contact': '(71) 555-3636',
                'DOB': new Date('11/06/1990')
            },
            ]

        },
        {
            'Name': 'Romey Wilson',
            'FullName': 'RomeyWilson',
            'Designation': 'Sales Executive',
            'EmployeeID': '8',
            'EmpID': 'EMP039',
            'Address': '7 Houndstooth Rd., London',
            'Country': 'UK',
            'Contact': '(71) 555-3690',
            'DOB': new Date('02/02/1980'),
            'Children': [
            {
                'Name': 'Margaret Peacock',
                'FullName': 'MargaretPeacock',
                'Designation': 'Sales Representative',
                'EmployeeID': '9',
                'EmpID': 'EMP213',
                'Address': '4726 - 11th Ave. N.E., California',
                'Country': 'USA',
                'Contact': '(206) 555-1989',
                'DOB': new Date('01/21/1986')
            },
            {
                'Name': 'Laura Callahan',
                'FullName': 'LauraCallahan',
                'Designation': 'Sales Coordinator',
                'EmployeeID': '10',
                'EmpID': 'EMP201',
                'Address': 'Coventry House Miner Rd., London',
                'Country': 'UK',
                'Contact': '(71) 555-2222',
                'DOB': new Date( '12/01/1990')
            },
            {
                'Name': 'Steven Buchanan',
                'FullName': 'StevenBuchanan',
                'Designation': 'Sales Representative',
                'EmployeeID': '11',
                'EmpID': 'EMP197',
                'Address': '200 Lincoln Ave, Salinas, CA 93901',
                'Country': 'USA',
                'Contact': '(831) 758-7408',
                'DOB': new Date('03/23/1987')
            },
            {
                'Name': 'Tedd Lawson',
                'FullName': 'TeddLawson',
                'Designation': 'Sales Representative',
                'EmployeeID': '12',
                'EmpID': 'EMP167',
                'Address': '200 Lincoln Ave, Salinas, CA 93901',
                'Country': 'USA',
                'Contact': '(831) 758-7368 ',
                'DOB': new Date('08/09/1989')
            },
            ]
        }]
    }]
}];

var headerData = [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '2' },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '1' },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
                endDate: new Date('02/07/2017'), duration: 5, progress: '100', resourceId: '1' },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
                endDate: new Date('02/07/2017'), duration: 0, predecessor: '3FS,4FS,5FS' }
        ]
    },
     {
         taskID: 6,
         taskName: 'Design',
         startDate: new Date('02/10/2017'),
         endDate: new Date('02/14/2017'),
         subtasks: [
             { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: '60', predecessor: '6FS', resourceId: '2' },
             { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),
                endDate: new Date('02/12/2017'), duration: 3, progress: '100', predecessor: '6FS', resourceId: '3' },
             { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),
                endDate: new Date('02/14/2017'), duration: 2, progress: '100', predecessor: '9FS', resourceId: '1' },
             { taskID: 10, taskName: 'Design complete', startDate: new Date('02/14/2017'),
                endDate: new Date('02/14/2017'), duration: 0, predecessor: '10FS' }
         ]
     },
     {
         taskID: 11,
         taskName: 'Implementation Phase',
         startDate: new Date('02/17/2017'),
         endDate: new Date('02/27/2017'),
         subtasks: [
             {
                 taskID: 12,
                 taskName: 'Phase',
                 startDate: new Date('02/17/2017'),
                 endDate: new Date('02/27/2017'),
                 subtasks: [{
                     taskID: 13,
                     taskName: 'Implementation Module',
                     startDate: new Date('02/17/2017'),
                     endDate: new Date('02/27/2017'),
                     subtasks: [
                        { taskID: 14, taskName: 'Development Task 1', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', predecessor: '11FS', resourceId: '3' },
                        { taskID: 15, taskName: 'Development Task 2', startDate: new Date('02/17/2017'),
                            endDate: new Date('02/19/2017'), duration: 3, progress: '50', predecessor: '11FS', resourceId: '3' },
                        { taskID: 16, taskName: 'Testing', startDate: new Date('02/20/2017'),
                            endDate: new Date('02/21/2017'), duration: 2, progress: '0', predecessor: '15FS,16FS', resourceId: '4' },
                        { taskID: 17, taskName: 'Bug fix', startDate: new Date('02/24/2017'),
                            endDate: new Date('02/25/2017'), duration: 2, progress: '0', predecessor: '17FS', resourceId: '4' },
                        { taskID: 18, taskName: 'Customer review meeting', startDate: new Date('02/26/2017'),
                            endDate: new Date('02/27/2017'), duration: 2, progress: '0', predecessor: '18FS', resourceId: '1' },
                        { taskID: 19, taskName: 'Phase complete', startDate: new Date('02/27/2017'),
                            endDate: new Date('02/27/2017'), duration: 0, predecessor: '19FS' }
                     ]
                 }]
             }
         ]
     }
];

var stackedData = [
    {
        orderID: '1',
        orderName: 'Order 1',
        orderDate: new Date('02/03/2017'),
        shippedDate: new Date('10/03/2019'),
        units: '195',
        unitPrice: '47.00',
        price: '133.66',
        shipMentCategory: 'seafood',
        subtasks: [
            { orderID: '1.1', orderName: 'Mackerel', shipMentCategory: 'Frozen seafood', units: '235',
                orderDate: new Date('02/03/2017'), shippedDate: new Date('05/13/2019'), unitPrice: '12.00', price: '28.20' },
            { orderID: '1.2', orderName: 'Yellowfin Tuna', shipMentCategory: 'Frozen seafood', units: '324',
                orderDate: new Date('05/03/2017'), shippedDate: new Date('05/22/2019'), unitPrice: '8.00', price: '25.92' },
            { orderID: '1.3', orderName: 'Herrings', shipMentCategory: 'Frozen seafood', units: '488',
                orderDate: new Date('10/03/2017'), shippedDate: new Date('10/14/2019'), unitPrice: '11.00', price: '52.68' },
            { orderID: '1.4', orderName: 'Preserved Olives', shipMentCategory: 'Edible', units: '125',
                orderDate: new Date('08/03/2017'), shippedDate: new Date('08/03/2019'), unitPrice: '9.00', price: '11.25' },
            { orderID: '1.5', orderName: 'Sweet corn Frozen', shipMentCategory: 'Edible', units: '223',
                orderDate: new Date('09/03/2017'), shippedDate: new Date('09/03/2019'), unitPrice: '7.00', price: '15.61' }
         ]
    },
    {
        orderID: '2',
        orderName: 'Order 2',
        orderDate: new Date('05/03/2017'),
        shippedDate: new Date('03/15/2019'),
        units: '144',
        unitPrice: '58',
        price: '212.33',
        shipMentCategory: 'seafood',
        subtasks: [
            { orderID: '2.1', orderName: 'Tilapias', shipMentCategory: 'Frozen seafood',
                orderDate: new Date('03/05/2017'), shippedDate: new Date('03/15/2019'), units: '278', unitPrice: '15.00', price: '41.70' },
            { orderID: '2.2', orderName: 'White Shrimp', shipMentCategory: 'Frozen seafood', units: '560',
                orderDate: new Date('07/05/2017'), shippedDate: new Date('03/15/2019'), unitPrice: '7.00', price: '39.20' },
            { orderID: '2.3', orderName: 'Fresh Cheese', shipMentCategory: 'Dairy', units: '323', unitPrice: '12.00',
                orderDate: new Date('09/03/2017'), shippedDate: new Date('09/19/2019'), price: '38.76' },
            { orderID: '2.4', orderName: 'Blue Veined Cheese', shipMentCategory: 'Dairy', units: '370', unitPrice: '15.00',
                orderDate: new Date('11/03/2017'), shippedDate: new Date('11/13/2019'), price: '55.50' },
            { orderID: '2.5', orderName: 'Butter', shipMentCategory: 'Dairy', units: '413', unitPrice: '9.00',
                orderDate: new Date('12/23/2017'), shippedDate: new Date('12/23/2019'), price: '37.17' }
        ]
    },
    {
        orderID: '3',
        orderName: 'Order 3',
        orderDate: new Date('03/10/2017'),
        shippedDate: new Date('03/20/2019'),
        units: '120',
        unitPrice: '33.00',
        price: '108.80',
        shipMentCategory: 'seafood',
        subtasks: [
            { orderID: '3.1', orderName: 'Lead glassware', shipMentCategory: 'Solid crystals',
                orderDate: new Date('08/03/2017'), shippedDate: new Date('03/18/2019'), units: '542', unitPrice: '6.00', price: '32.52' },
            { orderID: '3.2', orderName: 'Pharmaceutical Glassware', shipMentCategory: 'Solid crystals',
                orderDate: new Date('03/10/2017'), shippedDate: new Date('03/20/2019'), units: '324', unitPrice: '11.00', price: '35.64' },
            { orderID: '3.3', orderName: 'Glass beads', shipMentCategory: 'Solid crystals', units: '254',
                orderDate: new Date('03/02/2017'), shippedDate: new Date('03/22/2019'), unitPrice: '16.00', price: '40.64' }
        ]
    }

];

var formatData = [
    {
        orderID: '1',
        orderName: 'Order 1',
        orderDate: new Date('02/03/2017'),
        shippedDate: new Date('10/03/2018'),
        units: 1395,
        unitPrice: 47,
        price: 133.66,
        Category: 'seafood',
        subtasks: [
            { orderID: '1.1', orderName: 'Mackerel', Category: 'Frozen seafood', units: 235,
            orderDate: new Date('02/03/2017'), shippedDate: new Date('05/13/2018'), unitPrice: 12, price: 28.20 },
            { orderID: '1.2', orderName: 'Yellowfin Tuna', Category: 'Frozen seafood', units: 324,
            orderDate: new Date('05/03/2017'), shippedDate: new Date('05/22/2018'), unitPrice: 8, price: 25.92 },
            { orderID: '1.3', orderName: 'Herrings', Category: 'Frozen seafood', units: 488,
            orderDate: new Date('10/03/2017'), shippedDate: new Date('10/14/2018'), unitPrice: 11, price: 52.68 },
            { orderID: '1.4', orderName: 'Preserved Olives', Category: 'Edible', units: 125,
            orderDate: new Date('08/03/2017'), shippedDate: new Date('08/03/2018'), unitPrice: 9, price: 11.25 },
            { orderID: '1.5', orderName: 'Sweet corn Frozen', Category: 'Edible', units: 223,
            orderDate: new Date('09/03/2017'), shippedDate: new Date('09/03/2018'), unitPrice: 7, price: 15.61 }
         ]
    },
    {
        orderID: '2',
        orderName: 'Order 2',
        orderDate: new Date('05/03/2017'),
        shippedDate: new Date('03/15/2018'),
        units: 1944,
        unitPrice: 58,
        price: 212.33,
        Category: 'seafood',
        subtasks: [
            { orderID: '2.1', orderName: 'Tilapias', Category: 'Frozen seafood',
            orderDate: new Date('03/05/2017'), shippedDate: new Date('03/15/2018'), units: 278, unitPrice: 15, price: 41.70 },
            { orderID: '2.2', orderName: 'White Shrimp', Category: 'Frozen seafood', units: 56,
            orderDate: new Date('07/05/2017'), shippedDate: new Date('03/15/2018'), unitPrice: 7, price: 39.20 },
            { orderID: '2.3', orderName: 'Fresh Cheese', Category: 'Dairy', units: 323, unitPrice: 12,
            orderDate: new Date('09/03/2017'), shippedDate: new Date('09/19/2018'), price: 38.76 },
            { orderID: '2.4', orderName: 'Blue Veined Cheese', Category: 'Dairy', units: 370, unitPrice: 15,
            orderDate: new Date('11/03/2017'), shippedDate: new Date('11/13/2018'), price: 55.50 },
            { orderID: '2.5', orderName: 'Butter', Category: 'Dairy', units: 413, unitPrice: 9,
            orderDate: new Date('10/23/2017'), shippedDate: new Date('10/23/2018'), price: 37.17 }
        ]
    },
    {
        orderID: '3',
        orderName: 'Order 3',
        orderDate: new Date('03/10/2017'),
        shippedDate: new Date('03/20/2018'),
        units: 1120,
        unitPrice: 33,
        price: 108.80,
        Category: 'seafood',
        subtasks: [
            { orderID: '3.1', orderName: 'Lead glassware', Category: 'Solid crystals',
            orderDate: new Date('08/03/2017'), shippedDate: new Date('03/18/2018'), units: 542, unitPrice: 6, price: 32.52 },
            { orderID: '3.2', orderName: 'Pharmaceutical Glassware', Category: 'Solid crystals',
            orderDate: new Date('03/10/2017'), shippedDate: new Date('03/20/2018'), units: 324, unitPrice: 11, price: 35.64 },
            { orderID: '3.3', orderName: 'Glass beads', Category: 'Solid crystals', units: 254,
            orderDate: new Date('03/02/2017'), shippedDate: new Date('03/22/2018'), unitPrice: 16, price: 40.64 }
        ]
    }

];

var lockRowDropDownData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
31, 32, 33, 34, 35, 36];

var projectData = [
    { 'TaskID': 1, 'TaskName': 'Parent Task 1', 'StartDate': new Date('02/23/2017'), 'Duration': 3, 'Priority' : 'Normal',
    'EndDate': new Date('02/27/2017'), 'Progress': '40' },
    { 'TaskID': 2, 'TaskName': 'Child Task 1', 'StartDate': new Date('02/23/2017'), 'Duration': 4, 'Priority' : 'Low',
    'EndDate': new Date('02/27/2017'), 'Progress': '40', 'parentID': 1 },
    { 'TaskID': 3, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/23/2017'), 'Duration': 2, 'Priority' : 'Normal',
    'EndDate': new Date('02/27/2017'), 'Progress': '40', 'parentID': 1 },
    { 'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/23/2017'), 'Duration': 2, 'Priority' : 'Low',
    'EndDate': new Date('02/27/2017'), 'Progress': '40', 'parentID': 1 },
    { 'TaskID': 5, 'TaskName': 'Parent Task 2', 'StartDate': new Date('03/14/2017'), 'Duration': 6, 'Priority' : 'Normal',
    'EndDate': new Date('03/18/2017'), 'Progress': '40' },
    { 'TaskID': 6, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/02/2017'), 'Duration': 11, 'Priority' : 'High',
    'EndDate': new Date('03/06/2017'), 'Progress': '40', 'parentID': 5 },
    { 'TaskID': 7, 'TaskName': 'Child Task 2', 'StartDate': new Date('03/02/2017'), 'Duration': 7, 'Priority' : 'Critical',
    'EndDate': new Date('03/06/2017'), 'Progress': '40', 'parentID': 5 },
    { 'TaskID': 8, 'TaskName': 'Child Task 3', 'StartDate': new Date('03/02/2017'), 'Duration': 10, 'Priority' : 'Breaker',
    'EndDate': new Date('03/06/2017'), 'Progress': '40', 'parentID': 5 },
    { 'TaskID': 9, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/02/2017'), 'Duration': 15, 'Priority' : 'High',
    'EndDate': new Date('03/06/2017'), 'Progress': '40', 'parentID': 5 },
    { 'TaskID': 10, 'TaskName': 'Parent Task 3', 'StartDate': new Date('03/09/2017'), 'Duration': 17, 'Priority' : 'Breaker',
    'EndDate': new Date('03/13/2017'), 'Progress': '40' },
    { 'TaskID': 11, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/9/2017'), 'Duration': 0, 'Priority' : 'Low',
    'EndDate': new Date('03/13/2017'), 'Progress': '40', 'parentID': 10 },
    { 'TaskID': 12, 'TaskName': 'Child Task 2', 'StartDate': new Date('03/9/2017'), 'Duration': 10, 'Priority' : 'Breaker',
    'EndDate': new Date('03/13/2017'), 'Progress': '40', 'parentID': 10 },
    { 'TaskID': 13, 'TaskName': 'Child Task 3', 'StartDate': new Date('03/9/2017'), 'Duration': 11, 'Priority' : 'Normal',
    'EndDate': new Date('03/13/2017'), 'Progress': '40', 'parentID': 10 },
    { 'TaskID': 14, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/9/2017'), 'Duration': 1, 'Priority' : 'Normal',
    'EndDate': new Date('03/13/2017'), 'Progress': '40', 'parentID': 10 },
    { 'TaskID': 15, 'TaskName': 'Child Task 5', 'StartDate': new Date('03/9/2017'), 'Duration': 14, 'Priority' : 'Critical',
    'EndDate': new Date('03/13/2017'), 'Progress': '40', 'parentID': 10 }
];

var lineData = [
    [0, 6, 4, 1, 3, 2, 5],
    [5, 4, 6, 3, 1, 2, 0],
    [6, 4, 0, 3, 2, 5, 1],
    [4, 6, 3, 0, 1, 2, 5],
    [3, 5, 6, 4, 0, 1, 2],
    [1, 3, 4, 2, 5, 0, 6],
    [2, 4, 0, 3, 5, 6, 1],
    [5, 4, 6, 3, 1, 2, 0],
    [0, 6, 4, 1, 3, 2, 5],
    [6, 4, 0, 3, 2, 5, 1],
    [4, 6, 3, 0, 1, 2, 5],
    [3, 5, 6, 4, 0, 1, 2],
    [1, 3, 4, 2, 5, 0, 6],
    [2, 4, 0, 3, 5, 6, 1],
    [5, 4, 6, 3, 1, 2, 0],
    [0, 6, 4, 1, 3, 2, 5],
    [6, 4, 0, 3, 2, 5, 1],
    [4, 6, 3, 0, 1, 2, 5],
    [2, 4, 0, 3, 5, 6, 1],
    [3, 5, 6, 4, 0, 1, 2],
    [1, 3, 4, 2, 5, 0, 6]
];
var columnData = [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
    [4, 6, -3, 0, 1, 2, 5],
    [3, -5, -6, 4, 0, 1, 2],
    [1, 3, -4, -2, 5, 0, 6],
    [2, -4, 0, -3, 5, 6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, 6, 4, -1, -3, 2, 5],
    [6, -4, 0, -3, 2, 5, 1],
    [4, 6, -3, 0, -1, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
    [3, 5, 6, -4, 0, 1, 2],
    [1, 3, -4, 2, -5, 0, 6]
];
var sortData = [
    {
        orderID: '1',
        orderName: 'Order 1',
        orderDate: new Date('02/03/2017'),
        shippedDate: new Date('02/09/2017'),
        units: '1395',
        unitPrice: '47',
        price: '133.66',
        Category: 'Products',
        subtasks: [
            { orderID: '1.1', orderName: 'Mackerel', Category: 'Frozen seafood', units: '235',
            orderDate: new Date('03/03/2017'), shippedDate: new Date('03/10/2017'), unitPrice: '12', price: '28.20' },
            { orderID: '1.2', orderName: 'Yellowfin Tuna', Category: 'Frozen seafood', units: '324',
            orderDate: new Date('04/05/2017'), shippedDate: new Date('04/12/2017'), unitPrice: '8', price: '25.92' },
            { orderID: '1.3', orderName: 'Herrings', Category: 'Frozen seafood', units: '488',
            orderDate: new Date('05/08/2017'), shippedDate: new Date('05/15/2017'), unitPrice: '11', price: '52.68' },
            { orderID: '1.4', orderName: 'Preserved Olives', Category: 'Edible', units: '125',
            orderDate: new Date('06/10/2017'), shippedDate: new Date('06/17/2017'), unitPrice: '9', price: '11.25' },
            { orderID: '1.5', orderName: 'Sweet corn Frozen', Category: 'Edible', units: '223',
            orderDate: new Date('07/12/2017'), shippedDate: new Date('07/19/2019'), unitPrice: '7', price: '15.61' }
         ]
    },
    {
        orderID: '2',
        orderName: 'Order 2',
        orderDate: new Date('01/10/2018'),
        shippedDate: new Date('01/16/2018'),
        units: '1944',
        unitPrice: '58',
        price: '212.33',
        Category:'SeaFood',
        subtasks: [
            { orderID: '2.1', orderName: 'Tilapias', Category: 'Frozen seafood',
            orderDate: new Date('02/05/2018'), shippedDate: new Date('02/12/2018'), units: '278', unitPrice: '15', price: '41.70' },
            { orderID: '2.2', orderName: 'White Shrimp', Category: 'Frozen seafood', units: '560',
            orderDate: new Date('05/22/2018'), shippedDate: new Date('05/29/2018'), unitPrice: '7', price: '39.20' },
            { orderID: '2.3', orderName: 'Fresh Cheese', Category: 'Dairy', units: '323', unitPrice: '12',
            orderDate: new Date('06/08/2018'), shippedDate: new Date('06/15/2018'), price: '38.76' },
            { orderID: '2.4', orderName: 'Blue Veined Cheese', Category: 'Dairy', units: '370', unitPrice: '15',
            orderDate: new Date('07/10/2018'), shippedDate: new Date('07/17/2018'), price: '55.50' },
            { orderID: '2.5', orderName: 'Butter', Category: 'Dairy', units: '413', unitPrice: '9',
            orderDate: new Date('09/18/2018'), shippedDate: new Date('09/25/2018'), price: '37.17' }
        ]
    },
    {
        orderID: '3',
        orderName: 'Order 3',
        orderDate: new Date('09/10/2018'),
        shippedDate: new Date('09/20/2018'),
        units: '1120',
        unitPrice: '33',
        price: '108.80',
        Category:'Crystals',
        subtasks: [
            { orderID: '3.1', orderName: 'Lead glassware', Category: 'Solid crystals',
            orderDate: new Date('02/07/2018'), shippedDate: new Date('02/14/2018'), units: '542', unitPrice: '6', price: '32.52' },
            { orderID: '3.2', orderName: 'Pharmaceutical Glassware', Category: 'Solid crystals',
            orderDate: new Date('04/19/2018'), shippedDate: new Date('04/26/2018'), units: '324', unitPrice: '11', price: '35.64' },
            { orderID: '3.3', orderName: 'Glass beads', Category: 'Solid crystals', units: '254',
            orderDate: new Date('05/22/2018'), shippedDate: new Date('03/22/2018'), unitPrice: '16', price: '40.64' }
        ]
    }

];

var complexData =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        assignee: {firstName: 'Nancy', lastName: 'Davolio'},
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),assignee: {firstName: 'Andrew', lastName: 'Fuller'},
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),assignee: {firstName: 'Janet', lastName: 'Leverling'},
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),assignee: {firstName: 'Margaret', lastName: 'Peacock'},
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),assignee: {firstName: 'Steven', lastName: 'Buchanan'},
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        assignee: {firstName: 'Michael', lastName: 'Suyama'},
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),assignee: {firstName: 'Robert', lastName: 'King'},
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),assignee: {firstName: 'Laura', lastName: 'Challahan'},
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),assignee: {firstName: 'Anne', lastName: 'Dodsworth'},
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),assignee: {firstName: 'Tamer', lastName: 'Nancy'},
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),assignee: {firstName: 'Laura', lastName: 'Martin'},
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    }
];

var stringData =  [
    {
        taskID: 1,
        taskName: 'Planning',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        progress: 100,
        duration: 5,
        name: [{firstName: 'Nancy'}, {lastName: 'Davolio'}],
        priority: 'Normal',
        approved: false,
        subtasks: [
            { taskID: 2, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),name: [{firstName: 'Andrew'}, { lastName: 'Fuller'}],
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false },
            { taskID: 3, taskName: 'Plan budget', startDate: new Date('02/03/2017'),name: [{firstName: 'Janet'}, { lastName: 'Leverling'}],
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true },
            { taskID: 4, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),name: [{firstName: 'Margaret'}, { lastName: 'Peacock'}],
                endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false },
            { taskID: 5, taskName: 'Planning complete', startDate: new Date('02/07/2017'),name: [{firstName: 'Steven'}, { lastName: 'Buchanan'}],
                endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: 'Design',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/14/2017'),
        duration: 3,
        progress: 86,
        name: [{firstName: 'Michael'}, { lastName: 'Suyama'}],
        priority: 'High',
        approved: false,
        subtasks: [
            { taskID: 7, taskName: 'Software Specification', startDate: new Date('02/10/2017'),name: [{firstName: 'Robert'}, { lastName: 'King'}],
                endDate: new Date('02/12/2017'), duration: 3, progress: 60, priority: 'Normal', approved: false },
            { taskID: 8, taskName: 'Develop prototype', startDate: new Date('02/10/2017'),name: [{firstName: 'Laura'}, { lastName: 'Challahan'}],
                endDate: new Date('02/12/2017'), duration: 3, progress: 100, priority: 'Critical', approved: false },
            { taskID: 9, taskName: 'Get approval from customer', startDate: new Date('02/13/2017'),name: [{firstName: 'Anne'}, { lastName: 'Dodsworth'}],
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'Low', approved: true },
            { taskID: 10, taskName: 'Design Documentation', startDate: new Date('02/13/2017'),name: [{firstName: 'Tamer'}, { lastName: 'Nancy'}],
                endDate: new Date('02/14/2017'), duration: 2, progress: 100, priority: 'High', approved: true },
            { taskID: 11, taskName: 'Design complete', startDate: new Date('02/14/2017'),name: [{firstName: 'Laura'}, { lastName: 'Martin'}],
                endDate: new Date('02/14/2017'), duration: 0, progress: 0, priority: 'Normal', approved: true }
        ]
    }
];
