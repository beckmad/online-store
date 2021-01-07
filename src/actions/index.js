import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    ADD_TO_CART,
    DEC_ITEM,
    DELETE_ITEM,
    CHANGE_THEME
} from './types';

const booksRequested = () => ({
    type: FETCH_BOOKS_REQUEST,
});

const booksLoaded = (newBooks) => ({
    type: FETCH_BOOKS_SUCCESS,
    newBooks,
});

const getError = (error) => ({
    type: FETCH_BOOKS_FAILURE,
    error
});

export const addToCart = (id) => ({
    type: ADD_TO_CART,
    id
});

export const decItem = (id) => ({
    type: DEC_ITEM,
    id
})

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    id
})

export const changeTheme = (theme) => ({
    type: CHANGE_THEME,
    theme
})

export const fetchData = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService
        .getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(e => dispatch(getError(e)))
}
