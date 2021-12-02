import styled from "styled-components";

export const DrinkCard = styled.div`
    width: 250px;
    height: 300px;
    border: 3px solid var(--border-card-color);
    border-radius: 8px;
    margin: 10px;
    text-align: left;
    padding: 10px;
    background-color: var(--drinkscard-background-color);

    @media only screen and (min-width: 400px) {
        height: 500px;
    }
`;

export const InnerCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`;

export const ImageContainer = styled.div`
    .image {
        width: 220px;
        height: 250px;
        object-fit: contain;
        margin: 0 auto;
    }
`;

export const DrinkImage = styled.img`
    display: none;

    @media only screen and (min-width: 400px) {
        display: block;
    }
`;

export const Description = styled.p`
    overflow: auto;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    text-align: justify;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 8px var(--scrollbar-color);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: var(--scrollbar-background-color);
    }
`;

export const TextDrinkInfo = styled.p`
    margin: 5px 0;
`;
