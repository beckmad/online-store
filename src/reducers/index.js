const initialState = {
    books: [],
    loading: true,
    error: false,
    cartItems: [],
    totalPrice: 0,
    lengthItems: 0
};
const updateCartItems = (allBooks, book, newBook) => {
    let copyItems = [...allBooks];
    let isContain;
    copyItems = copyItems.map((item) => {
        if (item.id === newBook.id) {
            isContain = true;
            return {...item, count: item.count + 1, price: item.price + book.price};
        }

        return item;
    });
    copyItems = !isContain ? [...allBooks, newBook] : copyItems;

    return copyItems;
}
const decCartItems = (allBooks, book, newBook) => {
    let copyItems = [...allBooks];
    copyItems = copyItems.map((item) => {
        if (item.id === newBook.id) {
            return {...item, count: item.count - 1, price: item.price - book.price};
        }

        return item;
    }).filter(item => item.count !== 0);

    return copyItems;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.newBooks,
                loading: false,
                error: false
            };
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: state.books,
                loading: true,
                error: false,
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: state.books,
                loading: false,
                error: true,
            };
        case 'ADD_TO_CART': {
            const bookId = action.id;
            const book = state.books.find(book => bookId === book.id);
            const newBook = {
                id: book.id,
                title: book.title,
                count: 1,
                price: book.price,
            }

            const items = updateCartItems(state.cartItems, book, newBook);
            const totalPrice = items.reduce((prev, cur) => prev + cur.price, 0)

            return {
                ...state,
                cartItems: items,
                totalPrice: totalPrice,
                lengthItems: items.length
            }
        }
        case 'DELETE_ITEM':
            const deleteId = action.id;
            const idx = state.cartItems.findIndex(item => deleteId === item.id);
            const currentItems = [
                ...state.cartItems.slice(0, idx),
                ...state.cartItems.slice(idx + 1)
            ];
            const totalPrice = currentItems.reduce((prev, cur) => prev + cur.price, 0)
            return {
                ...state,
                cartItems: currentItems,
                totalPrice: totalPrice,
                lengthItems: currentItems.length
            }
        case 'DEC_ITEM': {
            const bookId = action.id;
            const book = state.books.find(book => bookId === book.id);
            const newBook = {
                id: book.id
            }

            const items = decCartItems(state.cartItems, book, newBook);
            let totalPrice = items.reduce((prev, cur) => prev + cur.price, 0)

            return {
                ...state,
                cartItems: items,
                totalPrice: totalPrice,
                currentItems: items.length
            }
        }
        default:
            return state;
    }
};

export default reducer;
