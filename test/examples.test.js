/* Copyright 2014 Open Ag Data Alliance
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;
var Formats = require('oada-formats');
var formats = new Formats();
formats.use(require('..'));

var mediatypes = Object.keys(formats.mediatypes);
mediatypes = mediatypes.filter(function(mediatype) {
    return !mediatype.match(/^application\/vnd.oada.*/);
});

describe('Verify mediatypes', function() {

    mediatypes.forEach(function(mediatype) {

        it('Verify ' + mediatype + ' schema and example', function() {
            return formats
                .model(mediatype)
                .then(function(model) {
                    return expect(model.validate(model.example()))
                        .to.eventually.equal(true);
                });
        });
    });

});
