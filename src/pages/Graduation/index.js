import { useContext } from "react";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import DrinksCard from "../../components/DrinksCard";
import { GraduationContext } from "../../Providers/graduation";
import { Container, InnerContainer, DelButton } from "./styles";

const Graduation = () => {
    const { graduationDrinksList, delDrinkToGraduation } =
        useContext(GraduationContext);
    const location = useLocation();

    return (
        <>
            <Header location={location}/>
            <Container>
                {graduationDrinksList.map((drink, index) => (
                    <InnerContainer key={index}>
                        <DrinksCard drink={drink}></DrinksCard>
                        <DelButton
                            onClick={() => delDrinkToGraduation(drink.id)}
                        >
                            DEL
                        </DelButton>
                    </InnerContainer>
                ))}
            </Container>
        </>
    );
};

export default Graduation;
