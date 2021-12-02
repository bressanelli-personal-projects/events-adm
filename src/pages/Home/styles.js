import styled from "styled-components";

export const Container = styled.section`
    width: 100%;    
    background-color: #8BC6EC;
    background-image: linear-gradient(90deg, #8BC6EC 0%, #9599E2 100%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    margin-top: 100px;

    @media only screen and (min-width: 800px) {
        height: calc(100% - 100px);
    }
`;

export const DrinksCard = styled.div`
    width: 300px;
    height: 400px;
    background-color: var(--homepage-drinkscard-back-color);
    margin: 10px;
    padding: 30px;
    border-radius: 10px;
    border: 3px solid var(--border-card-color);

    h2 {
        text-align: center;
        color: var(--homecards-main-title-color);
        font-size: 22px;
    }
`;

export const WeddingCard = styled(DrinksCard)`
    background-color: var(--eventscard-background-color);
`;

export const GraduationCard = styled(WeddingCard)``;

export const ConfraternizationCard = styled(WeddingCard)``;

export const ImageCard = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;

    img {
        width: 250px;
        height: 250px;
        border: 4px solid var(--border-card-color);
        border-radius: 100%;
        object-fit: cover;

        @media only screen and (min-width: 800px) {
            :hover {
                filter: brightness(0.5);
                transform: scale(1.02);

                :active {
                    transform: scale(0.95);
                }
            }
        }
    }
`;
