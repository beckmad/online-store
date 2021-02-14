import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import BookList from './book-list';
import Spinner from '../spinner';

import {withBookstoreService} from '../hoc';
import {fetchData, addToCart} from '../../actions';

import ErrorIndicator from '../error-indicator';

class BookListContainer extends Component {
    componentDidMount() {
        const {fetchData} = this.props;
        fetchData();
    }

    render() {
        const {books, loading, error, onAddToCart} = this.props;

        if (loading) {
            return <Spinner />;
        }
        if (error) {
            return <ErrorIndicator />;
        }

        return <BookList books={books} onAddToCart={onAddToCart} />;
    }
}

const mapStateToProps = ({books, loading, error}) => ({
    books,
    loading,
    error,
});

const mapDispatchToProps = (dispatch, {bookstoreService}) => ({
    fetchData: fetchData(dispatch, bookstoreService),
    onAddToCart: (id) => dispatch(addToCart(id)),
});

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
