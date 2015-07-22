var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://work');
var bucket = cluster.openBucket('beer-sample');

bucket.get('21st_amendment_brewery_cafe', function(err, res) {
    console.log('Value: ', res);
});
