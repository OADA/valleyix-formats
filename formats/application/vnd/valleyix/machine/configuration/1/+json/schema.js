var refs = require('../../../../../../../refs.js');

module.exports = {
    id: refs.VALLEYIX_MACHINE_CONFIGURATION_ID,
    description: 'application/vnd.valleyix.machine.configuration.1+json',
    type: 'object',
    addtionalProperties: true,
    properties: {
        DeviceId: {
            type: 'string',
            minLength: 1
        },
        DeviceName: {
            type: 'string',
            minLength: 1
        },
        DeviceTypeId: {
            type: 'string',
            minLength: 1
        },
        DeviceTypeName: {
            type: 'string',
            minLength: 1
        },
        EndGunList: {
            type: 'array',
            uniqueItems: true,
            minItems: 1,
            items: {
                properties: {
                    EndGunID: {
                        type: 'string',
                        minLength: 1
                    },
                    EndGunType: {
                        type: 'string',
                        minLength: 1
                    }
                }
            },
            required: [
                'EndGunID',
                'EndGunType'
            ],
        },
        FarmId: {
            type: 'string',
            minLength: 1
        },
        FirmwareVersion: {
            anyOf: [{
                type: 'string'
            },
            {
                type: 'null'
            }]
        },
        ForwardAngle: {
            anyOf: [{
                type: 'number'
            },
            {
                type: 'null'
            }]
        },
        IsConfigured: {
            type: 'boolean'
        },
        Latitude: {
            anyOf: [{
                type: 'number'
            },
            {
                type: 'null'
            }]
        },
        Longitude: {
            anyOf: [{
                type: 'number'
            },
            {
                type: 'null'
            }]
        },
        LrduDistance: {
            anyOf: [{
                type: 'number'
            },
            {
                type: 'null'
            }]
        },
        MachineLength: {
            type: 'number'
        },
        PanelId: {
            type: 'string',
            minLength: 1
        },
        PanelTypeName: {
            type: 'string',
            minLength: 1
        },
        RemoteTerminalUnitId: {
            anyOf: [{
                type: 'string',
                pattern: '[0-9]+'
            },
            {
                type: 'number'
            },
            {
                type: 'null'
            }]
        },
        ReverseAngle: {
            type: 'number'
        },
        RoadAngle: {
            anyOf: [{
                type: 'number'
            },
            {
                type: 'null'
            }]
        },
        ZeroDegreeReference: {
            anyOf: [{
                type: 'number'
            },
            {
                type: 'null'
            }]
        }
    },
    required: [
        'DeviceId',
        'DeviceName',
        'DeviceTypeId',
        'DeviceTypeName',
        'EndGunList',
        'FarmId',
        'FirmwareVersion',
        'IsConfigured',
        'MachineLength',
        'PanelId',
        'PanelTypeName',
        'ReverseAngle'
    ]
};
