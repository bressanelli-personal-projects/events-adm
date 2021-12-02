import { createContext, useState } from "react";

export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
    const [weddingDrinksList, setWeddingDrinksList] = useState([]);

    const addDrinkToWedding = (drink) => {
        setWeddingDrinksList([...weddingDrinksList, drink]);
    };

    const delDrinkFromWedding = (id) => {
        const remainDrinks = weddingDrinksList.filter((drink) => {
            return drink.id !== id;
        });
        setWeddingDrinksList(remainDrinks);
    };

    return (
        <WeddingContext.Provider
            value={{
                weddingDrinksList,
                addDrinkToWedding,
                delDrinkFromWedding,
            }}
        >
            {children}
        </WeddingContext.Provider>
    );
};
