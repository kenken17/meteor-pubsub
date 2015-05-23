Package.describe({
	name: 'kenken:meteor-pubsub',
	summary: 'A simple/global pubsub observer implementation for simple in-app communication.',
	version: '1.0.0',
	git: 'https://github.com/kenken17/meteor-pubsub'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	// Meteor dependencies
	api.use('underscore');
	api.use('random');

	api.addFiles('pubsub-common.js', ['server', 'client']);

	if (api.export) {
		api.export('MPubSub');
	}
});

Package.onTest(function(api) {
	api.use(['mike:mocha-package@0.5.6', "practicalmeteor:chai"]);
	api.use('kenken:meteor-pubsub');

	api.addFiles('pubsub-tests.js', ['server', 'client']);
});
