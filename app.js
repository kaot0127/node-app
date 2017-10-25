let host = '192.168.33.10';
let port = 3000;

const http = require('http');

var server = http.createServer(
		(request, response) => {
			response.setHeader('Content-Type', 'text/html');
			response.write('<!DOCTYPE html><html lang="ja">');
			response.write('<head><meta charset="utf-8">');
			response.write('<title>Hello</title></head>');
			response.write('<body><h1>Hello Node.js!</h1>');
			response.write('<p>This is Node.js sample page.</p>');
			response.write('<p>これは、Node.jsのサンプルページです。</p>');
			response.write('</body></html>');
			response.end();
		}
);

server.listen(port, host);
console.log('Server running at http://'+host+':'+port+'/');

/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js!\n');
}).listen(3000, '192.168.33.10');
console.log('Server running at http://192.168.33.10:3000/');
*/