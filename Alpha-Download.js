var fs = require('fs');
var http = require('http');
function newfile(name,content) {
fs.writeFile(name, content, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
}
function getAPI(site,path,callback) {
  let rtrn = "";
const postData = querystring.stringify({
  'msg': 'Hello World!'
});

const options = {
  hostname: site,
  port: 80,
  path: 'path',
  method: 'GET',
  headers: {
    'Content-Type': 'data/application',
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    callback(`${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.end();
  return rtrn;
}
function loadFile(name,path) {
getAPI("heb12.ml","/heb12/Alpha"+path,function(data) {
newfile("Heb12/name",data);
        });
}
