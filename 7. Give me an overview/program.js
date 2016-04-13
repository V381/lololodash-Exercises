var _ = require('lodash');

var worker = function(list){
	var hm = {}, score = 0, qwert = [];
	var obj = _.groupBy(list, 'article');
	_.forEach(obj, function(value, key){
	    _.reduce(value, function(all, item, i){
	          all += item.quantity
	          return hm[item.article] = all
	    }, 0);
	});
	_.forEach(hm, function(key, value){
	    qwert.push(
		    {'article': Number(value),
		     'total_orders' : key
		    }
	    )
	});
	return _.sortBy(qwert, "total_orders").reverse();
}

module.exports = worker;
