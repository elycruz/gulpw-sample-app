/*! Company Name http://www.company-website.com Empty.js 0.0.0 {{file hash here}} */
$(function(){$("body").append("<h1>Hi, this is example-feature-1's script result.</h1>")}),$(function(){$("body").append('<h4>"example-feature-1/subcomponent1.js" just ran.</h4>')}),$(function(){$("body").append("<h2>Hi, this is example-feature-2's script result.</h2>"),console.log(App.getTemplate("some-template2.0"),App.getTemplate("some-template2.2"))}),App.setTemplate("some-template2.0","{{!Some Template 2.0 Mustache Template }}\r\n<h5>Some Template 2.0 Template Content</h5>"),App.setTemplate("some-template2.2","{{!Some Template 2.2 Mustache Template }}\r\n<h5 class=\"hello\">Some Template 2.2 Template Content</h5>\r\n<p>'ola'\"'\"'\"'\"'</p>");