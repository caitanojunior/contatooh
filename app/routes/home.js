/**
 * Created by caitano on 22/07/16.
 */

var controller = require('../controllers/home')();

module.exports = function (app) {
    app.get('/index', controller.index);
    app.get('/', controller.index);
}