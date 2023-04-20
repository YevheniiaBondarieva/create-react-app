export const HeaderButtonLogoutText = 'Logout';

export const addCourseButtonText = 'Add new course';

export const createCourseButtonText = 'Create course';
export const updateCourseButtonText = 'Update course';
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

export const roles = { admin: 'admin', user: 'user' };

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
