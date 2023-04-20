import { deleteAuthorButtonText } from '../../../../constants';
import { Button } from '../../../../common';

const CourseAuthors = ({ courseAuthors, deleteAuthor }) => {
	const courseAuthorsList = courseAuthors?.map((author) => {
		return (
			<div id={author.id} key={author.id} className='courseAuthors'>
				<p className='courseAuthors'>{author.name}</p>
				<Button
					buttonType='button'
					data-testid={`deleteButtonAuthor: ${author.id}`}
					className='deleteAuthor button'
					buttonText={deleteAuthorButtonText}
					onClick={() => deleteAuthor(author)}
				/>
			</div>
		);
	});
	return courseAuthorsList;
};

export default CourseAuthors;
