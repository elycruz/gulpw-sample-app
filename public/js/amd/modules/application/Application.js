define(["jquery","amplify"],function(){function e(){}return e.prototype.run=function(){$("#main-content").html("<h3>Application launched!</h3>"),amplify.publish("APPLICATION:LAUNCHED"),console.log("Application launched")},e});