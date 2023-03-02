var http = require('http');
//var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/'){
    console.log(req.url);
     fs.readFile('index.html', function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("Home not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
   }else if(req.url === '/about'){
      fs.readFile('about.html', function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          return res.end("About not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }else if(req.url === '/contact-me'){
        fs.readFile('contact-me.html', function(err, data) {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("Contact me not Found");
          }
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          return res.end();
        });
      }else {
        console.log(req.url);
        fs.readFile('404.html', function(err, data) {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 error from Function");
          }
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          return res.end();
        })};
}).listen(8080);
