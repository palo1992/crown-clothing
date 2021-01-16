import React from 'react';

import { CartItemContainer, ImageItem, ItemDetails } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ImageItem src={imageUrl} alt='item' />
        <ItemDetails>
            <span className="name">{name}</span>
            <span className="price">{quantity} x {price}€</span>
        </ItemDetails>
    </CartItemContainer>
);

export default React.memo(CartItem);