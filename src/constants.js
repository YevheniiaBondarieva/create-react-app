export const HeaderButtonLogoutText = 'Logout';

export const addCourseButtonText = 'Add new course';

export const createCourseButtonText = 'Create course';
export const createAuthorButtonText = 'Create author';
export const deleteAuthorButtonText = 'Delete author';
export const addAuthorButtonText = 'Add author';
export const addAuthorLabelText = 'Author name';
export const addAuthorPlaceholdetInputText = 'Enter author name...';
export const courseDurationPlaceholdetText = 'Enter duration in minutes...';
export const courseDuratinLabelText = 'Duration';
export const courseDescriptionPlaceholderText = 'Enter description';
export const courseDescriptionLabelText = 'Description';
export const courseTitleLabelText = 'Title';
export const courseTitlePlaceholdetText = 'Enter title...';
export const defaultCourseDuration = 0;
export const minimumCourseDescriptionLength = '2';
export const minimumAuthorNameLength = '2';

export const searchButtonText = 'Search';
export const searchPlaceholdetText = 'Enter course name...';

export const showCourseButtonText = 'Show course';
export const updateCourseButtonText = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
	>
		<path d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z' />
	</svg>
);
export const deleteCourseButtonText = (
	<svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
		<path d='M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z' />
	</svg>
);

export const registrationNameLabelText = 'Name';
export const registrationNamePlaceholdetText = 'Enter name';
export const registrationEmailLabelText = 'Email';
export const registrationEmailPlaceholdetText = 'Enter email';
export const registrationPasswordLabelText = 'Password';
export const registrationPasswordPlaceholdetText = 'Enter password';
export const registrationButtonText = 'Registration';

export const loginEmailLabelText = 'Email';
export const loginEmailPlaceholdetText = 'Enter email';
export const loginPasswordLabelText = 'Password';
export const loginPasswordPlaceholdetText = 'Enter password';
export const loginButtonText = 'Login';

export const backToCoursesButtonText = '< Back to courses';

export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since the
1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type
specimen book. It has survived 
    not only five centuries, but also the leap into electronic
typesetting, remaining essentially u
    nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum 
    has been the industry's standard dummy text ever since the
1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type
specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];
export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];
