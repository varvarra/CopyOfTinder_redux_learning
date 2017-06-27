export function selectBook(book) {
  // returns an action, an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payLoad: book
  }
};
