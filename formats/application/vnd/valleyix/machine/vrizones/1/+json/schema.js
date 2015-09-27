var refs = require('../../../../../../../refs.js');

module.exports = {
    id: refs.VALLEYIX_MACHINE_VRIZONES_ID,
    description: 'applcation/vnd.valleyix.machine.VRIZones.1+json',
    type: 'object',
    addtionalProperties: true,
    properties: {
        DeviceId: {
            type: 'string',
        },
        PivotLength: {
            type: 'number'
        },
        PivotZones: {
            type: 'array',
            uniqueItems: true,
            items: {
                properties: {
                    CycleTime: {
                        type: 'number'
                    },
                    EndLength: {
                        type: 'number'
                    },
                    StartLength: {
                        type: 'number'
                    },
                    ZoneDisplayId: {
                        type: 'number'
                    }
                },
                required: [
                    'CycleTime',
                    'EndLength',
                    'StartLength',
                    'ZoneDisplayId'
                ]
            }
        }
    },
    required: [
        'DeviceId',
        'PivotLength',
        'PivotZones'
    ]
};
