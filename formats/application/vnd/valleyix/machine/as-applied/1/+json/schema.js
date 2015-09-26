var refs = require('../../../../../../../refs.js');

module.exports = {
    id: refs.VALLEYIX_MACHINE_AS_APPLIED_ID,
    description: 'application/vnd.valleyix.machine.as-applied.1+json',
    type: 'object',
    addtionalProperties: true,
    properties: {
        'as-applied': {
            type: 'array',
            uniqueItems: true,
            minItems: 1,
            items: {
                properties: {
                    ApplicationDepth: {
                        type: 'string',
                    },
                    Aux1In: {
                        type: 'string',
                    },
                    Aux1Label: {
                        type: 'string'
                    },
                    Aux1LabelType: {
                        type: 'string',
                    },
                    Aux1Out: {
                        type: 'string',
                    },
                    Aux2In: {
                        type: 'string',
                    },
                    Aux2Label: {
                        type: 'string'
                    },
                    Aux2LabelType: {
                        type: 'string',
                    },
                    Aux2Out: {
                        type: 'string',
                    },
                    Command: {
                        type: 'string',
                    },
                    CreatedDate: {
                        type: 'string',
                    },
                    DegreesTravelled: {
                        type: 'string',
                    },
                    DeviceId: {
                        type: 'string',
                    },
                    ElapsedTime: {
                        type: 'number'
                    },
                    EndDegreeRange: {
                        type: 'string',
                    },
                    FlowMeter1: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    FlowMeter1LabelName: {
                        type: 'string'
                    },
                    FlowMeter1Multiplier: {
                        type: 'string'
                    },
                    FlowMeter1Used: {
                        anyOf: [{
                            type: 'boolean'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    FlowMeter2: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    FlowMeter2LabelName: {
                        type: 'string'
                    },
                    FlowMeter2Multiplier: {
                        type: 'string'
                    },
                    FlowMeter2Used: {
                        anyOf: [{
                            type: 'boolean'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    FlowRateMeter1: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    FlowRateMeter2: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    HourMeter: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    HoursWet: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    PercentTimer: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    PivotCurrentPosition: {
                        type: 'string',
                    },
                    PivotDirection: {
                        type: 'string',
                    },
                    PivotRunningStatus: {
                        type: 'string',
                    },
                    PressureBeginValue: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    PressureEndValue: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    ProgramRunningStatus: {
                        type: 'string',
                    },
                    RtuId: {
                        type: 'string',
                    },
                    StartDegreeRange: {
                        type: 'string',
                    },
                    TotalFlowMeter: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                    TransactionId: {
                        type: 'string',
                    },
                    WaterEventId: {
                        type: 'string',
                    },
                    WaterMode: {
                        type: 'string',
                    },
                    WetHourMeter: {
                        anyOf: [{
                            type: 'number'
                        },
                        {
                            type: 'null'
                        }]
                    },
                },
                required: [
                    'ApplicationDepth',
                    'Aux1In',
                    'Aux1Label',
                    'Aux1LabelType',
                    'Aux1Out',
                    'Aux2In',
                    'Aux2Label',
                    'Aux2LabelType',
                    'Aux2Out',
                    'Command',
                    'CreatedDate',
                    'DegreesTravelled',
                    'DeviceId',
                    'ElapsedTime',
                    'EndDegreeRange',
                    'PivotCurrentPosition',
                    'PivotDirection',
                    'PivotRunningStatus',
                    'ProgramRunningStatus',
                    'RtuId',
                    'StartDegreeRange',
                    'TransactionId',
                    'WaterEventId',
                    'WaterMode'
                ],
            }
        }
    },
    required: [
        'as-applied'
    ]
};
