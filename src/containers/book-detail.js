import React, {Component} from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  render() {

    if (!this.props.book) {
      return <div>Select a book!</div>;
    }
    return(
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // whatever object is returned from here will be available for Booklist component as its props
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
