/**
 * Module dependencies
 */

var _ = require('lodash'),
    util = require('util');

/**
 *
 * @param  {[type]} scope [description]
 * @return {[type]}       [description]
 */
module.exports = function dataForPackageJSON(scope) {

    var sailsPkg = scope.sailsPackageJSON || {};

    // To determine the sails dep. to inject in the newly created package.json,
    // use `sails.prerelease` specified in the package.json of Sails itself.
    // If a `prerelease` version no. is not specified, just use `version`
    var sailsVersionDependency = (sailsPkg.sails && sailsPkg.sails.prerelease) || ('~' + sailsPkg.version);

    return _.defaults(scope.appPackageJSON || {}, {
        name: scope.appName,
        private: true,
        version: '0.0.0',
        description: 'a Sails application',
        keywords: [],
        dependencies: {
            'sails': sailsVersionDependency,
            'sails-disk': getDependencyVersion(sailsPkg, 'sails-disk'),
            'lodash': getDependencyVersion(sailsPkg, 'lodash'),
            'pluralize': getDependencyVersion(sailsPkg, 'pluralize'),
            'rc': getDependencyVersion(sailsPkg, 'rc'),
            'body-parser': '^1.2.0',
            'broccoli-asset-rev': '0.0.17',
            'broccoli-ember-hbs-template-compiler': '^1.5.0',
            'ember-cli': '0.0.40',
            'ember-cli-ember-data': '0.1.0',
            'ember-cli-ic-ajax': '0.1.1',
            'glob': '^3.2.9',
            'originate': '0.1.5'
        },
        scripts: {
            start: 'node app.js',
            debug: 'node debug app.js'
        },
        main: 'app.js',
        repository: {
            type: 'git',
            url: util.format('git://github.com/%s/%s.git', scope.github.username, scope.appName)
        },
        author: scope.author || '',
        license: ''
    });
};

/**
 * getDependencyVersion
 *
 * @param  {Object} packageJSON
 * @param  {String} module
 * @return {String}
 * @api private
 */

function getDependencyVersion(packageJSON, module) {
    return (
        packageJSON.dependencies && packageJSON.dependencies[module] ||
        packageJSON.devDependencies && packageJSON.devDependencies[module] ||
        packageJSON.optionalDependencies && packageJSON.optionalDependencies[module]
    );
}