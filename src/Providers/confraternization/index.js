import { createContext, useState } from "react";

export const ConfraternizationContext = createContext();

export const ConfraternizationProvider = ({ children }) => {
    const [confraternizationDrinksList, setConfraternizationDrinksList] =
        useState([]);

    const addDrinkToConfraternization = (drink) => {
        setConfraternizationDrinksList([...confraternizationDrinksList, drink]);
    };

    const delDrinkToConfraternization = (id) => {
        const remainDrinks = confraternizationDrinksList.filter((drink) => {
            return drink.id !== id;
        });
        setConfraternizationDrinksList(remainDrinks);
    };

    return (
        <ConfraternizationContext.Provider
            value={{
                confraternizationDrinksList,
                addDrinkToConfraternization,
                delDrinkToConfraternization,
            }}
        >
            {children}
        </ConfraternizationContext.Provider>
    );
};
