import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

import { useState } from 'react';

function App() {
	const [isAddForm, setIsAddForm] = useState(false);
	const displayForm = () => setIsAddForm(true);
	const notDisplayForm = () => setIsAddForm(false);

	if (isAddForm) {
		return (
			<React.Fragment>
				<Header />
				<CreateCourse notDisplayForm={notDisplayForm} />;
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<Header />
			<Courses displayForm={displayForm} />
		</React.Fragment>
	);
}
export default App;
