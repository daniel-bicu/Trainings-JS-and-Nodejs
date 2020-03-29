function sayHi(error, data, callback){

	if(error){
		return console.log('Error: ', error);
	}
	console.log(data);

	callback(null, "my friend")
}


function sayHi2(error, data){

	if(error){
		return console.log('Error: ', error);
	}
	console.log(data);
}


function start(callback)
{	
	setTimeout(()=>{
		//callback(new Error('Sth bad'), 'I should be first'); for error
		callback(null, 'Hello', sayHi2);
	}, 1000);
}

start(sayHi);