var fs = require('fs')  

function whenReadingDone(err, data){
	var str = data.toString()
	console.log(str.split("\n").length-1) 
}

fs.readFile(process.argv[2],whenReadingDone)
