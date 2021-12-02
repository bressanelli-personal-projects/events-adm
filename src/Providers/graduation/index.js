import { createContext, useState } from "react";

export const GraduationContext = createContext();

export const GraduationProvider = ({ children }) => {
    const [graduationDrinksList, setGraduationDrinksList] = useState([]);

    const addDrinkToGraduation = (drink) => {
        setGraduationDrinksList([...graduationDrinksList, drink]);
    };

    const delDrinkToGraduation = (id) => {
        const remainDrinks = graduationDrinksList.filter((drink) => {
            return drink.id !== id;
        });
        setGraduationDrinksList(remainDrinks);
    };

    return (
        <GraduationContext.Provider
            value={{
                graduationDrinksList,
                addDrinkToGraduation,
                delDrinkToGraduation,
            }}
        >
            {children}
        </GraduationContext.Provider>
    );
};
