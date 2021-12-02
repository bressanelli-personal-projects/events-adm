import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { WeddingContext } from "../../Providers/wedding";
import DrinksCard from "../../components/DrinksCard/index";
import { Container, InnerContainer, DelButton } from "./styles";

const Weddings = () => {
    const { weddingDrinksList, delDrinkFromWedding } =
        useContext(WeddingContext);

    const location = useLocation();

    return (
        <>
            <Header location={location} />
            <Container>            
                {weddingDrinksList.map((drink, index) => (
                    <InnerContainer key={index}>
                        <DrinksCard drink={drink}></DrinksCard>
                        <DelButton
                            onClick={() => delDrinkFromWedding(drink.id)}
                        >
                            DEL
                        </DelButton>
                    </InnerContainer>
                ))}
            </Container>
        </>
    );
};

export default Weddings;
