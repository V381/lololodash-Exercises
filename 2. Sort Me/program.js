var _ = require('lodash');

var worker = function(collection){
	var sorted = _.sortBy(collection, 'quantity');
	return sorted.reverse();
}

module.exports = worker;