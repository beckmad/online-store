import {IBook, TTheme} from '../models';
import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    ADD_TO_CART,
    DEC_ITEM,
    DELETE_ITEM,
    CHANGE_THEME,
    TCartActionTypes,
} from './types';

const booksRequested = (): TCartActionTypes => ({
    type: FETCH_BOOKS_REQUEST,
});

const booksLoaded = (newBooks: IBook[]): TCartActionTypes => ({
    type: FETCH_BOOKS_SUCCESS,
    newBooks,
});

const getError = (error: Error): TCartActionTypes => ({
    type: FETCH_BOOKS_FAILURE,
    error,
});

export const addToCart = (id: number): TCartActionTypes => ({
    type: ADD_TO_CART,
    id,
});

export const decItem = (id: number): TCartActionTypes => ({
    type: DEC_ITEM,
    id,
});

export const deleteItem = (id: number): TCartActionTypes => ({
    type: DELETE_ITEM,
    id,
});

export const changeTheme = (theme: TTheme): TCartActionTypes => ({
    type: CHANGE_THEME,
    theme,
});

export const fetchData = (dispatch, bookstoreService): Function => (): void => {
    dispatch(booksRequested());
    bookstoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((e) => dispatch(getError(e)));
};
