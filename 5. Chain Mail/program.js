var _ = require('lodash');

var worker = function(list){
	return _.chain(list)
			.sortBy(function(a){return a})
			.map(function(a){return a.toUpperCase() + 'CHAINED'})
			.value()
}

module.exports = worker;