import { render, screen, fireEvent } from '@testing-library/react';
import { Route, Routes, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import CourseForm from './../CourseForm';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Yevheniia Balda',
		role: 'admin',
	},
	courses: [
		{
			id: '1',
			title: 'Title',
			description: 'Description',
			creationDate: '29/03/2023',
			duration: 120,
			authors: [
				'df32994e-b23d-497c-9e4d-84e4dc02882f',
				'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			],
		},
	],
	authors: [
		{
			id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
			name: 'Yevheniia Balda',
		},
		{
			id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
			name: 'Anna Kim',
		},
		{ id: 'df32994e-b23d-497c-9e4d-85757575757jj', name: 'Ihor Kruk' },
	],
};
const mockedStore = {
	getState: (a) => {
		return mockedState;
	},
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
beforeEach(() =>
	render(
		<Provider store={mockedStore}>
			<MemoryRouter
				initialEntries={[`/courses/update/${mockedState.courses[0].id}`]}
			>
				<Routes>
					<Route path={`/courses/update/:courseId`} element={<CourseForm />} />
				</Routes>
			</MemoryRouter>
		</Provider>
	)
);
describe('CourseForm', () => {
	test('should show authors lists (all and course authors)', () => {
		expect(screen.getByTestId('authors')).toBeInTheDocument();
		expect(screen.getByTestId('authors')).toHaveTextContent(
			mockedState.authors[2].name
		);
		expect(screen.getByTestId('courseAuthors')).toBeInTheDocument();
		expect(screen.getByTestId('courseAuthors')).toHaveTextContent(
			mockedState.authors[0].name,
			mockedState.authors[1].name
		);
	});
	test(`'Create author' click button should call dispatch.`, () => {
		fireEvent.change(screen.getByLabelText('Author name'), {
			target: { value: 'Anna Jem' },
		});
		fireEvent.click(screen.getByText('Create author'));
		expect(mockedStore.dispatch).toHaveBeenCalledTimes(1);
	});
	test(`'Add author' button click should add an author to course authors list`, () => {
		fireEvent.click(
			screen.getByTestId(`addButtonAuthor: ${mockedState.authors[2].id}`)
		);
		expect(screen.getByTestId('courseAuthors')).toHaveTextContent(
			mockedState.authors[2].name
		);
	});
	test(`'Delete author' button click should delete an author from the course list.`, () => {
		fireEvent.click(
			screen.getByTestId(`deleteButtonAuthor: ${mockedState.authors[0].id}`)
		);
		expect(screen.getByTestId('courseAuthors')).not.toHaveTextContent(
			mockedState.authors[0].name
		);
	});
});
