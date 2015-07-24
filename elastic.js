var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: '10.101.7.39:9200',
    // log: 'trace'
});

var query = {
    index: 'beer-sample',
    body: {
        query: {
            match: {
                type: 'brewery'
            }
        }
    }
}

client.search(query).then(function (res) {
    var hits = res.hits.hits;
    var l = hits.length;

    for (var i = 0; i < l; i++) {
        console.log(hits[i]);
    }
}, function (err) {
    console.log(err.message);
});
