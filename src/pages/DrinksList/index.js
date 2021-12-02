import Select from "react-select";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { DrinksContext } from "../../Providers/drinks";
import { Container, NavButton, InnerCard } from "./styles";
import { WeddingContext } from "../../Providers/wedding";
import DrinksCard from "../../components/DrinksCard";
import { GraduationContext } from "../../Providers/graduation";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { ConfraternizationContext } from "../../Providers/confraternization";

const DrinksList = () => {
    const { drinks } = useContext(DrinksContext);
    const { addDrinkToWedding } = useContext(WeddingContext);
    const { addDrinkToGraduation } = useContext(GraduationContext);
    const { addDrinkToConfraternization } = useContext(
        ConfraternizationContext
    );

    const [navMoreDrink, setNavMoreDrink] = useState(3);
    const location = useLocation();
    const scrollControl = false;

    const handleDrinkCarrossel = (dataDirection, scrollControl) => {
        setNavMoreDrink(navMoreDrink + dataDirection);
        if (!scrollControl) {
            if (navMoreDrink < 4) {
                setNavMoreDrink(25);
            }
        }
        if (scrollControl) {
            if (navMoreDrink > 24) {
                setNavMoreDrink(3);
            }
        }
    };

    const eventSelectOptions = [
        { value: "wedding", label: "Casamentos" },
        { value: "graduation", label: "Formaturas" },
        { value: "confraternization", label: "Confraternizações" },
    ];

    const handleSelectedEvent = (selectedEvent, drink) => {
        if (selectedEvent === "wedding") {
            addDrinkToWedding(drink);
            toast.success(`${drink.name} adicionada a Casamentos!`);
        }
        if (selectedEvent === "graduation") {
            addDrinkToGraduation(drink);
            toast.success(`${drink.name} adicionada a Formaturas!`);
        }
        if (selectedEvent === "confraternization") {
            addDrinkToConfraternization(drink);
            toast.success(`${drink.name} adicionada a Confraternização!`);
        }
    };

    return (
        <>
            <Header location={location} />

            <Container>
                <div className="lowResHidden">
                    <NavButton
                        onClick={() => handleDrinkCarrossel(-1, scrollControl)}
                    >
                        <IoIosArrowDropleft />
                    </NavButton>
                </div>

                {drinks
                    .filter(
                        (drink) =>
                            drink.id <= navMoreDrink &&
                            drink.id >= navMoreDrink - 2
                    )

                    .map((drink) => (
                        <InnerCard key={drink.id}>
                            <Select
                                className="select"
                                value={eventSelectOptions.value}
                                options={eventSelectOptions}
                                isClearable
                                placeholder="escolha o evento"
                                onChange={(e) =>
                                    handleSelectedEvent(e?.value, drink)
                                }
                            />

                            <DrinksCard drink={drink} />
                        </InnerCard>
                    ))}

                <div className="Navbutton">
                    <NavButton
                        className="hidden"
                        onClick={() => handleDrinkCarrossel(-1, scrollControl)}
                    >
                        <IoIosArrowDropleft />
                    </NavButton>

                    <NavButton
                        onClick={() => handleDrinkCarrossel(1, !scrollControl)}
                    >
                        <IoIosArrowDropright />
                    </NavButton>
                </div>
            </Container>
        </>
    );
};

export default DrinksList;
