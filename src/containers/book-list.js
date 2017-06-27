import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
  renderList() {
    return this.props.books.map((book)=>{
      return (
        <li key = {book.title} className='list-group-item'>{book.title}</li>
      )
    })
  }
  render() {
    return(
      <ul className="list-group col-sm-4">{this.renderList()}</ul>
    );
  }
}


// it takes applications' state, all of it, and whatever it returns will be what is going to show as props

function mapStateToProps(state) {
  // whatever is returned from here will show up as props inside the BookList
  return {
    books: state.books
  };
}
// connect takes a function and a component and produces a container, glues react and redux elements togeher
export default connect(mapStateToProps)(BookList);
