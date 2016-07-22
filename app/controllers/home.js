/**
 * Created by caitano on 22/07/16.
 */

module.exports = function () {
    var controller = {};
    controller.index = function (req,res) {

        //retorna a página index
        res.render('index', {nome: 'Express'});
    };
    return controller;
}