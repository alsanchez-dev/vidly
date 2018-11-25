const helmet = require('helmet');
const compressions = require('compression');

module.exports = function(app){
    app.use(helment());
    app.use(compression());
}
