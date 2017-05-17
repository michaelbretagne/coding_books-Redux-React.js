export function selectBook(book) {
	// SelectBook is an ActionCreaor, it need to return an action, 
	// an objectwith a type property.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}