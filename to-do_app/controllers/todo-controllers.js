var bodyParser = require('body-parser');

var data = [{ item: 'get milk' }, { item: 'code' }, { item: 'walk' }]
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {
    app.get('/todo', function (req, res) {

        res.render('todo', {data:data});
        console.log(data);

    })

    app.post('/todo', urlencodedParser, function (req, res) {
        const obj = JSON.parse(JSON.stringify(req.body)); // req.body = [Object: null prototype] { title: 'product' }

        data.push(req.body);
        //res.json(data);
        console.log(data)
    })

    app.delete('/todo', function (req, res) {

    })

}