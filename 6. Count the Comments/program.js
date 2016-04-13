var _ = require('lodash');

var worker = function(list){
	var z = []
	var grouped = _.groupBy(list, 'username');
	_.forEach(grouped, function(value, key){
     	 z.push({'username' : key, 'comment_count': value.length})
	});
	return z.reverse();
}

module.exports = worker;