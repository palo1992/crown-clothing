import React from 'react';

import {CartItemContainer, ImageItem, ItemDetails} from './cart-item.styles';
//import './cart-item.styles.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <ImageItem src={imageUrl} alt='item'/>
        <ItemDetails>
            <span className="name">{name}</span>
            <span className="price">{quantity} x {price}€</span>
        </ItemDetails>
    </CartItemContainer>
);

export default CartItem;