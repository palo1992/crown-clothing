import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
`;
export const SignInTitle = styled.h2`
    margin: 10px 0;
    
    @media screen and (max-width: 800px) {
        text-align: center;
        & + span{
            text-align: center;
        }
    }
`;
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;