import React from 'react';
import {withRouter} from 'react-router-dom';
import {MenuItemContainer, BackrgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle} from './menu-item.styles';
//import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer size={size} 
    onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <BackrgroundImageContainer imageUrl={imageUrl} className='background-image'/>
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);