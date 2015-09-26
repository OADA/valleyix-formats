var refs = require('../../../../../../refs.js');

module.exports = {
    id: refs.VALLEYIX_GROWER_ID,
    description: 'application/vnd.valleyix.grower.1+json',
    type: 'object',
    addtionalProperties: true,
    properties: {
        UserId: {
            type: 'string',
            minLength: 1
        },
        UserName: {
            type: 'string',
            minLength: 1
        },
        FirstName: {
            type: 'string',
            minLength: 1
        },
        LastName: {
            type: 'string',
            minLength: 1
        },
        EmailAddress: {
            type: 'string',
            minLength: 1
        },
        PrimaryPhoneNumber: {
            type: 'string',
            minLength: 1
        },
        SecondaryPhoneNumber: {},
        bookmarks: {
            $ref: refs.OADA_LINK_VERSIONED,
        }
    },
    required: [
        'UserId',
        'UserName',
        'FirstName',
        'LastName',
        'EmailAddress',
        'PrimaryPhoneNumber',
        'bookmarks'
    ]
};
