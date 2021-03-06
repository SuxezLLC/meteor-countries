Package.describe({
    name: 'suxez:countries',
    version: '1.0.0',
    // Brief, one-line summary of the package.
    summary: 'Extended country database.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/SuxezLLC/meteor-countries',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');
    api.addFiles('countries.js');
    api.export(['SuxezCountries']);
});

