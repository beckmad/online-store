import {IBook, TTheme} from "../models";

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DEC_ITEM = 'DEC_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHANGE_THEME = 'CHANGE_THEME';

interface IFetchBooksRequest {
    type: typeof FETCH_BOOKS_REQUEST;
}

interface IFetchBooksSuccess {
    type: typeof FETCH_BOOKS_SUCCESS;
    newBooks: IBook[];
}

interface IFetchBooksFailure {
    type: typeof FETCH_BOOKS_FAILURE;
    error: Error;
}

interface IAddToCart {
    type: typeof ADD_TO_CART;
    id: number;

}

interface IDecFromCart {
    type: typeof DEC_ITEM;
    id: number;
}

interface IDeleteItem {
    type: typeof DELETE_ITEM;
    id: number;
}

interface IChangeTheme {
    type: typeof CHANGE_THEME;
    theme: TTheme;
}

export type TCartActionTypes = IFetchBooksRequest |
    IFetchBooksSuccess |
    IFetchBooksFailure |
    IAddToCart |
    IDecFromCart |
    IDeleteItem |
    IChangeTheme;