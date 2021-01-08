import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


//import './cart-dropdown.styles.scss';
import {CartDropdownContainer, CartItems, SpanEmptyMessage,CartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItems>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                ) :
                (
                    <SpanEmptyMessage>Your cart is empty</SpanEmptyMessage>
                )
                
            }
        </CartItems>
            <CartDropdownButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }
            }>GO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));