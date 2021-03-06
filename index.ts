import http = require('http');
import fs = require('fs');

http
	.createServer(function (req, res) {
		const base = new URL('https://localhost:8080');
		const myURL = new URL(req.url!, base);
		const filename = '.' + myURL.pathname + '.html';
		fs.readFile(filename, function (err, data) {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				return res.end('404 Not Found');
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	})
	.listen(8080);
