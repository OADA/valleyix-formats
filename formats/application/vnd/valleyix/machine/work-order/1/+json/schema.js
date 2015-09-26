var refs = require('../../../../../../../refs.js');

module.exports = {
    id: refs.VALLEYIX_MACHINE_WORKORDER_ID,
    description: 'applcation/vnd.valleyix.machine.work-order.1+json',
    type: 'object',
    addtionalProperties: true,
    properties: {
        orders: {
            type: 'array',
            uniqueItems: true,
            minItems: 1,
            items: {
                properties: {
                    DeviceId: {
                        type: 'string'
                    },
                    Aux1: {
                        type: 'string'
                    },
                    Aux2: {
                        type: 'string'
                    },
                    Depth: {
                        type: 'string'
                    },
                    Direction: {
                        type: 'string'
                    },
                    EndGun1: {
                        type: 'string'
                    },
                    EndGun2: {
                        type: 'string'
                    },
                    SIS: {
                        type: 'string'
                    },
                    SISAngle: {
                        type: 'string'
                    },
                    Water: {
                        type: 'string'
                    }
                },
                required: [
                    'DeviceId'
                ]
            }
        }
    },
    required: [
        'orders'
    ]
};
