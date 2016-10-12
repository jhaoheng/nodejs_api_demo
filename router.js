function route(handle, path, response) {
	console.log("PATH : " + path);

	// var path = "local.com:1111/{user}/resource";
	// console.log(path.split('/')[2]);
	if (path.split('/')[2] == 'resource') {
		handle(response, path.split('/')[1]);
	}
	// if (typeof handle[path] === 'function') {
	//   handle[path](response);
	// } 
	else {
		console.log("No request handler found for " + path);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;