const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const index_page = fs.readFileSync('./index.ejs', 'utf8');
const other_page = fs.readFileSync('./other.ejs', 'utf8');
const style_css = fs.readFileSync('./style.css', 'utf8');

let host = '192.168.33.10';
let port = 3000;

var server = http.createServer(getFromClient);

server.listen(port, host);
console.log('Server running at http://'+host+':'+port+'/');

// ここまでメインプログラム=========================

// createSeverの処理
function getFromClient(request, response) {
	var url_parts = url.parse(request.url);
	switch (url_parts.pathname) {
		case '/':
			var content = ejs.render(index_page, {
				title:"Indexページ",
				content:"これはテンプレートを使ったサンプルページです。",
			});
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(content);
			response.end();
			break;

		case '/other':
			var content = ejs.render(other_page, {
				title:"Other",
				content:"これは新しく用意したページです。",
			});
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(content);
			response.end();
			break;

		case '/style.css':
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(style_css);
			response.end();
			break;

		default:
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.end('no page...');
			break;
	}
}


/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js!\n');
}).listen(3000, '192.168.33.10');
console.log('Server running at http://192.168.33.10:3000/');
*/