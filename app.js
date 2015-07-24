var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://10.101.7.39:8091');
var bucket = cluster.openBucket('beer-sample', 'meow');
var ViewQuery = couchbase.ViewQuery;

var query = ViewQuery.from('beer', 'brewery_beers').limit(3);

bucket.query(query, function (err, res) {
    var l = res.length;

    for (var i = 0; i < l; i++) {
        console.log(res[i].id);
    }
})


// bucket.get('21st_amendment_brewery_cafe', function (err, res) {
//     console.log('Value: ', res);
// });

// bucket.insert('meow', { say: 'wut' }, function (err, res) {
//     console.log('Suxess');
//     console.log(res);
//     console.log(err);
// })
