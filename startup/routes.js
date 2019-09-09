const users = require('../routes/users');
const tours = require('../routes/tours');



module.exports = function(app) {
    app.use('/api/v1/users', users);
    app.use('/api/v1/tours', tours);
}