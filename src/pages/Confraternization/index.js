import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import DrinksCard from "../../components/DrinksCard/index";
import { Container, InnerContainer, DelButton } from "./styles";
import { ConfraternizationContext } from "../../Providers/confraternization";

const Confraternization = () => {
    const { confraternizationDrinksList, delDrinkToConfraternization } =
        useContext(ConfraternizationContext);

    const location = useLocation();

    return (
        <>
            <Header location={location} />
            <Container>
                {confraternizationDrinksList.map((drink, index) => (
                    <InnerContainer key={index}>
                        <DrinksCard drink={drink}></DrinksCard>
                        <DelButton
                            onClick={() =>
                                delDrinkToConfraternization(drink.id)
                            }
                        >
                            DEL
                        </DelButton>
                    </InnerContainer>
                ))}
            </Container>
        </>
    );
};

export default Confraternization;
