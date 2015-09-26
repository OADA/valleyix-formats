var refs = require('../../../../../../refs.js');

module.exports = {
    id: refs.VALLEYIX_MACHINE_ID,
    description: 'application/vnd.valleyix.machine.1+json',
    type: 'object',
    addtionalProperties: true,
    properties: {
        configuration: {
            $ref: refs.OADA_LINK_VERSIONED
        },
        status: {
            $ref: refs.OADA_LINK_VERSIONED
        },
        applied: {
            $ref: refs.OADA_LINK_VERSIONED
        },
        vriZones: {
            $ref: refs.OADA_LINK_VERSIONED
        },
        vriPrescriptions: {
            $ref: refs.OADA_LINK_VERSIONED
        },
        workOrders: {
            $ref: refs.OADA_LINK_VERSIONED
        }
    },
    required: [
        'configuration',
        'status',
        'applied',
        'vriZones',
        'vriPrescriptions',
        'workOrders'
    ]
};
