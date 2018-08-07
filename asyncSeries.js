var async = require('async');

async.waterfall([
	        function(cb) {
	        		setTimeout(function(){
	        			console.log('111111111');
	        			cb(null, 1);
	        		}, 3000);
	                
	        },
	        function(param,cb) {
	        	console.log('one传来:'+param);
	        	setTimeout(function(){
	        			console.log('222222222');
	        			cb(null, 2);
	        		}, 2000);
	                
	        },
	        function(param,cb) {
	        	console.log('two传来:'+param);
	        	setTimeout(function(){
	        			console.log('333333333');
	        			cb(null, 3);
	        		}, 1000);
	        }
    	],
        function(err, value) {
        	if(err){
        		console.log(err);
        	}
                // do somethig with the err or values v1/v2/v3
            console.log(value);
        }
);