/**
 * Created by edelacruz on 12/5/2014.
 * @description Mock application object.
 */
define(['jquery', 'amplify'], function () {

    // Mock application obj
    function Application () {}

    // Mock run method
    Application.prototype.run = function () {
        // Use jquery
        $('#main-content').html('<h3>Application launched!</h3>');

        // Use amplify
        amplify.publish('APPLICATION:LAUNCHED');

        // Log to console
        console.log('Application launched');
    };

    return Application;

});