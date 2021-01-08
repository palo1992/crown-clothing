import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

//import './checkout.styles.scss';
import {CheckoutPageContainer, CheckoutHeader, CheckoutHeaderCheckout, Total, TestWarning} from './checkout.styles';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeader>
            <CheckoutHeaderCheckout>
                <span>Product</span>
            </CheckoutHeaderCheckout>
            <CheckoutHeaderCheckout>
                <span>Description</span>
            </CheckoutHeaderCheckout>
            <CheckoutHeaderCheckout>
                <span>Quantity</span>
            </CheckoutHeaderCheckout>
            <CheckoutHeaderCheckout>
                <span>Price</span>
            </CheckoutHeaderCheckout>
            <CheckoutHeaderCheckout>
                <span>Remove</span>
            </CheckoutHeaderCheckout>
        </CheckoutHeader>
        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
        <Total>
            <span>TOTAL: {total}€</span>
        </Total>
        <TestWarning>
            *Please use the following test credit cart for payments* 
            <br/>
            4242 4242 4242 4242 - Exp: Enter any future date for card expiry.
            CVC: Enter any 3-digit number for CVC
        </TestWarning>
        <StripeCheckoutButton  price={total} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);