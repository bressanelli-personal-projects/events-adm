import { useContext } from "react";
import Header from "../../components/Header";
import {
    Container,
    DrinksCard,
    WeddingCard,
    GraduationCard,
    ConfraternizationCard,
    ImageCard,
} from "./styles";
import drinks from "../../assets/drinks.jpg";
import wedding from "../../assets/wedding.jpg";
import graduation from "../../assets/graduation.jpg";
import confrat from "../../assets/confrat.jpg";
import { Link, useLocation } from "react-router-dom";
import { BsFillBookmarksFill } from "react-icons/bs";
import { WeddingContext } from "../../Providers/wedding";
import { GraduationContext } from "../../Providers/graduation";
import { ConfraternizationContext } from "../../Providers/confraternization";

const Home = () => {
    const location = useLocation();
    const { weddingDrinksList } = useContext(WeddingContext);
    const { graduationDrinksList } = useContext(GraduationContext);
    const { confraternizationDrinksList } = useContext(
        ConfraternizationContext
    );

    return (
        <>
            <Header location={location} />

            <Container>
                <DrinksCard>
                    <Link to="/drinks">
                        <h2>Listar Bebidas</h2>
                        <ImageCard>
                            <img src={drinks} alt="drinks" />
                        </ImageCard>
                    </Link>
                </DrinksCard>
                <WeddingCard>
                    <Link to="/weddings">
                        <h2>
                            Casamentos{" "}
                            {weddingDrinksList.length > 0 && (
                                <BsFillBookmarksFill
                                    style={{
                                        color: "darkgreen",
                                    }}
                                />
                            )}
                        </h2>
                        <ImageCard>
                            <img src={wedding} alt="drinks" />
                        </ImageCard>
                    </Link>
                </WeddingCard>
                <GraduationCard>
                    <Link to="/graduation">
                        <h2>
                            Formaturas{" "}
                            {graduationDrinksList.length > 0 && (
                                <BsFillBookmarksFill
                                    style={{
                                        color: "darkgreen",
                                    }}
                                />
                            )}
                        </h2>
                        <ImageCard>
                            <img src={graduation} alt="drinks" />
                        </ImageCard>
                    </Link>
                </GraduationCard>
                <ConfraternizationCard>
                    <Link to="/confraternization">
                        <h2>
                            Confraternizações{" "}
                            {confraternizationDrinksList.length > 0 && (
                                <BsFillBookmarksFill
                                    style={{
                                        color: "darkgreen",
                                    }}
                                />
                            )}
                        </h2>
                        <ImageCard>
                            <img src={confrat} alt="drinks" />
                        </ImageCard>
                    </Link>
                </ConfraternizationCard>
            </Container>
        </>
    );
};

export default Home;
