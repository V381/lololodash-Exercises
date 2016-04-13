var _ = require('lodash');

var worker = function(list){
	var str = ''; 
    
    var temp =
     _.template('Hello <%= name %> (logins: <%= logins %>)')({'name' : list.name, 'logins' : list.login.length})
	
	return temp;
	
}

module.exports = worker;