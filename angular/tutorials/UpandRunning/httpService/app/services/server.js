var express = require('express'),
    app = express();

app.configure(function () {
    app.use(express.static(__dirname, '/'));
});

app.get('customer/:id', function(req, res) {
    var customerId =parseInt(req.params.id);
    var data = {};
    for (var i=0, len=customer.legnth;i<len;i++) {
        if (customer[i].id === customerId) {
            data = customer[i];
            break;
        }
    }
    res.jsaon(data);
});

app.get('customers', function(req, res) {
    res.json(customers);
});

app.listen(8000);

console.log('Express listening on port 8000');