async function courses() {
	try {
		let response = await fetch('http://localhost:4000/courses/all');
		response = await response.json();
		return response.result;
	} catch (err) {
		console.log(err);
	}
}

async function authors() {
	try {
		let response = await fetch('http://localhost:4000/authors/all');
		response = await response.json();
		return response.result;
	} catch (err) {
		console.log(err);
	}
}

async function login(loginUser) {
	try {
		let response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(loginUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		response = await response.json();
		return response;
	} catch (error) {
		console.log(error);
	}
}

async function registration(newUser) {
	try {
		let response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		response = await response.json();
		return response;
	} catch (err) {
		console.log(err);
	}
}

export { courses, authors, login, registration };
