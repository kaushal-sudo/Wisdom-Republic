var express=require("express");
var app=express();
var fs=require('fs');
app.use(express.static('public'));
app.get("/",function(req,res){
	fs.readFile('./project.html',null,function(error,data){
		if(error){
			res.writeHead(404);
			res.write('file not found');
		}else{
			res.write(data);
		}
	});
	});
app.get("/about",function(req,res){
	fs.readFile('./about.html',null,function(error,data){
		if(error){
			res.writeHead(404);
			res.write('file not found');
		}else{
			res.write(data);
		}
	});});
	app.get("/signup",function(req,res){
	fs.readFile('./signup.html',null,function(error,data){
		if(error){
			res.writeHead(404);
			res.write('file not found');
		}else{
			res.write(data);
		}
	});
});
	app.get("/login",function(req,res){
	fs.readFile('./login.html',null,function(error,data){
		if(error){
			res.writeHead(404);
			res.write('file not found');
		}else{
			res.write(data);
		}
	});});



app.get("*",function(req,res){
	res.send("Invalid request");
});

var port=process.env.PORT || 3000;
app.listen(port,function(){
console.log("server has started");
});

/*app.get("/file",function(req,res){
	res.send("Goodbye");
});*/	

