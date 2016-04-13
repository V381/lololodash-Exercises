var _ = require('lodash');

var worker = function(list){
	var avg = 0, sum = 0, obj = {};
	_.forEach(list, function(val) {
		return sum += val.income;
	});
	avg = sum / list.length;

	var under = _.filter(list, function(num){
        return num.income <= avg;
    });
    
    var over = _.filter(list, function(num){
        return num.income > avg;
    });

    obj.average = avg;
    obj.underperform = _.sortBy(under, 'income');
    obj.overperform = _.sortBy(over, 'income')

    return obj;

}

module.exports = worker;