import React from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import GlobalStyle from './globalStyles';

import { useState } from 'react';

function App() {
	const [isAddForm, setIsAddForm] = useState(false);

	if (isAddForm) {
		return (
			<React.Fragment>
				<GlobalStyle />
				<Header />
				<CreateCourse hideForm={() => setIsAddForm(false)} />;
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<GlobalStyle />
			<Header />
			<Courses displayForm={() => setIsAddForm(true)} />
		</React.Fragment>
	);
}
export default App;
