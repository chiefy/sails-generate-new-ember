var path = require('path'),
    _ = require('lodash'),
    packageJSON = require('../json/package.json.js'),
    sailsrc = require('../json/sailsrc');

/**
 * sails-generate-new
 *
 * Usage:
 * `sails new foo`
 *
 * @type {Object}
 */
module.exports = {

    moduleDir: require('path').resolve(__dirname, '..'),

    templatesDirectory: require('path').resolve(__dirname, '../templates'),

    before: require('./before'),

    after: require('./after'),

    targets: {

        '.': ['backend-ember', 'frontend-ember'],
        './.gitignore': {
            copy: 'gitignore'
        },
        './.editorconfig': {
            copy: 'editorconfig.template'
        },
        './README.md': {
            template: './README.md'
        },
        './package.json': {
            jsonfile: packageJSON
        },
        './.sailsrc': {
            jsonfile: sailsrc
        },
        './app.js': {
            copy: 'app.js'
        }
    }
};
