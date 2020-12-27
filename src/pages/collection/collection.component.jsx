import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

//import './collection.styles.scss';
import {CollectionContainer, CollectionTitle, CollectionItems} from './collection.styles';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return(
    <CollectionContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItems>
            {
                items.map(item => (
                <CollectionItem key={item.id} item={item}/>
                ))
            }
        </CollectionItems>
    </CollectionContainer>
);
};

const mapStateToProps = (state, ownProprs) => (
    {
    collection: selectCollection(ownProprs.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);