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
        asApplied: {
            $ref: refs.OADA_LINK_VERSIONED
        },
        vriZones: {
            $ref: refs.OADA_LINK_VERSIONED
        },
        vriPrescriptions: {
            type: 'object',
            properties: {
                vriAsFile: {
                    $ref: refs.OADA_LINK_VERSIONED
                },
                vriAsModel: {
                    $ref: refs.OADA_LINK_VERSIONED
                }
            },
            required: [
                'vriAsFile',
                'vriAsModel'
            ]
        },
        workOrders: {
            stepProgram: {
                $ref: refs.OADA_LINK_VERSIONED
            },
            quickCommands: {
                select2Start: {
                    $ref: refs.OADA_LINK_VERSIONED
                },
                select2Stop: {
                    $ref: refs.OADA_LINK_VERSIONED
                },
                pro2Start: {
                    $ref: refs.OADA_LINK_VERSIONED
                },
                pro2Stop: {
                    $ref: refs.OADA_LINK_VERSIONED
                }
            },
        }
    },
    required: [
        'configuration',
        'status',
        'asApplied',
        'vriZones',
        'vriPrescriptions',
        'workOrders'
    ]
};
