async function courses() {
	try {
		let response = await fetch('http://localhost:4000/courses/all');
		response = await response.json();
		return response.result;
	} catch (err) {
		console.log(err);
	}
}

async function deleteCourse(id) {
	try {
		let response = await fetch(`http://localhost:4000/courses/${id}`, {
			method: 'DELETE',
			headers: {
				id,
				Authorization: `${localStorage.getItem('token')}`,
			},
		});
		response = await response.json();
		return response;
	} catch (error) {
		console.log(error);
	}
}

async function addCourse(data) {
	try {
		let response = await fetch('http://localhost:4000/courses/add', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${localStorage.getItem('token')}`,
			},
		});
		response = await response.json();
		return response.result;
	} catch (error) {
		console.log(error);
	}
}

async function updateCourse(courseId, data) {
	try {
		let response = await fetch(`http://localhost:4000/courses/${courseId}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${localStorage.getItem('token')}`,
			},
		});
		response = await response.json();
		return response.result;
	} catch (error) {
		console.log(error);
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

async function addAuthor(data) {
	try {
		let response = await fetch('http://localhost:4000/authors/add', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${localStorage.getItem('token')}`,
			},
		});
		response = await response.json();
		return response.result;
	} catch (error) {
		console.log(error);
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

async function getCurrentUser(token) {
	try {
		let response = await fetch('http://localhost:4000/users/me', {
			method: 'GET',
			headers: {
				Authorization: token,
			},
		});
		response = await response.json();
		return response.result;
	} catch (err) {
		console.log(err);
	}
}

async function logout(token) {
	try {
		await fetch('http://localhost:4000/logout', {
			method: 'DELETE',
			headers: {
				Authorization: token,
			},
		});
	} catch (err) {
		console.log(err);
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

export {
	courses,
	deleteCourse,
	addCourse,
	updateCourse,
	authors,
	addAuthor,
	login,
	logout,
	registration,
	getCurrentUser,
};
