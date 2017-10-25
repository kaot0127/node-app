const http = require('http');
const fs = require('fs');

let host = '192.168.33.10';
let port = 3000;

var request;
var response;

var server = http.createServer(getFromClient);

server.listen(port, host);
console.log('Server running at http://'+host+':'+port+'/');

// ここまでメインプログラム=========================

// createSeverの処理
function getFromClient(req, res) {
	request = req;
	response = res;
	fs.readFile('./index.html', 'UTF-8', writeToResponse);
}

// readFile完了後の処理
function writeToResponse(error, data) {
	var content = data.
		replace(/dummy_title/g, 'タイトルです').
		replace(/dummy_content/g, 'これがコンテンツです。');

	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(content);
	response.end();
}


/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js!\n');
}).listen(3000, '192.168.33.10');
console.log('Server running at http://192.168.33.10:3000/');
*/