var fs = require('fs')
var jsonfile = require('jsonfile')

var file = 'script.json'

var text;
fs.readFile('script.txt','utf8', function(err,data){
    text =data;
    console.log(text.length)
});

lines = text.split("\n")

var o = {}
o[]=[];

for(i=0;i<lines.length;i++){
    o[i+1] = lines[i]
}

JSON.stringify(o);
    
jsonfile.writeFile(file,o,function(err){
	console.error(err)
})