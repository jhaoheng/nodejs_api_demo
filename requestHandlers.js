var exec = require("child_process").exec;

// function start(response) {
//   console.log("Request handler 'start' was called.");

//   exec("ls -lah", function (error, stdout, stderr) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write(stdout);
//     response.end();
//   });
// }

// function upload(response) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello Upload");
//   response.end();
// }

// exports.start = start;
// exports.upload = upload;

function getResource(response, user) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("USER : " + user + '\n\n');
	
	exec("ls -lah", function (error, stdout, stderr) {
		response.write(stdout);
		response.end();
	});
}

exports.getResource = getResource;