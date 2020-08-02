import React from 'react';
import {connect} from "react-redux";
import {addToCart, decItem, deleteItem, incItem} from "../../actions";
import './shopping-cart-table.css';

const ShoppingCartTable = ({cartItems, onDelete, onIncrease, onDecrease, totalPrice}) => {
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    cartItems.map(({id, title, count, price}, idx) => {
                        return (
                            <tr key={id}>
                                <td>{idx + 1}</td>
                                <td>{title}</td>
                                <td>{count}</td>
                                <td>{price}</td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm float-right"
                                            onClick={() => onDelete(id)}>
                                        <i className="fa fa-trash-o"/>
                                    </button>
                                    <button className="btn btn-outline-success btn-sm float-right"
                                            onClick={() => onIncrease(id)}>
                                        <i className="fa fa-plus-circle"/>
                                    </button>
                                    <button className="btn btn-outline-warning btn-sm float-right"
                                            onClick={() => onDecrease(id)}>
                                        <i className="fa fa-minus-circle"/>
                                    </button>
                                </td>
                            </tr>
                        )

                    })
                }
                </tbody>
            </table>

            <div className="total">
                Total: ${totalPrice}
            </div>
        </div>
    );
};
const mapStateToProps = ({cartItems, totalPrice}) => {
    return {
        cartItems,
        totalPrice
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => {
            dispatch(addToCart(id));
        },
        onDecrease: (id) => {
            dispatch(decItem(id));

        },
        onDelete: (id) => {
            dispatch(deleteItem(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
