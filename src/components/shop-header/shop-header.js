import React from 'react';
import {connect} from 'react-redux';
import './shop-header.css';
import {Link} from "react-router-dom";
import logo from './logo.png';
import {changeTheme} from "../../actions";
import PropTypes from 'prop-types'

const ShopHeader = ({totalPrice, lengthItems, changeTheme, theme}) => {
    const switcher = {
        light: '🌒',
        dark: '🌖'
    }
    return (
        <header className="shop-header row">
            <button className='btn' onClick={changeTheme}>{switcher[theme]}</button>
            <Link to='/'>
                <div className="logo text-dark">
                    <img src={logo} alt="logo" width='50' className='img'/>
                    Book Store
                </div>
            </Link>
            <Link to='/cart'>
                <div className="shopping-cart">
                    {lengthItems}
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {totalPrice}₽
                </div>
            </Link>
        </header>
    );
};
ShopHeader.proPypes = {
    lengthItems: PropTypes.number,
    totalPrice: PropTypes.number
}
const mapStateToProps = ({totalPrice, lengthItems, theme}) => ({
    totalPrice,
    lengthItems,
    theme
});

const mergeProps = (stateToProps, {dispatch}) => ({
    ...stateToProps,
    changeTheme: () => dispatch(changeTheme(stateToProps.theme))
});

export default connect(mapStateToProps, null, mergeProps)(ShopHeader);
