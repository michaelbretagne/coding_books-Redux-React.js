import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div><h4 className="started">Select a book to get started</h4></div>;
		}

		return (
			<h5 className="selected">Book Selected</h5>
			<div><h6><a href={this.props.book.link}>{this.props.book.title}</a></h6></div>
			<div>{this.props.book.snippet}</div>
			<div className="images">
				<img className="img" src={this.props.book.image} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail)
