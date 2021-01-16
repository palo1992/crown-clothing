import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import { CollectionItemContainer, ImageContainer, CollectionFooter, CollectionName, CollectionPrice } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <ImageContainer className='image' imageUrl={imageUrl} />
            <CollectionFooter>
                <CollectionName>{name}</CollectionName>
                <CollectionPrice>{price}€</CollectionPrice>
            </CollectionFooter>
            <CustomButton
                onClick={() => addItem(item)}
                inverted
                shopButton>
                Add to cart
        </CustomButton>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);