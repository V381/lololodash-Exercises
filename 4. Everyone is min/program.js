var _ = require('lodash');

var worker = function(list){
	var hotArr = [],
        warmArr = [],
        obj = {};
         
    _.forEach(list, function(value, key){
        var hot = _.every(value, function(item){
            return item >= 19;
        });
        
        var warm = _.some(value, function(item){
            return item >= 19;
        });
        
        if (hot) {
            hotArr.push(key);
        } 
        else if (warm) {
            warmArr.push(key); 
        }
    });

    obj.hot = hotArr
    obj.warm = warmArr
    
    return obj;

}

module.exports = worker;