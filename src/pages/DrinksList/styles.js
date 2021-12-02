import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 100px auto;

    & div.Navbutton {
        width: 150px;
        display: flex;
        justify-content: space-between;
    }

    & div.lowResHidden  {
        display: none;
    }    
    

    @media only screen and (min-width: 400px) {
        width: 400px;
    }

    @media only screen and (min-width: 1025px) {
        width: 100%;
        justify-content: center;
        flex-wrap: nowrap;
        align-items: center;
        flex-direction: row;

        & div.Navbutton > .hidden {
            display: none;
        }

        & div.lowResHidden  {
        display: block;
    }
    }
`;

export const InnerCard = styled.div`
    border: 3px solid var(--border-card-color);
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
    background-color: var(--background-card-color);

    .select {
        max-width: 250px;
        margin: 0 auto;
        border: 2px solid var(--border-card-color);
        border-radius: 4px;

        @media only screen and (min-width: 800px) { }
    }
`;

export const DrinkImage = styled.img`
    width: 280px;
    height: 200px;
    object-fit: contain;
    padding: 10px;
    margin: 0 auto;
`;

export const Description = styled.p`
    overflow: auto;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
`;

export const NavButton = styled.div`
    color: var(--primary-nav-button-color);
    width: 50px;
    height: 50px;
    font-size: 50px;
    border-radius: 100%;
    
    @media only screen and (min-width: 1025px) {
        cursor: pointer;

        :hover {
            background-color: var(--primary-nav-button-color);
            color: var(--secondary-nav-button-color);
        }

        :active {
            transform: scale(0.8);
        }
    }
`;
