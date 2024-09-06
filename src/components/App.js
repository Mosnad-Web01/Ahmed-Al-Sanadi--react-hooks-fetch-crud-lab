import React, { useState } from 'react';
import AdminNavBar from './AdminNavBar';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

/**
 * App component, which renders either the QuestionForm or QuestionList component
 * based on the state of the `currentPage` variable, which is updated by the
 * AdminNavBar component.
 */
function App() {
	const [currentPage, setCurrentPage] = useState('list');

	return (
		<main>
			<AdminNavBar onPageChange={setCurrentPage} />
			{currentPage === 'form' ? (
				<QuestionForm />
			) : currentPage === 'list' ? (
				<QuestionList />
			) : (
				<h1>Page Not Found</h1>
			)}
		</main>
	);
}

export default App;
