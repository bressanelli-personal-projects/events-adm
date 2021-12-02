import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 100px;
`;

export const InnerContainer = styled.div`
    width: 300px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    border: 3px solid var(--border-card-color);
    background-color: var(--background-card-color);
`;

export const DelButton = styled.button`
    width: 100px;
    padding: 5px;
    background-color: var(--del-button-primary-color);
    border: 3px solid transparent;
    border-radius: 4px;
    color: var(--text-color);
    font-size: 18px;

    @media only screen and (min-width: 1025px) {
        :hover {
            border: 3px solid var(--del-button-hover-color);
            color: var(--del-button-hover-color);
            font-weight: 700;
        }
    }
`;
