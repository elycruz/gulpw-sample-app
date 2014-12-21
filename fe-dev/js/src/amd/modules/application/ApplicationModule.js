/**
 * Created by edelacruz on 12/5/2014.
 * @description Mock application object.
 */
define(['lib/mvc/module/Module', 'jquery', 'amplify'], function (Module) {

    'use strict';

    // Mock application obj
    var Constructor = sjl.Extendable.extend(function Application() { },
        {
            run: function () {

                // Use jquery
                $('#main-content').html('<h3>Application launched!</h3>');

                // Use amplify
                amplify.publish('app:start');

                // Log to console
                console.log('Application launched');
            }
        });

    return new Constructor();

});

