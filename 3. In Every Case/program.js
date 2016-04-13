var _ = require('lodash');

var worker = function(collection){
	return _.forEach(collection, function(val) {
		if(val.population > 1){
			val.size = 'big';
		}else if(val.population < 1 && val.population > 0.5){
			val.size = 'med';
		}else{
			val.size = 'small';
		}
	});
}

module.exports = worker;