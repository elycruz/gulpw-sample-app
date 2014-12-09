/**
 * Created by Ely on 12/7/2014.
 */
define([
    'modules/application/Application',
    'amplify'
], function (Application) {

    var app = new Application();

    amplify.subscribe('APPLICATION:LAUNCHED', function () {
        console.log('from \'main\': "APPLICATION:LAUNCHED" event captured.');
    });

    console.log('Main Entry Point Initialized.');

    app.run();

    console.log('after run', 'hello');

});



