import React, { Component } from 'react';
import BookList from '../containers/book-list';

import BookDetail from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
      <div>
      	<div className="list">
      		<BookList />
      	</div>
      	<div className="col-sm-8">
			<div className="center">
  				<BookDetail />
  			</div>
      	</div>
      </div>
    );
  }
}
