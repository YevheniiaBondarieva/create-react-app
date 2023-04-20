import { addAuthorButtonText } from '../../../../constants';
import { Button } from '../../../../common';

const Authors = ({ authors, addNewAuthor }) => {
	const authorsList = authors?.map((author) => {
		const { id, name } = author;
		return (
			<div id={id} key={id} className='authorsList'>
				<p className='authorsList'>{name}</p>
				<Button
					buttonType='button'
					data-testid={`addButtonAuthor: ${id}`}
					className='addAuthor button'
					buttonText={addAuthorButtonText}
					onClick={() => addNewAuthor(author)}
				/>
			</div>
		);
	});
	return authorsList;
};

export default Authors;
