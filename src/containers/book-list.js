import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList() {
    return this.props.books.map((book)=>{
      return (
        <li
           key = {book.title}
           onClick = {() => this.props.selectBook(book)}
           className='list-group-item'>
           {book.title}
        </li>
      );
    });
  }
  render() {
    return(
      <ul className="list-group col-sm-4">{this.renderList()}</ul>
    );
  }
}


// it takes applications' state, all of it (state containes Array of books and an active book), and whatever it returns will be what is going to show as props

function mapStateToProps(state) {
  // whatever object is returned from here will be available for Booklist component as its props
  return {
    books: state.books
  };
}
// Anthing returned from this function will end up as props for Booklist container
function mapDispatchToProps(dispatch){
  // wheneer selectBook is called reault should be passed to all other reducers -that's what bindActionCreators is doing here,
  return bindActionCreators({selectBook: selectBook}, dispatch)
}
// connect takes a function and a component  BookList and produces a container, glues react and redux elements togeher
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
