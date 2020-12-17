import styled from 'styled-components';
export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    &:hover {
        .image{
            opacity: 0.8;
        }
        button {
          opacity: 0.85;
          display: flex;
        }
      }
`;
export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-image: url(${props=>props.imageUrl});
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;
export const CollectionFooter = styled.div`
    width: 100%;    
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;
export const CollectionName = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;
export const CollectionPrice = styled.span`
    width: 10%;
`;