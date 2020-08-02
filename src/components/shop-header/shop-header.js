import React from 'react';
import {connect} from 'react-redux';
import './shop-header.css';
import {Link} from "react-router-dom";
import logo from './logo.png';

const ShopHeader = ({totalPrice}) => {
    return (
        <header className="shop-header row">
            <Link to='/'>
                <div className="logo text-dark">
                    <img src={logo} alt="logo" width='50' className='img'/>
                    Book Store
                </div>
            </Link>
            <Link to='/cart'>
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {totalPrice}₽
                </div>
            </Link>
        </header>
    );
};

const mapStateToProps = (state) => ({
    totalPrice: state.totalPrice
});

export default connect(mapStateToProps)(ShopHeader);
