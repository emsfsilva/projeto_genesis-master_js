const Handlebars = require('handlebars');

Handlebars.registerHelper('gt', function(a, b, options) {
    if (a < b) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});



